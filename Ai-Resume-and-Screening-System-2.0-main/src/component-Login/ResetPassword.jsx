import React, { useState } from "react";
import "./ResetPassword.css";
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import resetPasswordImage from "../assets/LoginAssets/ResetIllustration.png";
import BackArrow from "../assets/LoginAssets/BackArrow.png"
import PasswordIcon from '../assets/LoginAssets/PasswordIcon.png'
import ShowPasswordIcon from '../assets/LoginAssets/ShowPasswordIcon.png'
import HidePasswordIcon from '../assets/LoginAssets/HidePassword.png'
import GoogleIcon from '../assets/LoginAssets/GoogleIcon.png'
import shieldIcon from "../assets/LoginAssets/TrustedIcon.png";
import SignInArrow from '../assets/LoginAssets/SignInArrow.png'
import { Link, useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [id]: value
    }));

    if (error) setError("");
  };

  const getPasswordStrength = () => {
    if (formdata.password.length === 0) {
      return { text: "Weak", width: "0%", className: "Prp-ResetPassword-Strength-Weak" };
    }
    let score = 0;
    if (formdata.password.length >= 8) score++;
    if (/[A-Z]/.test(formdata.password)) score++;
    if (/[0-9]/.test(formdata.password)) score++;
    if (/[^A-Za-z0-9]/.test(formdata.password)) score++;
    if (score <= 1) {
      return { text: "Weak", width: "25%", className: "Prp-ResetPassword-Strength-Weak" };
    }
    if (score === 2) {
      return { text: "Medium", width: "50%", className: "Prp-ResetPassword-Strength-Medium" };
    }
    if (score === 3) {
      return { text: "Good", width: "75%", className: "Prp-ResetPassword-Strength-Good" };
    }
    return { text: "Strong", width: "100%", className: "Prp-ResetPassword-Strength-Strong" };
  };

  const strength = getPasswordStrength();

  const validateForm = () => {
    const newErrors = {};

    if (!formdata.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formdata.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formdata.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formdata.confirmPassword !== formdata.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log("Password reset successfully");
  };

  return (
    <div className="PRP-Login-Page-Container">
      <div className='Prp-Login-Page-Left-container'>
        <div className="Prp-Login-Page-Left">
          <div className='Prp-Product-HeroSec-Container'>
            <h4 className='Prp-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
            <h3 className='Prp-Product-HeroSec-Text'>Reset your Password? <br /> Get Back on Track.</h3>
            <p className='Prp-Product-HeroSec-sub-heading'>Quickly regain access to your verified internship credentials, university approvals, <br /> and active corporate placements.</p>
          </div>


          <div className='Prp-Login-Illustration-container'>
            <img className='Prp-Login-Illustration-img' src={resetPasswordImage} alt="" />
          </div>
        </div>
        <div className='Prp-Product-Info-Container'>
          <div className="prp-Product-Info-Image-container">
            <img src={shieldIcon} alt="" />
          </div>
          <div>
            <p className="Prp-ForgotPassword-quoteMain">
              "A unified platform that simplifies training, placements, and
              recruitment management."
            </p>
            <p className="Prp-ForgotPassword-quoteAuthor">
              Dr. Elena Vance — Dean of Experiential Education, Northeastern
              Consortium
            </p>
          </div>
        </div>
      </div>

      <div className="Prp-Login-Page-Right">
        <div onClick={() => { navigate('/Login') }} className="Prp-ResetPassword-Back-Login">
          <img src={BackArrow} className="Prp-ResetPassword-Back-Arrow" />
          <p className="Prp-ResetPassword-Back-Title">Back to Login</p>
        </div>
        <form onSubmit={handleSubmit} className='Prp-Login-Page-form'>
          <div className='Prp-Login-Page-Form-Header'>
            <p className='Prp-Login-Page-Form-Text'>Reset Password</p>
            <p className='Prp-Login-Page-Message'>Choose a strong password to keep ur account secure</p>
          </div>

          <div className="Prp-Login-Input-Container">
            <label htmlFor="password">New Password</label>
            <div className="Prp-Login-Input-Wrapper">
              <img src={PasswordIcon} alt="Lock" className="Prp-Login-pwd-icon" />
              <input
                className='Prp-Login-Input'
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formdata.password}
                onChange={handleChange}

              />
              <div className="Prp-Login-Input-Icon-Wrapper'" onClick={() => setShowPassword(!showPassword)}>
                <img className='Prp-Login-pwd-eye-icon' src={showPassword ? HidePasswordIcon : ShowPasswordIcon} alt="Showpasswords" />
              </div>

            </div>
            {error.password && (<span className="error-msg">{error.password}</span>)}

            <div className="Prp-ResetPassword-Strength-Row">
              <div className="Prp-ResetPassword-Strength-Bar">
                <div
                  className={`Prp-ResetPassword-Strength-Progress ${strength.className}`}
                  style={{ width: strength.width }}
                ></div>
              </div>
              <p className="Prp-ResetPassword-Strength-Text">
                Password strength:
                <span className={`Strengthmeter-${strength.className}`}> {strength.text}</span>
              </p>
            </div>

          </div>


          <div className="Prp-Login-Input-Container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="Prp-Login-Input-Wrapper">
              <img src={PasswordIcon} alt="Lock" className="Prp-Login-pwd-icon" />
              <input
                className='Prp-Login-Input'
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formdata.confirmPassword}
                onChange={handleChange}

              />
              <div className="Prp-Login-Input-Icon-Wrapper'" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                <img className='Prp-Login-pwd-eye-icon' src={showConfirmPassword ? HidePasswordIcon : ShowPasswordIcon} alt="Showpasswords" />
              </div>

            </div>
            {error.confirmPassword && (<span className="error-msg">{error.confirmPassword}</span>)}
          </div>

          <div className='Prp-Login-Checkbox-Container'>
            <input type="checkbox" />
            <p className='Prp-Login-Checkbox-Text'>Keep me signed in</p>
          </div>
          <button onClick={() => navigate('/ResetPassword/Successful')} type="submit" className='Prp-Login-Button'>
            <p>Reset Password</p>
            <img className='Prp-Login-Button-Icon' src={SignInArrow} alt="" />

          </button>
          <div className="Prp-ResetLink-Container">
            <div className="Prp-resetLink-Seperator"></div>
            <p className="Prp-ResetLink-text">Or Continue with</p>
            <div className="Prp-resetLink-Seperator"></div>
          </div>
          <div className='Prp-Login-Social-Logins-Container'>
            <div className='Prp-Login-Google-Button'>
              <img className='Prp-Login-Google-icon' src={GoogleIcon} alt="Google" />
              <p>Google</p>
            </div>
            <p className='Prp-Login-Account-Creation-Link'>Don't have an account? <Link>Create Account</Link></p>
            <div className='Prp-Login-NavLinks'>
              <Link>Help</Link>
              <span className='Prp-Seperator-Dot-Black'></span>
              <Link>Privacy</Link>
              <span className='Prp-Seperator-Dot-Black'></span>
              <Link>Terms</Link>
            </div>
          </div>





        </form>
      </div>
    </div>
  );
}
export default ResetPasswordPage;