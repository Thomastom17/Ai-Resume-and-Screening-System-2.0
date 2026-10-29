import { useState } from "react";
import DropdownArrow from '../assets/RegistrationAssets/DropdownArrow.png'
import Home from "../assets/RegistrationAssets/Home.png";
import RecIllustration from "../assets/RegistrationAssets/RecruiterIllustration.png";
import User from "../assets/RegistrationAssets/RecruiterRegFooter.png";
import Logo from "../assets/RegistrationAssets/AIR_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import OtpModal from "../ResusableComponent/OtpModal";

const RecruiterRegistration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        role: "Recruiter",
        fullName: "",
        Officialemail: "",
        mobile: "",
        Designation: "",
        gender: "Select gender",
        CompanyName: "",
        password: "",
        confirmPassword: "",
        Url: "",
        Industry: "",
        terms: false,
        isEmailVerified: false,
        isMobileVerified: false,
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [otpType, setOtpType] = useState("");

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
            ...(name === "Officialemail" && { isEmailVerified: false }),
            ...(name === "mobile" && { isMobileVerified: false }),
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleOpenOtpModal = (type) => {
        if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Officialemail)) {
            setErrors((prev) => ({ ...prev, Officialemail: "Enter a valid email before verifying." }));
            return;
        }
        if (type === "mobile" && !/^[6-9]\d{9}$/.test(formData.mobile)) {
            setErrors((prev) => ({ ...prev, mobile: "Enter a valid 10-digit mobile number before verifying." }));
            return;
        }
        setOtpType(type);
        setIsOtpModalOpen(true);
    };

    const handleVerifySuccess = () => {
        setFormData((prev) => ({
            ...prev,
            ...(otpType === "Officialemail" && { isEmailVerified: true }),
            ...(otpType === "mobile" && { isMobileVerified: true }),
        }));
    };

    const validateForm = () => {
        const WebUrlRegix = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/
        const newErrors = {};

        if (!formData.role) {
            newErrors.role = "Please select your role.";
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Officialemail)) {
            newErrors.Officialemail = "Enter a valid email address.";
        }

        if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }

        if (!formData.Designation.trim()) {
            newErrors.Designation = "Designation is required.";
        }

        if (!formData.gender || formData.gender === 'Select gender') {
            newErrors.gender = "Please select your gender.";
        }

        if (!formData.Url) {
            newErrors.Url = "Company Website is Required"
        } else if (!WebUrlRegix.test(formData.Url)) {
            newErrors.Url = "Enter a Valid Website Url"
        }
        if (!formData.CompanyName) {
            newErrors.CompanyName = "Company Name is Required"
        }

        if (!formData.Industry) {
            newErrors.Industry = "Industry Type is Required"
        }
        if (!formData.password) {
            newErrors.password = "Please Create your Password.";
        }
        else if (formData.password.length < 8) {
            newErrors.password = "Password must contain at least 8 characters.";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (!formData.terms) {
            newErrors.terms = "Please accept the terms and conditions.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Officialemail);
    const isValidMobileRegex = /^[6-9]\d{9}$/.test(formData.mobile);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        alert("Registration form validated successfully!");
        console.log("Candidate registration submitted", {
            ...formData,
            password: "[hidden]",
            confirmPassword: "[hidden]",
        });
        navigate('/Login')
    };
    return (
        <>
            <div className="AIR-Login-Page-Left-container">
                <div className="AIR-Login-Page-Left">
                    <div className='AIR-Registration-Header'>
                        <div className='AIR-Registration-Header-Img-Cont'>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className='AIR-Registration-Title-Wrapper'>
                            <h4 className='AIR-Product-Header-Title-Text'>AI Education & Workforce Development Platform</h4>
                            <p className='AIR-Product-Header-Slogan'> Connect<span className='AIR-Slogan-Seperator-Dot'></span>Discover <span className='AIR-Slogan-Seperator-Dot'></span> Succeed</p>
                        </div>
                    </div>
                    <div className='AIR-Product-HeroSec-Container'>

                        <h3 className='AIR-Product-HeroSec-Text'>Manage Placements. Create Opportunities. </h3>
                        <p className='AIR-Product-HeroSec-sub-heading'>Streamline training, placement activities and recruitment coordination - <br /> all in one platform.</p>

                    </div>
                    <div className='AIR-Login-Illustration-container'>
                        <img className='AIR-Login-Illustration-img' src={RecIllustration} alt="" />
                    </div>
                </div>
                <div className='AIR-Product-Info-Container'>
                    <img className="AIR-Registration-Left-Footer-Img" src={User} alt="" />
                    <div className="AIR-Registration-Hor-Seperator"></div>
                    <div className="AIR-Registration-Left-Footer-text">
                        <p>Better training today,</p>
                        <p className='AIR-Registration-Left-Footer-Secondary'>Brighter opportunities tomorrow.</p>
                    </div>
                </div>
            </div>

            <div className="AIR-registration-Page-Right">
                <form onSubmit={handleSubmit} noValidate className='AIR-Login-Page-form'>
                    <div onClick={()=>navigate(-1)} className="AIR-Reg-Back-Btn">
                    <p>Back to Selection</p>
                    </div>
                    <div className="AIR-WelcomeRegistration-Form-Header">
                        <h2>Your Journey Starts Here</h2>
                        <p>Join our ecosystem of professional employers.</p>
                    </div>

                    <div className="AIR-WelcomeRegistration-Role-Group">
                        <label htmlFor="role">Registering as</label>
                        <div className="AIR-WelcomeRegistration-Select-Wrapper">
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                disabled
                            >
                                <option value="">Candidate</option>
                                <option value="Recruiter">Recruiter</option>
                                <option value="Placement Officer">Placement Officer</option>
                                <option value="Training Coordinator">Training Coordinator</option>
                            </select>

                        </div>
                        {errors.role && (
                            <span className="AIR-Candidate-Error">
                                {errors.role}
                            </span>
                        )}
                    </div>
                    <div className="AIR-Registration-Field-Wrapper">
                        <div className="AIR-Registration-Field">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                autoComplete="name"
                            />

                            {errors.fullName && (
                                <span className="AIR-Candidate-Error">
                                    {errors.fullName}
                                </span>
                            )}
                        </div>

                        <div className="AIR-Registration-Field">
                            <label htmlFor="Officialemail">Official Email Address</label>
                            <div className="AIR-Candidate-Password-Wrapper">
                                <input
                                    id="Officialemail"
                                    className="AIR-Registration-PasswordInput"
                                    name="Officialemail"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.Officialemail}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                                {isValidEmailRegex && (
                                    <button
                                        type="button"
                                        className="AIR-Registration-Verify-Btn"
                                        style={{ backgroundColor: formData.isEmailVerified ? "#109D58" : "#132A56", color: "#fff" }}
                                        onClick={() => handleOpenOtpModal("Officialemail")}
                                        disabled={formData.isEmailVerified}
                                    >
                                        {formData.isEmailVerified ? "Verified" : "Verify"}
                                    </button>)}
                            </div>

                            {errors.Officialemail && (
                                <span className="AIR-Candidate-Error">
                                    {errors.Officialemail}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="AIR-Registration-Field-Wrapper">
                        <div className="AIR-Registration-Field">
                            <label htmlFor="mobile">Mobile Number</label>
                            <div className="AIR-Candidate-Password-Wrapper">
                                <input
                                    id="mobile"
                                    className="AIR-Registration-PasswordInput"
                                    name="mobile"
                                    type="tel"
                                    placeholder="1234567890"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    maxLength={10}
                                    inputMode="numeric"
                                    autoComplete="tel"
                                />
                                {isValidMobileRegex && (
                                    <button
                                        type="button"
                                        className="AIR-Registration-Verify-Btn"
                                        style={{ backgroundColor: formData.isMobileVerified ? "#109D58" : "#132A56", color: "#fff" }}
                                        onClick={() => handleOpenOtpModal("mobile")}
                                        disabled={formData.isMobileVerified}
                                    >
                                        {formData.isMobileVerified ? "Verified" : "Verify"}
                                    </button>
                                )}
                            </div>

                            {errors.mobile && (
                                <span className="AIR-Candidate-Error">
                                    {errors.mobile}
                                </span>
                            )}
                        </div>

                        <div className="AIR-Registration-Field">
                            <label htmlFor="Designation">Designation</label>
                            <input
                                id="Designation"
                                name="Designation"
                                type="text"
                                placeholder="HR Representative"
                                value={formData.Designation}
                                onChange={handleChange}
                            />

                            {errors.Designation && (
                                <span className="AIR-Candidate-Error">
                                    {errors.Designation}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="AIR-Registration-Field-Wrapper">
                        <div className="AIR-Registration-Field">
                            <label htmlFor="gender">Gender</label>
                            <div className="AIR-WelcomeRegistration-Select-Wrapper">
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">
                                        Prefer not to say
                                    </option>
                                </select>
                                <img className="AIR-WelcomeRegistration-Select-Arrow" src={DropdownArrow} alt="" />
                            </div>
                            {errors.gender && (
                                <span className="AIR-Candidate-Error">
                                    {errors.gender}
                                </span>
                            )}
                        </div>


                        <div className="AIR-Registration-Field">
                            <label htmlFor="CompanyName">Company Name</label>
                            <input
                                id="CompanyName"
                                name="CompanyName"
                                type="text"
                                value={formData.CompanyName}
                                onChange={handleChange}
                                placeholder="Stackly"
                            />

                            {errors.CompanyName && (
                                <span className="AIR-Candidate-Error">
                                    {errors.CompanyName}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="AIR-Registration-Field-Wrapper">
                        <div className="AIR-Registration-Field">
                            <label htmlFor="Url">Website</label>
                            <input
                                id="Url"
                                name="Url"
                                type="url"
                                placeholder="XYZ@domain.com"
                                value={formData.Url}
                                onChange={handleChange}
                            />

                            {errors.Url && (
                                <span className="AIR-Candidate-Error">
                                    {errors.Url}
                                </span>
                            )}
                        </div>

                        <div className="AIR-Registration-Field">
                            <label htmlFor="Industry">Industry Type</label>
                            <input
                                id="Industry"
                                name="Industry"
                                type="text"
                                placeholder="Enter your email address"
                                value={formData.Industry}
                                onChange={handleChange}
                            />

                            {errors.Industry && (
                                <span className="AIR-Candidate-Error">
                                    {errors.Industry}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="AIR-Registration-Field-Wrapper">
                        <div className="AIR-Registration-Field">
                            <label htmlFor="password">Password</label>

                            <div className="AIR-Candidate-Password-Wrapper">
                                <input
                                    className="AIR-Registration-PasswordInput"
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />

                                <span
                                    type="button"
                                    className="AIR-Candidate-Password-Toggle"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </div>

                            {errors.password && (
                                <span className="AIR-Candidate-Error">
                                    {errors.password}
                                </span>
                            )}
                        </div>


                        <div className="AIR-Registration-Field">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="AIR-Candidate-Password-Wrapper">
                                <input
                                    className="AIR-Registration-PasswordInput"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />

                                <span
                                    type="button"
                                    className="AIR-Candidate-Password-Toggle"
                                    onClick={() =>
                                        setShowConfirmPassword((prev) => !prev)
                                    }
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </span>
                            </div>

                            {errors.confirmPassword && (
                                <span className="AIR-Candidate-Error">
                                    {errors.confirmPassword}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className='AIR-Login-Checkbox-Container'>
                        <input name='terms' onChange={handleChange} checked={formData.terms} type="checkbox" />
                        <p className='AIR-Login-Checkbox-Text'>I agree to the <Link className="AIR-Reg-Terms-Text"> Terms of service</Link> and <Link className="AIR-Reg-Terms-Text">privacy policy</Link> regarding my administrative access. </p>
                    </div>
                    {errors.terms && (<span className="AIR-Candidate-Error">{errors.terms}</span>)}

                    <button type='Submit' className='AIR-Register-Button'> Complete Registration</button>

                    <p className="AIR-Registration-Login-Text">
                        Already have an account? <Link onClick={() => { navigate('/Login') }}>Login</Link>
                    </p>

                </form>
            </div>
            <OtpModal
                isOpen={isOtpModalOpen}
                onClose={() => setIsOtpModalOpen(false)}
                onVerifySuccess={handleVerifySuccess}
                targetValue={otpType === "Officialemail" ? formData.Officialemail : formData.mobile}
                type={otpType}
            />
        </>
    )
}

export default RecruiterRegistration