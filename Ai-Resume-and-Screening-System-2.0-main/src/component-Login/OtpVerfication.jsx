import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation ஐ இறக்குமதி செய்ய வேண்டும்
import MainIllustration from "../assets/LoginAssets/OtpIllustration.png";
import ShieldIcon from "../assets/LoginAssets/TrustedIcon.png";
import ArrowRight from "../assets/LoginAssets/SignInArrow.png";

const OtpVerfication = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error,setError]=useState({});
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();

    const verificationData = location.state;
    const method = verificationData.method;
    const targetValue = verificationData.value;

    const maskData = (val, type) => {
        if (!val) return 'your registered contact';
        if (type === 'Email Verification') {
            const [name, domain] = val.split('@');
            if (!domain) return val;
            const maskedName = name.length > 2 ? name.substring(0, 2) + '***' : '***';
            return `${maskedName}@${domain}`;
        } else {
            if (val.length < 4) return '******' + val;
            return val.substring(0, 2) + '******' + val.substring(val.length - 2);
        }
    };

    const maskedContact = maskData(targetValue, method);
    const destinationLabel = method === 'Email Verification' ? 'mail ID' : 'mobile number';

    const [timeLeft, setTimeLeft] = useState(599);
    const [isExpired, setIsExpired] = useState(false);

    const [resendTimer, setResendTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);

    const STATIC_OTP = "123456";

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsExpired(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        if (resendTimer <= 0) {
            setCanResend(true);
            return;
        }

        const resendInterval = setInterval(() => {
            setResendTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(resendInterval);
    }, [resendTimer]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleResendOtp = () => {
        if (!canResend) return;

        setResendTimer(60);
        setCanResend(false);
        setTimeLeft(599);
        setIsExpired(false);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();

        alert(`New OTP has been sent to your ${destinationLabel} (${maskedContact})!`); 
    };

    const handleChange = (e, index) => {
        if (isExpired) return;
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (isExpired) return;
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (isExpired) {
      newErrors.expiry = "OTP has expired! Please request a new code.";
    } else {
      const enteredOtp = otp.join("");

      if (enteredOtp.length < 6) {
        newErrors.otp = "Please enter the complete 6-digit OTP.";
      } else if (enteredOtp !== STATIC_OTP) {
        newErrors.invalidOtp = "Invalid OTP! Please try again. (Hint: 123456)";
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate('/ResetPassword');
    }
  };

    return (
        <div className="PRP-Login-Page-Container">
            <div className='Prp-Login-Page-Left-container'>
                <div className="Prp-Login-Page-Left">
                    <div className='Prp-Product-HeroSec-Container'>
                        <h4 className='Prp-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
                        <h3 className='Prp-Product-HeroSec-Text'>Verify Identity & Enter Security Code</h3>
                        <p className='Prp-Product-HeroSec-sub-heading'> 
                            6-digit one-time password has been transmitted to your registered <br />
                            institutional credentials.
                        </p>
                    </div>

                    <div className='Prp-Login-Illustration-container'>
                        <img className='Prp-Login-Illustration-img' src={MainIllustration} alt="" />
                    </div>
                </div>
                <div className='Prp-Product-Info-Container'>
                    <div className="prp-Product-Info-Image-container">
                        <img src={ShieldIcon} alt="" />
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
            
            <div className='Prp-Login-Page-Right'>
                <form className='Prp-Login-Page-form' onSubmit={handleSubmit}>
                    <div className='Prp-Login-Page-Form-Header'>
                        <p className='Prp-Login-Page-Form-Text'>Enter Verification Codes</p>
                        <p className='Prp-Login-Page-Message'>
                            We've sent a 6-digit code to {destinationLabel} <span style={{ fontWeight: "600", color: "#333" }}>{maskedContact}</span>. <br />
                            {isExpired ? (
                                <span style={{ color: "red", fontWeight: "bold" }}>OTP Expired!</span>
                            ) : (
                                <>The code will expire in <span style={{ color: "#007bff", fontWeight: "bold" }}>{formatTime(timeLeft)}</span> minutes.</>
                            )}
                        </p>
                    </div>

                    <div className="Prp-Login-otp-inputs">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className={error.invalidOtp ? "Prp-Login-otp-input-Error" : "Prp-Login-otp-input"}
                                type="text"
                                maxLength="1"
                                value={data}
                                disabled={isExpired}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>
                    {error.invalidOtp && (<span className="error-msg">{error.invalidOtp}</span>)}

                    <button className="Prp-Login-Button" type="submit" disabled={isExpired}>
                        Verify and Continue
                        <img className="Prp-ForgotPassword-arrowIcon" src={ArrowRight} alt="" />
                    </button>
                 
                    <div style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
                        Didn't receive code?{" "}
                        {canResend ? (
                            <span 
                                onClick={handleResendOtp} 
                                style={{ color: "#007bff", cursor: "pointer", fontWeight:'bold' }}
                            >
                                Resend OTP
                            </span>
                        ) : (
                            <span style={{ color: "#888" }}>
                                Resend OTP in {resendTimer}s
                            </span>
                        )}
                    </div>

                    <div 
                        style={{ textAlign: "center", cursor: "pointer", marginTop: "10px" }} 
                        onClick={() => navigate("/login")}
                    >
                        Back to Login
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OtpVerfication;