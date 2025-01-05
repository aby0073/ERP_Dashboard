import React from 'react';
import "./Stats.css"

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

const Stats = () => {
  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box" style={{ backgroundColor: stat.color }}>
          <h4 className="stat-title">{stat.title}</h4>
          <p className="stat-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
