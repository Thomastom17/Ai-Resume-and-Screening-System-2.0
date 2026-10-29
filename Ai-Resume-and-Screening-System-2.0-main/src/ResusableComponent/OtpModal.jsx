import { useState, useEffect } from "react";
import "./OtpModal.css"; 

const OtpModal = ({ isOpen, onClose, onVerifySuccess, targetValue, type }) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const [timer, setTimer] = useState(30);

    const DefaultOtp="123456";

    useEffect(() => {
        if (isOpen) {
            setOtp(["", "", "", "", "", ""]);
            setError("");
            setTimer(30);
        }
    }, [isOpen, type]);

    useEffect(() => {
        let interval;
        if (isOpen && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isOpen, timer]);

    if (!isOpen) return null;

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 6) {
            setError("Please enter a valid 6-digit OTP.");
            return;
        }
        if (enteredOtp !== DefaultOtp) {
            setError("Invalid OTP. Please enter the correct OTP.");
            return;
        }
        setError("");
        onVerifySuccess();
        onClose();
    };

    return (
        <div className="AIR-Otp-Modal-Overlay">
            <div className="AIR-Otp-Modal-Box AIR-Otp-Modal-Container">
                <h3 className="AIR-Otp-Modal-Title">Verify {type === "email" || "Officialemail" ? "Email Address" : "Mobile Number"}</h3>
                <p className="AIR-Otp-Modal-Desc">Enter the 6-digit OTP sent to <b>{targetValue}</b></p>
                
                <div className="AIR-Otp-Modal-Inputs">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className={error ? "AIR-Otp-Modal-Input AIR-Login-otp-input-Error" : "AIR-Otp-Modal-Input AIR-Login-otp-input"}
                            value={data}
                            onChange={(e) => handleChange(e.target, index)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </div>

                {error && <span className="AIR-Otp-Modal-Error">{error}</span>}
                
                <div className="AIR-Otp-Modal-Timer">
                    {timer > 0 ? `Resend OTP in ${timer}s` : <span className="AIR-Otp-Modal-Resend" onClick={() => setTimer(30)}>Resend OTP</span>}
                </div>

                <div className="AIR-Otp-Modal-Buttons">
                    <button type="button" className="AIR-Otp-Modal-Btn AIR-Otp-Modal-Verify-Btn" onClick={handleVerify}>Verify OTP</button>
                    <button type="button" className="AIR-Otp-Modal-Btn AIR-Otp-Modal-Cancel-Btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default OtpModal;