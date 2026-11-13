import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar" aria-label="Dashboard sidebar">
      <nav className="dashboard-sidebar-nav">
        {/* Dashboard */}
        <NavLink
          to="/Candidate-Dashboard"
          className={({ isActive }) =>
            `dashboard-sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="dashboard-sidebar-icon">📊</span>
          <span>Dashboard</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/Candidate-Profile"
          className={({ isActive }) =>
            `dashboard-sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="dashboard-sidebar-icon">👤</span>
          <span>Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;