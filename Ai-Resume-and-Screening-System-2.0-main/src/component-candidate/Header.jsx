import React, { useEffect, useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Header.css";

import logoIcon from "../assets/Candidate-dashboard/logo.png";
import searchIcon from "../assets/Candidate-dashboard/search-icon.png";
import bellIcon from "../assets/Candidate-dashboard/notification-icon.png";
import settingsIcon from "../assets/Candidate-dashboard/settings-icon.png";
import profileImg from "../assets/Candidate-dashboard/profile-photo.png";
import dropdownArrow from "../assets/Candidate-dashboard/dropdown.png";

const CandidateHeader = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchText = searchValue.trim();

    if (searchText) {
      console.log("Searching for:", searchText);
    }
  };

  const handleSettings = () => {
    console.log("Settings clicked");
  };

  const handleNotifications = () => {
    console.log("Notifications clicked");
  };

  const handleHelpSupport = () => {
    setMenuOpen(false);
    console.log("Help & Support clicked");
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    setMenuOpen(false);
    navigate("/Login");
  };

  // Close mobile menu after navigation
  const handleMobileNavigation = () => {
    setMobileMenuOpen(false);
  };

  const renderSearchBar = () => (
    <form className="Air-can-search-wrapper" onSubmit={handleSearch}>
      <button
        type="submit"
        className="Air-can-search-button"
        aria-label="Search"
      >
        <img src={searchIcon} alt="" className="Air-can-search-icon" />
      </button>

      <input
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        aria-label="Search"
      />
    </form>
  );

  return (
    <header className="Air-can-header-container">
      <div className="Air-can-top-header">
        {/* Left section */}
        <div className="Air-can-header-left">
          <button
            type="button"
            className="Air-can-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <img src={logoIcon} alt="Logo" className="Air-can-logo-img" />

          <div className="Air-can-title-container">
            <h2 className="Air-can-dashboard-title-top">AI Resume Builder</h2>
            <p className="Air-can-dashboard-subtitle">& Screening System</p>
          </div>
        </div>

        {/* Desktop search */}
        <div className="Air-can-desktop-search">{renderSearchBar()}</div>

        {/* Right section */}
        <div className="Air-can-header-right">
          {/* Mobile search button */}
          <button
            type="button"
            className="Air-can-header-icon Air-can-mobile-search-trigger"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Toggle search"
            aria-expanded={mobileSearchOpen}
          >
            <img src={searchIcon} alt="" />
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="Air-can-header-icon"
            onClick={handleNotifications}
            aria-label="Notifications"
          >
            <img src={bellIcon} alt="" />
          </button>

          {/* Settings */}
          <button
            type="button"
            className="Air-can-header-icon"
            onClick={handleSettings}
            aria-label="Settings"
          >
            <img src={settingsIcon} alt="" />
          </button>

          {/* Profile dropdown */}
          <div className="Air-can-avatar-dropdown-wrapper" ref={dropdownRef}>
            <button
              type="button"
              className="Air-can-user-profile"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open profile menu"
              aria-expanded={menuOpen}
            >
              <span className="Air-can-avatar-wrapper">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="Air-can-top-avatar"
                />
              </span>

              <span className="Air-can-user-info">
                <span className="Air-can-user-name">Akash</span>
                <span className="Air-can-user-role">Candidate</span>
              </span>

              <img
                src={dropdownArrow}
                alt=""
                className={`Air-can-dropdown-arrow ${menuOpen ? "open" : ""}`}
              />
            </button>

            {menuOpen && (
              <div className="Air-can-user-dropdown-menu">
                <button
                  type="button"
                  className="Air-can-dropdown-item Air-can-help-btn"
                  onClick={handleHelpSupport}
                >
                  Help &amp; Support
                </button>

                <div className="Air-can-dropdown-divider"></div>

                <button
                  type="button"
                  className="Air-can-dropdown-item Air-can-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile expandable search */}
      {mobileSearchOpen && (
        <div className="Air-can-mobile-search-section">{renderSearchBar()}</div>
      )}

      {/* Mobile navigation - Same as Sidebar */}
      {mobileMenuOpen && (
        <nav className="Air-can-mobile-navigation">
          <NavLink
            to="/Candidate-Dashboard"
            className={({ isActive }) =>
              `Air-can-mobile-nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleMobileNavigation}
          >
            <span className="Air-can-mobile-nav-icon">📊</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/Candidate-Profile"
            className={({ isActive }) =>
              `Air-can-mobile-nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleMobileNavigation}
          >
            <span className="Air-can-mobile-nav-icon">👤</span>
            <span>Profile</span>
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default CandidateHeader;