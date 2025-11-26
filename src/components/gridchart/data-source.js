/**
 * Data Source for Syncfusion Vue 3 Grid
 * Converted to ES Modules with sample data
 */

// 1. Order Data
export const orderData = [
    {
        "OrderID": 10248,
        "CustomerID": "VINET",
        "OrderDate": new Date("1996-07-04T00:00:00.000Z"),
        "ShippedDate": new Date("1996-07-16T00:00:00.000Z"),
        "Freight": 32.38,
        "ShipName": "Vins et alcools Chevalier",
        "ShipAddress": "59 rue de l'Abbaye",
        "ShipCity": "Reims",
        "ShipRegion": null,
        "ShipCountry": "France",
        "Verified": true,
        "CustomerName": "Maria" // Dodane ręcznie, bo w oryginale było mapowane dynamicznie
    }
];

// 2. Energy Data
export const energyData = [
    {
        "ID": 1,
        "Month": new Date(1704067200000),
        "EnergyConsumed": 3400,
        "EnergyProduced": 3900,
        "RenewableEnergyPercentage": 32,
        "EnergyPrice": 52,
        "CO2Emissions": 660,
        "Region": "North America",
        "EnergySource": "Solar",
        "Unit": "kWh",
        "UtilityCompany": "EnergyCorp",
        "ConsumptionCategory": "Residential",
        "WeatherCondition": "Snowy"
    }
];

// 3. Overall Data
export const OverallData = [
    {
        Month: 'January ' + (new Date().getFullYear() - 1),
        Sales: 51000,
        MarketingSpend: 9000,
        NewCustomers: 180,
        ReturningCustomers: 150,
        WebTraffic: 200,
    }
];

// 4. Employee Detail
export const employeeDetail = [
    {
        "EmployeeID": 'Emp1001',
        "Name": "John",
        "MailID": "john@abc.com",
        "PhoneNumber": '(711) 555-4444',
        "Designation": "Sales Representative",
        "Team": "Sales",
        "SoftwareTeam": "Web-General",
        "ReportTo": "Vinet",
        "DateOfJoining": new Date(704692800000),
        "YearOfExperience": "3 Years",
        "Location": "Reims",
        "AssetKit": "Headset, Laptop, Phone",
        "AssetKitDistribution": new Date(704692800000),
        "EmployeeAvailability": "Available"
    }
];

// 5. Task Detail
export const taskDetail = [
    {
        Id: 'Task 1',
        Title: 'Task - 29001',
        Status: 'Open',
        Summary: 'Analyze the new requirements gathered from the customer.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Analyze,Customer',
        Estimate: 3.5,
        Spent: 2,
        Assignee: 'John',
        RankId: 1
    }
];

// 6. Order Datas (Small Variation)
export const orderDatas = [
    {
        "OrderID": 10248,
        "CustomerID": "VINET",
        "EmployeeID": 5,
        "OrderDate": "1996-07-04T00:00:00Z",
        "RequiredDate": "1996-08-01T00:00:00Z",
        "ShippedDate": "1996-07-16T00:00:00Z",
        "ShipVia": 3,
        "Freight": 32.3800,
        "ShipName": "Vins et alcools Chevalier",
        "ShipAddress": "59 rue de l'Abbaye",
        "ShipCity": "Reims",
        "ShipRegion": null,
        "ShipPostalCode": "51100",
        "ShipCountry": "France"
    }
];

// 7. Category Data
export const categoryData = [
    {
        "CategoryName": "Beverages",
        'ProductID': 1,
        'ProductName': 'Chai',
        'SupplierID': 1,
        'QuantityPerUnit': '10 boxes x 20 bags',
        'UnitPrice': 18.00,
        'UnitsInStock': 39,
        'Discontinued': true
    }
];

// 8. Customer Data
export const customerData = [
    {
        "CustomerID": "ALFKI",
        "ContactName": "Maria ",
        "CompanyName": "Alfreds Futterkiste",
        "Address": "Obere Str. 57",
        "Country": "Germany"
    }
];

// 9. Data Mapping (Derived from OrderData)
// W oryginale to mapowało customerData do orderData. 
// Tutaj robimy to statycznie dla uproszczenia, skoro to przykłady.
export const data = orderData;

// 10. Inventory Data
export const inventoryData = [
    {
        "Inventor": "Kia Silverbrook",
        "NumberofPatentFamilies": 4737,
        "Country": "Australia",
        "Number of INPADOC patents": 9839,
        "Active": "1994-2016",
        "Mainfieldsofinvention": "Printing, Digital paper, Internet, Electronics,Lab-on-a-chip, MEMS, Mechanical, VLSI",
    }
];

// 11. Employee Data (Base)
export const employeeData = [{
    'EmployeeID': 1,
    'LastName': 'Davolio',
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-664743600000),
    'HireDate': new Date(704692800000),
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA',
    'HomePhone': '(206) 555-9857',
    'Extension': '5467',
    'Photo': { 'Length': 21626 },
    'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
}];

// 12. Column Span Data
export const columnSpanData = [
    {
        EmployeeID: 10001,
        EmployeeName: 'Davolio',
        '9:00': 'Analysis Tasks',
        '9:30': 'Analysis Tasks',
        '10:00': 'Team Meeting',
        '10:30': 'Testing',
        '11:00': 'Development',
        '11:30': 'Development',
        '12:00': 'Development',
        '12:30': 'Support',
        '1:00': 'Lunch Break',
        '1:30': 'Lunch Break',
        '2:00': 'Lunch Break',
        '2:30': 'Testing',
        '3:00': 'Testing',
        '3:30': 'Development',
        '4:00': 'Conference',
        '4:30': 'Team Meeting',
        '5:00': 'Team Meeting'
    }
];

// 13. Order Details
export const orderDetails = [
    {
        "OrderID": 10248,
        "CustomerID": "VINET",
        "CustomerName": "Maria ",
        "OrderDate": new Date("1996-07-04T00:00:00.000Z"),
        "ShippedDate": new Date("1996-07-16T00:00:00.000Z"),
        "Freight": 32.38,
        "ShipName": "Vins et alcools Chevalier",
        "ShipAddress": "59 rue de l'Abbaye",
        "ShipCity": "Reims",
        "ShipRegion": null,
        "ShipCountry": "France",
        "Verified": true
    }
];

// 14. Employee Details (Merged with Images)
// W oryginale był loop łączący employeeData z imageDetails. Tu wersja statyczna.
const imageDetails = ["/9j/4AAJ//Z"]; // Skrócony base64

export const employeeDetails = [{
    'EmployeeID': 1,
    'LastName': 'Davolio',
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-664743600000),
    'HireDate': new Date(704692800000),
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA',
    'HomePhone': '(206) 555-9857',
    'Extension': '5467',
    'Photo': { 'Length': 21626 },
    'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp',
    'EmployeeImage': imageDetails[0], // Added manually
    'EmailID': 'nancy@domain.com'     // Added manually
}];

// 15. Order Data Source
export const orderDataSource = [
    {
        "OrderID": 10248,
        "CustomerID": "VINET",
        "OrderDate": new Date("1996-07-04T10:10:00.000Z"),
        "ShippedDate": new Date("1996-07-16T12:20:00.000Z"),
        "Freight": 32.38,
        "ShipName": "Vins et alcools Chevalier",
        "ShipAddress": "59 rue de l'Abbaye",
        "ShipCity": "Reims",
        "ShipRegion": null,
        "ShipCountry": "France"
    }
];

// 16. Data1 (Derived from orderDataSource)
export const data1 = [
    {
        "OrderID": 10248,
        "CustomerID": "VINET",
        "OrderDate": new Date("1996-07-04T10:10:00.000Z"),
        "ShippedDate": new Date("1996-07-16T12:20:00.000Z"),
        "Freight": 32.38,
        "ShipName": "Vins et alcools Chevalier",
        "ShipAddress": "59 rue de l'Abbaye",
        "ShipCity": "Reims",
        "ShipRegion": null,
        "ShipCountry": "France",
        "CustomerName": "Maria" // Dodane ręcznie dla przykładu
    }
];

// 17. Hierarchy Order Data
export const hierarchyOrderdata = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    }
];

// 18. Get Trade Data
export const getTradeData = [
    {
        id: 1,
        CountryCode: 'US',
        Change: -1.62,
        Net: 4.54,
        Rating: 'Sell',
        NetIncome: 8975.0,
        Sector: 'Technology',
        EmployeeCount: 2345,
        Revenue: 1200000,
    }
];

// 19. Detail Employee Data (Static Example)
export const detailEmployeeData = [
    {
        'EmployeeID': 'Emp1001',
        'FirstName': 'VINET',
        'LastName': 'BLAKE',
        'Email': 'vinet.blake@sales.com',
        'ReportingPerson': 'NELSON PERRY',
        'Meetings': [
            {
                Id: 0,
                Subject: "Meeting with Vins et alcools Chevalier.",
                StartTime: new Date(),
                EndTime: new Date(new Date().getTime() + 3600000),
                IsReadonly: false
            }
        ]
    }
];
// Placeholder function to keep compatibility
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const createDetailEmployeeData = () => {};

// 20. Detail Sales Data (Static Example)
export const detailSalesData = [
    {
        'EmployeeID': 'Emp1001',
        'ProductName': 'Chai',
        'ProductID': 1,
        'Quantity': 100,
        'OrderDate': new Date(),
        'Price': 50,
        'Meeting': {
            Id: 1,
            Subject: "Meeting with Vins et alcools Chevalier.",
            StartTime: new Date(),
            EndTime: new Date(new Date().getTime() + 3600000),
            IsReadonly: true
        }
    }
];
// Placeholder function to keep compatibility
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const createDetailSalesData = () => {};

// 21. Pizza Data
export const pizzaData = [
    {
        "Id": 1,
        "Title": "Mexican Green Wave",
        "Type": "Vegetarian",
        "Size": "Small",
        "Description": "Stromboli sandwich with chili sauce.",
        "Tags": ['Onions', 'Pepper', 'Cheese'],
        "ImageURL": "Mexican_Green_Wave.jpg",
        "Price": "$4.79",
        "OriginalPrice": "$6.58",
    }
];

// 22. Stacked Header Data
export const stackedHeaderData = [
    {
        OrderID: 150001,
        CustomerID: 1001,
        CustomerName: "TOMSP",
        OrderDate: new Date(1706745600000),
        ShippedDate: new Date(1706745600000),
        Freight: 20.75,
        ShipName: "TOMSP Logistics",
        ShipAddress: "Address 1",
        ShipCity: "Münster",
        ShipRegion: "null",
        ShipCountry: "Germany",
        Year: 2025,
        Salary: 30000,
        Feedback: 2,
        Status: "Delivered"
    }
];

// 23. Sales Data
export const sales = [
    {
        "Product": "Brown Rice",
        "Year": "2006",
        "Online": 1020,
        "Retail": 1310,
        "Revenue": 2330,
        "Category": "Grains",
        "Image": "BrownRice",
        "ProfitLoss": 1165,
        "UnitsSold": 580,
        "CategoryIcon": "M19.3516 13.9906C19.616 13.9899 19.8723 14.0934 20.0615 14.2826C20.2507 14.4718 20.3542 14.7281 20.3535 14.9925L20.3467 15.1078V15.1126C20.3463 15.1155 20.3453 15.1196 20.3447 15.1244C20.3435 15.1343 20.3421 15.1493 20.3398 15.1673C20.3352 15.2036 20.3283 15.2557 20.3193 15.3216C20.3012 15.4543 20.2742 15.6439 20.2373 15.8744C20.1635 16.3345 20.0494 16.9662 19.8906 17.6449C19.7327 18.32 19.526 19.0639 19.2598 19.7406C19.002 20.3955 18.6508 21.0878 18.1621 21.5765C17.1546 22.5839 15.6439 22.6742 14.6572 22.6224C14.1247 22.5944 13.6452 22.5201 13.3018 22.4525C13.1291 22.4185 12.9871 22.3844 12.8867 22.3597C12.837 22.3475 12.7973 22.3371 12.7686 22.3294C12.7542 22.3256 12.7421 22.323 12.7334 22.3206C12.7292 22.3195 12.7255 22.3185 12.7227 22.3177L12.7168 22.3158L12.9902 21.3539L12.7158 22.3158C12.3832 22.2209 12.1231 21.9609 12.0283 21.6283L12.9902 21.3539L12.0283 21.6273V21.6253L12.0234 21.6107C12.0211 21.602 12.0185 21.5899 12.0146 21.5755C12.007 21.5468 11.9966 21.5071 11.9844"
    }
];

// 24. Telecast Data
export const telecastData = [
    {
        Channel: 'USA News Network',
        Genre: 'News',
        Program12AM: 'Late Night News',
        Program1AM: 'Overnight Brief',
        Program2AM: 'Overnight Brief',
        Program3AM: 'World Recap',
        Program4AM: 'Early Report',
        Program5AM: 'Morning Preview',
        Program6AM: 'Morning Dispatch',
        Program7AM: 'Daily Brief',
        Program8AM: 'National Update',
        Program9AM: 'National Update',
        Program10AM: 'Midday Report',
        Program11AM: 'Breaking Stories',
        Program12PM: 'Global Roundup',
        Program1PM: 'Current Affairs',
        Program2PM: 'News Desk',
        Program3PM: 'Afternoon Digest',
        Program4PM: 'City Beat',
        Program5PM: 'Evening News',
        Program6PM: 'Evening News',
        Program7PM: 'World Tonight',
        Program8PM: 'Prime Report',
        Program9PM: 'Nightly Brief',
        Program10PM: 'Late Edition',
        Program11PM: 'News Wrap',
    }
];