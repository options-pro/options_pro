export const links = [
  {
    name: "Backtest Strategy",
    icon: "monitors.png",
  },
  {
    name: "Derivative Analytics",
    icon: "idea.png",
  },
  {
    name: "Futures Dashboard",
    icon: "search.png",
  },
  {
    name: "Options Dashboard",
    icon: "data-visualization.png",
  },
  {
    name: "Futures Open Interest",
    icon: "statistics.png",
  },
  {
    name: "Options Open Interest",
    icon: "candlestick-chart.png",
  },
];

export const stockOptions = [
  "NIFTY",
  "Reliance Industries",
  "Tata Consultancy Services",
  "HDFC Bank",
  "ICICI Bank",
  "Hindustan Unilever",
  "Infosys",
];

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "Name",
    width: "150",
    // template: customerGridImage,
    textAlign: "Center",
  },
  {
    field: "ProjectName",
    headerText: "Project Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Weeks",
    headerText: "Weeks",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "Budget",
    headerText: "Budget",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "CustomerID",
    headerText: "Customer ID",
    width: "120",
    textAlign: "Center",
    isPrimaryKey: true,
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    // CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    // Status: "Active",
    // StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    // Status: "Active",
    // CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    // Status: "Pending",
    // CustomerImage: avatar4,
    // StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1004,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    // Status: "Completed",
    // CustomerImage: avatar,
    // StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1005,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    // Status: "Cancel",
    // CustomerImage: avatar2,
    // StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
];
