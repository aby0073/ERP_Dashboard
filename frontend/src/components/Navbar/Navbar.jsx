import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="Navbar">
        <div className="logo-section">
          <img
            className="logo-icon"
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/layers.png"
            alt="logo"
          />
          <span className="logo-text">Olivia Miller</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Dashboard..." />
        </div>

        <div className="right-section">
          <button className="switch-company-button">Switch Company</button>
          <div className="user-dropdown" onClick={toggleDropdown}>
            <span className="dropdown-username">Oliver Miller</span>
            <span className="dropdown-arrow">▼</span>
          </div>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item">Logout</a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
