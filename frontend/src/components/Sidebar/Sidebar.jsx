import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import "./Sidebar.css";

const ReportsSidebar = () => {
  const reports = [
    "Company Snapshot",
    "Open Order Report",
    "Cut & Sold Lookup",
    "Inventory Snap Shot",
    "Balance to Sell Sales Summary",
    "Open Orders to Pick",
    "Period Comparison Report",
    "SR Availability",
    "Sales Forecast Report",
    "Detailed Period Comparison Report",
    "Style Cost Report (Sales Persons)",
    "Shipping / Receiving Log",
    "Receiving Summary",
    "Style Availability By Date",
    "Purchase Order Report",
    "Shipping Report",
    "Traffic Report",
  ];

  return (
    <div className="sidebar">
      <h3 className="heading">Reports</h3>
      <ul className="list">
        {reports.map((report, index) => (
          <li key={index} className="list-item">
            {report}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DashboardStats = () => {
  const stats = [
    { title: "Total Revenue", value: "$32,350.00", color: "#FFEFE6" },
    { title: "Total Expenses", value: "$6,000", color: "#E6F7FF" },
    { title: "Accounts Receivable", value: "$56,034.00", color: "#E9FBE6" },
    { title: "Accounts Payable", value: "$67,083.00", color: "#FDE6F7" },
    { title: "Items Missing Images", value: "3,478", color: "#FFF7E6" },
    { title: "Items Missing FOB Costs", value: "237", color: "#E6FFF2" },
    { title: "PO Items Missing Costs", value: "160", color: "#E6F3FF" },
    { title: "Booked", value: "$0/$0.00", color: "#FEE6E6" },
  ];

  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-box"
          style={{ backgroundColor: stat.color }}
        >
          <h4 className="stat-title">{stat.title}</h4>
          <p className="stat-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

const invoiceData = [
  { name: "Sun", ThisWeek: 20000, LastWeek: 40000 },
  { name: "Mon", ThisWeek: 50000, LastWeek: 30000 },
  { name: "Tue", ThisWeek: 75000, LastWeek: 55000 },
  { name: "Wed", ThisWeek: 75000, LastWeek: 75000 },
  { name: "Thu", ThisWeek: 65000, LastWeek: 80000 },
  { name: "Fri", ThisWeek: 55000, LastWeek: 70000 },
  { name: "Sat", ThisWeek: 60000, LastWeek: 65000 },
];

const salesData = [
  { name: "Sun", Weighted: 20000, Won: 15000 },
  { name: "Mon", Weighted: 40000, Won: 30000 },
  { name: "Tue", Weighted: 60000, Won: 45000 },
  { name: "Wed", Weighted: 80000, Won: 60000 },
  { name: "Thu", Weighted: 75000, Won: 65000 },
  { name: "Fri", Weighted: 70000, Won: 55000 },
  { name: "Sat", Weighted: 85000, Won: 75000 },
];

const DashboardGraphs = () => {
  return (
    <div className="dashboard-graphs">
      {/* Invoices Line Chart */}
      <div className="graph-container">
        <h4 className="graph-title">Invoices</h4>
        <LineChart width={400} height={250} data={invoiceData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ThisWeek" stroke="#8884d8" />
          <Line type="monotone" dataKey="LastWeek" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Sales Forecast Bar Chart */}
      <div className="graph-container">
        <h4 className="graph-title">Sales Forecast</h4>
        <BarChart width={400} height={250} data={salesData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Weighted" fill="#8884d8" />
          <Bar dataKey="Won" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

const Menu = () => {
    return (
      <div className="container">
        <ReportsSidebar />
  
        <div className="content">
          <DashboardStats />
  
          <DashboardGraphs />
        </div>
      </div>
    );
  };
  

  

export default Menu;
