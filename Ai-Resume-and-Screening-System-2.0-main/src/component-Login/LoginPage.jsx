import React, { useState } from "react";

import ProductLogo from "../assets/LoginAssets/Eduhire.png";
import LoginIllustration from "../assets/LoginAssets/LoginIllustration.png";
import EmailIcon from "../assets/LoginAssets/EmailIcon.png";
import PasswordIcon from "../assets/LoginAssets/PasswordIcon.png";
import ShowPasswordIcon from "../assets/LoginAssets/ShowPasswordIcon.png";
import HidePasswordIcon from "../assets/LoginAssets/HidePasswordIcon.png";
import GoogleIcon from "../assets/LoginAssets/GoogleIcon.png";
import SearchIcon from "../assets/LoginAssets/SearchIcon.png";
import LearnIcon from "../assets/LoginAssets/LearnIcon.png";
import TrustedIcon from "../assets/LoginAssets/TrustedIcon.png";
import InfoIcon from "../assets/LoginAssets/InfoIcon.png";
import SignInArrow from "../assets/LoginAssets/SignInArrow.png";
import Upstock from "../assets/LoginAssets/Upstock.png";

import "./LoginPage.css";

import { Link, useNavigate } from "react-router-dom";

{
  /*
  Recruiter:
 Email: recruiter@eduhire.com
Password: Recruiter@123
Redirect: /RecruiterDashboard

Candidate:
Email: candidate@gmail.com
Password: Candidate@123
Redirect: /CandidateDashboard */
}

const LoginPage = () => {
  // Form Data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Show / Hide Password
  const [showPassword, setShowPassword] = useState(false);

  // Error State
  const [error, setError] = useState({});

  const navigate = useNavigate();

  // Default Login Credentials
  const defaultUsers = [
    {
      email: "recruiter@eduhire.com",
      password: "Recruiter@123",
      role: "recruiter",
      dashboard: "/RecruiterDashboard",
    },
    {
      email: "candidate@gmail.com",
      password: "Candidate@123",
      role: "candidate",
      dashboard: "/Candidate-Dashboard",
    },
  ];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError({});
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Sign In
  const handleSignIn = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check User Credentials
    const user = defaultUsers.find(
      (user) =>
        user.email.toLowerCase() === formData.email.trim().toLowerCase() &&
        user.password === formData.password,
    );

    if (user) {
      // Store User Details
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          email: user.email,
          role: user.role,
        }),
      );

      console.log("Login Successful:", user.role);

      // Redirect Based on User Role
      navigate(user.dashboard);
    } else {
      setError({
        login: "Invalid email or password. Please try again.",
      });
    }
  };

  return (
    <div className="AIR-Login-Page-Container">
      {/* LEFT SIDE */}

      <div className="AIR-Login-Page-Left-container">
        <div className="AIR-Login-Page-Left">
          <div className="AIR-Product-HeroSec-Container">
            <h4 className="AIR-Product-HeroSec-welcome-Text">
              AI Education & Workforce <br />
              Development Platform
            </h4>

            <h3 className="AIR-Product-HeroSec-Text">
              Connecting academic talent with <br />
              career-defining corporate internships
            </h3>

            <p className="AIR-Product-HeroSec-sub-heading">
              The verified enterprise portal synchronizing university dean
              approvals, experiential learning hours, <br />
              and Fortune 500 mentorship agreements
            </p>
          </div>

          {/* Statistics Cards */}

          <div className="AIR-Product-cards-wrapper">
            <div className="AIR-Product-cards-container">
              <h2 className="AIR-Product-cards-count">14200+</h2>

              <p className="AIR-Product-cards-title">Active Interns</p>

              <div className="AIR-Product-Image-Wrapper">
                <img src={Upstock} alt="stock up" />

                <p className="AIR-Product-cards-sub-title">+24% YoY</p>
              </div>
            </div>

            <div className="AIR-Product-cards-container">
              <h2 className="AIR-Product-cards-count">98.4%</h2>

              <p className="AIR-Product-cards-title">Credit Verified</p>

              <div className="AIR-Product-Image-Wrapper">
                <img src={Upstock} alt="stock up" />

                <p className="AIR-Product-cards-sub-title">Deans Approved</p>
              </div>
            </div>

            <div className="AIR-Product-cards-container">
              <h2 className="AIR-Product-cards-count">14200+</h2>

              <p className="AIR-Product-cards-title">Active Interns</p>

              <div className="AIR-Product-Image-Wrapper">
                <img src={Upstock} alt="stock up" />

                <p className="AIR-Product-cards-sub-title">+24% YoY</p>
              </div>
            </div>
          </div>

          {/* Illustration */}

          <div className="AIR-Login-Illustration-container">
            <img
              className="AIR-Login-Illustration-img"
              src={LoginIllustration}
              alt="Login Illustration"
            />
          </div>
        </div>

        {/* Bottom Info */}

        <div className="AIR-Product-Info-Container">
          <img src={InfoIcon} alt="Info" />

          <p className="AIR-Product-Info-text">
            Connecting students with the right opportunities to build successful
            careers.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}

      <div className="AIR-Login-Page-Right">
        <form onSubmit={handleSignIn} className="AIR-Login-Page-form">
          {/* Form Header */}

          <div className="AIR-Login-Page-Form-Header">
            <p className="AIR-Login-Page-Form-Text">Welcome Back</p>

            <p className="AIR-Login-Page-Message">
              Login to your EduHire account
            </p>
          </div>

          {/* Email Input */}

          <div className="AIR-Login-Input-Container">
            <label htmlFor="email">Email Address</label>

            <div className="AIR-Login-Input-Wrapper">
              <img className="AIR-Login-email-icon" src={EmailIcon} alt="" />

              <input
                onChange={handleChange}
                className="AIR-Login-Input"
                id="email"
                name="email"
                value={formData.email}
                type="email"
                placeholder="Enter Email address"
              />
            </div>

            {error.email && <span className="error-msg">{error.email}</span>}
          </div>

          {/* Password Input */}

          <div className="AIR-Login-Input-Container">
            <div className="AIR-Login-forgot-Link-Wrappper">
              <label htmlFor="password">Password</label>

              <p
                onClick={() => navigate("/ForgotPassword")}
                className="AIR-Login-forgot-Text"
              >
                Forgot password ?
              </p>
            </div>

            <div className="AIR-Login-Input-Wrapper">
              <img className="AIR-Login-pwd-icon" src={PasswordIcon} alt="" />

              <input
                onChange={handleChange}
                className="AIR-Login-Input"
                id="password"
                name="password"
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              {/* Show / Hide Password */}

              <div className="AIR-Login-Input-Icon-Wrapper">
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="AIR-Login-pwd-eye-icon"
                  src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
                  alt="Toggle password visibility"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            {error.password && (
              <span className="error-msg">{error.password}</span>
            )}
          </div>

          {/* Login Error */}

          {error.login && <span className="error-msg">{error.login}</span>}

          {/* Remember Me */}

          <div className="AIR-Login-Checkbox-Container">
            <input
              name="rememberMe"
              onChange={handleChange}
              checked={formData.rememberMe}
              type="checkbox"
            />

            <p className="AIR-Login-Checkbox-Text">Keep me signed in</p>
          </div>

          {/* Sign In Button */}

          <button type="submit" className="AIR-Login-Button">
            <p>Sign in</p>

            <img className="AIR-Login-Button-Icon" src={SignInArrow} alt="" />
          </button>

          {/* Social Login Separator */}

          <div className="AIR-ResetLink-Container">
            <div className="AIR-resetLink-Seperator"></div>

            <p className="AIR-ResetLink-text">Or Continue with</p>

            <div className="AIR-resetLink-Seperator"></div>
          </div>

          {/* Google Login */}

          <div className="AIR-Login-Social-Logins-Container">
            <div className="AIR-Login-Google-Button">
              <img
                className="AIR-Login-Google-icon"
                src={GoogleIcon}
                alt="Google"
              />

              <p>Google</p>
            </div>

            {/* Registration Link */}

            <p className="AIR-Login-Account-Creation-Link">
              Don't have an account?{" "}
              <Link to="/Registration" className="air-create-button">
                Create Account
              </Link>
            </p>

            {/* Navigation Links */}

            <div className="AIR-Login-NavLinks">
              <Link to="/Help">Help</Link>

              <span className="AIR-Seperator-Dot-Black"></span>

              <Link to="/Privacy">Privacy</Link>

              <span className="AIR-Seperator-Dot-Black"></span>

              <Link to="/Terms">Terms</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;