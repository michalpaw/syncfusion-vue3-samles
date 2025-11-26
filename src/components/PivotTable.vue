/// ///////////////////////////////////////////////////////////////////////////////
// Copyright (C) 2025 CONQUER INNOVATIONS SP. Z O.O. Global B.V. and its affiliate(s).
// All rights reserved.
//
// This software and other materials contain proprietary information
// controlled by CONQUER INNOVATIONS SP. Z O.O. and are protected by applicable copyright legislation.
// Any use and utilization of this software and other materials and
// disclosure to any third parties is conditional upon having a separate
// agreement with CONQUER INNOVATIONS SP. Z O.O. for the access, use, utilization or disclosure of this
// software. In the absence of such agreement, the use of the software is not
// allowed.
// The creator, author and originator of the code in the current file: Michał Pawłowski
//////////////////////////////////////////////////////////////////////////////////
<template>
  <div>
    <meta name="referrer" content="never" />
    <div class="control-section" id="pivot-table-section">
      <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"
                       :gridSettings="gridSettings" :width="width" :height="height" :allowExcelExport="allowExcelExport"
                       :allowConditionalFormatting="allowConditionalFormatting" :allowNumberFormatting="allowNumberFormatting"
                       :allowPdfExport="allowPdfExport" :showToolbar="showToolbar" :allowCalculatedField="allowCalculatedField"
                       :showFieldList="showFieldList" :enableVirtualization="enableVirtualization" :exportAllPages="exportAllPages"
                       :allowDeferLayoutUpdate="allowDeferLayoutUpdate" :allowDrillThrough="allowDrillThrough"
                       :maxNodeLimitInMemberEditor="maxNodeLimitInMemberEditor" :showGroupingBar="showGroupingBar"
                       :allowGrouping="allowGrouping" :enableValueSorting="enableValueSorting" :toolbar="toolbar"
                       :saveReport="saveReport" :loadReport="loadReport" :fetchReport="fetchReport" :renameReport="renameReport"
                       :removeReport="removeReport" :newReport="newReport" :toolbarRender="beforeToolbarRender"
                       :chartSeriesCreated="chartSeriesCreated" :load="load" :displayOption="displayOption" :chartSettings="chartSettings"
                       :cellTemplate="'myTemplate'" :enableFieldSearching="enableFieldSearching">
          <template v-slot:myTemplate="{ data }">
            <span class="template-wrap" v-html="getCellContent(data)"></span>
          </template>
        </ejs-pivotview>
      </div>
      <div class="urllink">
        Source:
        <a href="https://www.topuniversities.com/university-rankings?utm_source=topnav" target="_blank">QS World
          University Rankings</a>
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
  IAxisSet,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  NumberFormatting,
  VirtualScroll,
  Grouping,
  DrillThrough
} from "@syncfusion/ej2-vue-pivotview";
import { createElement, enableRipple, select, isNullOrUndefined, Browser } from "@syncfusion/ej2-base";
import { ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { Universitydata } from "./pivottable/data-source";
enableRipple(false);

/* tslint:disable */
declare let require: any;
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
const theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        columns: [{ name: 'region', caption: 'Region' }, { name: 'country', caption: 'Country' }],
        rows: [{ name: 'rank_display', caption: 'Rank', expandAll: true, allowDragAndDrop: false },
          { name: 'university', caption: 'University', expandAll: true, allowDragAndDrop: false }],
        formatSettings: [{ name: 'international_students', format: 'N0' },
          { name: 'faculty_count', format: 'N0' }],
        dataSource: Universitydata,
        expandAll: false,
        values: [{ name: 'international_students', caption: 'Students' },
          { name: 'faculty_count', caption: 'Faculty' }],
        filters: [{ name: 'type', caption: 'University Type' }],
        filterSettings: [{ name: 'region', type: 'Exclude', items: ['Africa', 'Latin America'] }],
        fieldMapping: [{ name: 'rank_display', dataType: 'number' },
          { name: 'country', caption: 'Country' },
          { name: 'city', caption: 'City' },
          { name: 'region', caption: 'Region' },
          { name: 'research_output', caption: 'Research Output' },
          { name: 'student_faculty_ratio', caption: 'Student faculty ratio' }],
        groupSettings: [{ name: 'rank_display', type: 'Number', rangeInterval: 100 }],
        conditionalFormatSettings: [
          {
            measure: 'international_students',
            value1: 1,
            value2: 5000,
            conditions: 'Between',
            style: {
              backgroundColor: '#E10000',
              color: 'white',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            },
            applyGrandTotals: false
          },
          {
            measure: 'international_students',
            value1: 50000,
            conditions: 'GreaterThan',
            style: {
              backgroundColor: '#0C860C',
              color: 'white',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            },
            applyGrandTotals: false
          },
          {
            measure: 'faculty_count',
            value1: 1,
            value2: 1000,
            conditions: 'Between',
            style: {
              backgroundColor: '#E10000',
              color: 'white',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            },
            applyGrandTotals: false
          },
          {
            measure: 'faculty_count',
            value1: 10000,
            conditions: 'GreaterThan',
            style: {
              backgroundColor: '#0C860C',
              color: 'white',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            },
            applyGrandTotals: false
          }
        ],
        showHeaderWhenEmpty: false,
        emptyCellsTextContent: '-',
        excludeFields: ['link', 'logo']
      },
      width: "100%",
      height: 600,
      allowExcelExport: true,
      allowConditionalFormatting: true,
      allowNumberFormatting: true,
      allowPdfExport: true,
      displayOption: { view: 'Both' },
      chartSettings: {
        theme: theme,
        title: 'Top Universities Analysis',
        load: (args: ILoadedEventArgs) => {
          let selectedTheme: string = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast') as ChartTheme;
        }
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
        "SubTotal",
        "GrandTotal",
        "Formatting",
        "FieldList"
      ],
      enableVirtualization: true,
      allowDeferLayoutUpdate: true,
      allowDrillThrough: true,
      showGroupingBar: true,
      allowGrouping: true,
      enableValueSorting: true,
      exportAllPages: false,
      maxNodeLimitInMemberEditor: 50,
      gridSettings: {
        columnWidth: 120, allowSelection: true, rowHeight: 36,
        selectionSettings: { mode: 'Cell', type: 'Single', cellSelectionMode: 'Box' },
        excelQueryCellInfo: (args: ExcelQueryCellInfoEventArgs) => {
          if (!isNullOrUndefined(args) && (args.cell as IAxisSet).axis === 'value' && (args.cell as IAxisSet).value === undefined) {
            (args as any).style.numberFormat = undefined;
          }
        }
      },
      enableFieldSearching: true
    };
  },
  methods: {
    chartSeriesCreated: function (args: any) {
      const pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      pivotObj.chartSettings.chartSeries.legendShape = pivotObj.chartSettings.chartSeries.type === 'Polar' ? 'Rectangle' : 'SeriesType';
    },
    getCellContent: function (args: any) {
      const pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.cellInfo && args.cellInfo.axis === 'value' && pivotObj.pivotValues[args.cellInfo.rowIndex] && pivotObj.pivotValues[args.cellInfo.rowIndex][0].hasChild) {
        if (args.targetCell.classList.contains(args.cellInfo.cssClass)) {
          args.targetCell.classList.remove(args.cellInfo.cssClass);
          args.cellInfo.style = undefined;
        }
      }
      if (args.cellInfo && args.targetCell.querySelectorAll('.university-logo').length === 0 && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'university') {
        const imgElement = createElement('img', {
          className: 'university-logo',
          attrs: {
            'src': pivotObj.dataSourceSettings.dataSource[args.cellInfo.index[0]].logo,
            'alt': args.cellInfo.formattedText + ' Image',
            'width': '30',
            'height': '30'
          },
        });
        const cellValue = select('.e-cellvalue', args.targetCell);
        cellValue.classList.add('e-hyperlinkcell');
        cellValue.addEventListener('click', this.hyperlinkCellClick.bind(pivotObj));
        args.targetCell.firstElementChild.insertBefore(imgElement, cellValue);
      }
      return '';
    },
    hyperlinkCellClick: function (args: any) {
      const pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      const cell = (args.target).closest('.e-rowsheader');
      const pivotValue = pivotObj.pivotValues[Number(cell.getAttribute('index'))][Number(cell.getAttribute('aria-colindex')) - 1];
      const link = pivotValue.index ? pivotObj.dataSourceSettings.dataSource[pivotValue.index[0]].link : "";
      window.open(link, '_blank');
    },
    saveReport: function (args: any) {
      let reports = [];
      let isSaved = false;
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        reports = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.report && args.reportName && args.reportName !== "") {
        const report = JSON.parse(args.report);
        report.dataSourceSettings.dataSource = [];
        report.pivotValues = [];
        args.report = JSON.stringify(report);
        reports.map(function (item: any) {
          if (args.reportName === item.reportName) {
            item.report = args.report;
            isSaved = true;
          }
        });
        if (!isSaved) {
          reports.push(args);
        }
        localStorage.pivotviewReports = JSON.stringify(reports);
      }
    },
    fetchReport: function (args: any) {
      let reportCollection = [];
      const reeportList: any = [];
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function (item: any) {
        reeportList.push(item.reportName);
      });
      args.reportName = reeportList;
    },
    loadReport: function (args: any) {
      const pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let reportCollection = [];
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function (item: any) {
        if (args.reportName === item.reportName) {
          args.report = item.report;
        }
      });
      if (args.report) {
        const report = JSON.parse(args.report);
        report.dataSourceSettings.dataSource = pivotObj.dataSourceSettings.dataSource;
        pivotObj.dataSourceSettings = report.dataSourceSettings;
      }
    },
    removeReport: function (args: any) {
      let reportCollection = [];
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      for (let i = 0; i < reportCollection.length; i++) {
        if (reportCollection[i].reportName === args.reportName) {
          reportCollection.splice(i, 1);
        }
      }
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportCollection);
      }
    },
    renameReport: function (args: any) {
      let reportsCollection = [];
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        reportsCollection = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.isReportExists) {
        for (let i = 0; i < reportsCollection.length; i++) {
          if (reportsCollection[i].reportName === args.rename) {
            reportsCollection.splice(i, 1);
          }
        }
      }
      reportsCollection.map(function (item: any) {
        if (args.reportName === item.reportName) {
          item.reportName = args.rename;
        }
      });
      if (
          localStorage.pivotviewReports &&
          localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportsCollection);
      }
    },
    newReport: function () {
      const pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      pivotObj.setProperties(
          {
            dataSourceSettings: {
              columns: [],
              rows: [],
              values: [],
              filters: []
            }
          },
          false
      );
    },
    beforeToolbarRender: function (args: any) {
      args.customToolbar.splice(6, 0, {
        type: 'Separator'
      });
      args.customToolbar.splice(9, 0, {
        type: 'Separator'
      });
    },
    load: function (args: any) {
      if (Browser.isDevice) {
        args.dataSourceSettings.rows = [{ name: 'rank_display', caption: 'Rank', expandAll: true, allowDragAndDrop: false }];
      }
    }
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
      DrillThrough
    ]
  }
}
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

 :deep() #PivotView_PivotFieldList {
  width: auto !important;
}

 :deep() #pivotview {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  #pivot-grid-section {
    overflow: auto;
  }
}

 :deep() .sb-sample-content-area {
  min-height: 255px !important;
}

 :deep() .control-section {
  min-height: 255px !important;
}

 :deep() #pivotviewcontainerwrapper {
  height: auto !important;
}

 :deep() .e-hyperlinkcell {
  text-decoration: auto;
}

 :deep() .e-hyperlinkcell:hover {
  text-decoration: underline;
}

 :deep() .university-logo {
  border-radius: 50%;
  margin-right: 5px;
}

 :deep() .urllink {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
