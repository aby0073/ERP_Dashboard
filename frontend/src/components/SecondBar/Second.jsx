import React from "react";
import "./Second.css";

const Second = () => {
  const navButtons = [
    { text: "Dashboard", icon: "https://img.icons8.com/ios/50/1A1A1A/speedometer.png" },
    { text: "Receivables", icon: "https://img.icons8.com/small/16/1A1A1A/download--v1.png" },
    { text: "Returns", icon: "https://img.icons8.com/ios/50/1A1A1A/circled-left-2.png" },
    { text: "Customers", icon: "https://img.icons8.com/ios-glyphs/30/1A1A1A/user--v1.png" },
    { text: "Payable", icon: "https://img.icons8.com/ios/50/1A1A1A/bank-card-back-side--v1.png" },
    { text: "Sales", icon: "https://img.icons8.com/material-rounded/24/1A1A1A/us-dollar.png" },
    { text: "Inventory", icon: "https://img.icons8.com/ios-filled/50/1A1A1A/menu--v6.png" },
    { text: "Imports", icon: "https://img.icons8.com/ios/50/1A1A1A/long-arrow-down.png" },
    { text: "Cutting Tickets", icon: "https://img.icons8.com/forma-regular/24/1A1A1A/price-tag.png" },
    { text: "EDI", icon: "https://img.icons8.com/material/24/1A1A1A/left-and-right-arrows.png" },
    { text: "Showroom", icon: "https://img.icons8.com/ios/50/1A1A1A/marker--v1.png" },
  ];

  return (
    <div>
      <div className="nav-buttons">
        {navButtons.map((button, index) => (
          <button
            key={index}
            className={`nav-button ${index === 0 ? "active" : ""}`}
          >
            <img src={button.icon} alt={button.text} />
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Second;
