<template>
  <div>
    <div class="control-section" id="products-pivot-table-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="productsPivotView"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :allowExcelExport="allowExcelExport"
          :allowPdfExport="allowPdfExport"
          :showToolbar="showToolbar"
          :toolbar="toolbar"
          :showFieldList="showFieldList"
          :allowCalculatedField="allowCalculatedField"
          :enableVirtualization="enableVirtualization"
          :displayOption="displayOption"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ChartTheme, ILoadedEventArgs } from "@syncfusion/ej2-charts";
import {
  PivotViewComponent,
  GroupingBar,
  FieldList,
  IDataSet,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  NumberFormatting,
  VirtualScroll,
  Grouping,
  DrillThrough,
} from "@syncfusion/ej2-vue-pivotview";

// Simple mock products data generator
function buildProductsData(): any[] {
  const products = [
    { id: 1001, name: "Aurora Lamp", ean: "5901234567890" },
    { id: 1002, name: "Nimbus Chair", ean: "5901234567891" },
    { id: 1003, name: "Zephyr Desk", ean: "5901234567892" },
    { id: 1004, name: "Atlas Shelf", ean: "5901234567893" },
    { id: 1005, name: "Echo Mug", ean: "5901234567894" },
  ];
  const employees = ["Alice", "Bob", "Carla", "David"]; 

  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const addDays = (base: Date, days: number) => new Date(base.getTime() + days * 86400000);

  const rows: any[] = [];
  const start = new Date(new Date().getFullYear(), 0, 1);

  // For each product create several supply and sales events across the year
  for (const p of products) {
    let stock = rand(50, 250);
    // Initial supply
    for (let i = 0; i < 3; i++) {
      const supplyDate = addDays(start, rand(0, 330));
      const supplyAmount = rand(20, 120);
      stock += supplyAmount;
      rows.push({
        productId: p.id,
        productName: p.name,
        productEan: p.ean,
        employeeName: employees[rand(0, employees.length - 1)],
        activity: "Supply",
        supplyDate,
        sellingDate: supplyDate, // keep a date in sellingDate too for grouping uniformity
        soldAmount: 0,
        supplyAmount,
        currentStock: stock,
      });
    }
    // Sales
    for (let i = 0; i < 10; i++) {
      const sellingDate = addDays(start, rand(0, 360));
      const soldAmount = rand(1, 25);
      stock = Math.max(0, stock - soldAmount);
      rows.push({
        productId: p.id,
        productName: p.name,
        productEan: p.ean,
        employeeName: employees[rand(0, employees.length - 1)],
        activity: "Sale",
        sellingDate,
        supplyDate: sellingDate,
        soldAmount,
        supplyAmount: 0,
        currentStock: stock,
      });
    }
  }
  return rows;
}

const sampleData: IDataSet[] = buildProductsData();

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
const theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default {
  components: {
    "ejs-pivotview": PivotViewComponent,
  },
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        dataSource: sampleData,
        // Columns: time breakdown of sellingDate (also present in supply rows for uniformity)
        columns: [
          { name: "sellingDate", caption: "Date" },
          { name: "activity", caption: "Activity" },
        ],
        // Rows: product identifiers
        rows: [
          { name: "productName", caption: "Product" },
          { name: "productEan", caption: "EAN" },
        ],
        values: [
          { name: "soldAmount", caption: "Sold Qty" },
          { name: "supplyAmount", caption: "Supplied Qty" },
          { name: "currentStock", caption: "Current Stock", type: "Max" },
        ],
        filters: [
          { name: "employeeName", caption: "Employee" },
        ],
        formatSettings: [
          { name: "soldAmount", format: "N0" },
          { name: "supplyAmount", format: "N0" },
          { name: "currentStock", format: "N0" },
        ],
        groupSettings: [
          { name: "sellingDate", type: "Date", groups: ["Years", "Quarters", "Months"] },
          { name: "supplyDate", type: "Date", groups: ["Years", "Quarters", "Months"] },
        ],
        showHeaderWhenEmpty: false,
        emptyCellsTextContent: "-",
      },
      width: "100%",
      height: 600,
      allowExcelExport: true,
      allowPdfExport: true,
      displayOption: { view: "Both" },
      chartSettings: {
        theme: theme as unknown as ChartTheme,
        title: "Products: Sales and Supplies Overview",
        load: (args: ILoadedEventArgs) => {
          let selectedTheme: string = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
            .replace(/-dark/i, "Dark")
            .replace(/contrast/i, "Contrast")
            .replace(/-highContrast/i, "HighContrast") as ChartTheme;
        },
      },
      showToolbar: true,
      allowCalculatedField: true,
      showFieldList: true,
      toolbar: [
        "New",
        "Save",
        "SaveAs",
        "Rename",
        "Remove",
        "Load",
        "Grid",
        "Chart",
        "Export",
        "FieldList",
      ],
      enableVirtualization: true,
      gridSettings: {
        columnWidth: 120,
        allowSelection: true,
        rowHeight: 36,
      },
    };
  },
  provide: {
    pivotview: [
      FieldList,
      CalculatedField,
      Toolbar,
      PDFExport,
      ExcelExport,
      ConditionalFormatting,
      NumberFormatting,
      VirtualScroll,
      GroupingBar,
      Grouping,
      DrillThrough,
    ],
  },
};
</script>

<style scoped>
@import '@syncfusion/ej2-base/styles/tailwind.css';
@import '@syncfusion/ej2-buttons/styles/tailwind.css';
@import '@syncfusion/ej2-calendars/styles/tailwind.css';
@import '@syncfusion/ej2-dropdowns/styles/tailwind.css';
@import '@syncfusion/ej2-inputs/styles/tailwind.css';
@import '@syncfusion/ej2-navigations/styles/tailwind.css';
@import '@syncfusion/ej2-popups/styles/tailwind.css';
@import '@syncfusion/ej2-splitbuttons/styles/tailwind.css';
@import '@syncfusion/ej2-vue-grids/styles/tailwind.css';
@import '@syncfusion/ej2-vue-pivotview/styles/tailwind.css';

:deep() #productsPivotView {
  width: 100%;
}
</style>
