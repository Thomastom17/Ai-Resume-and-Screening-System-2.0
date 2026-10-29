import React, { useState } from 'react'
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import LoginIllustration from '../assets/LoginAssets/LoginIllustration.png'
import EmailIcon from '../assets/LoginAssets/EmailIcon.png'
import PasswordIcon from '../assets/LoginAssets/PasswordIcon.png'
import ShowPasswordIcon from '../assets/LoginAssets/ShowPasswordIcon.png'
import HidePasswordIcon from '../assets/LoginAssets/HidePasswordIcon.png'
import GoogleIcon from '../assets/LoginAssets/GoogleIcon.png'
import SearchIcon from '../assets/LoginAssets/SearchIcon.png'
import LearnIcon from '../assets/LoginAssets/LearnIcon.png'
import TrustedIcon from '../assets/LoginAssets/TrustedIcon.png'
import InfoIcon from '../assets/LoginAssets/InfoIcon.png'
import SignInArrow from '../assets/LoginAssets/SignInArrow.png'
import Upstock from '../assets/LoginAssets/Upstock.png'
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

      const [showPassword, setShowPassword] = useState(false);
      const [error,setError]=useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) setError("");
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
        
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Logged in with formData:', formData);
            alert("Logged in Successfully")
        
        }
    };

    return (
        <div className='AIR-Login-Page-Container'>
            {/* <div className='AIR-Login-Page-Left-container'>
                <div className='AIR-Login-Page-Left'>
                <div className='AIR-Product-Header-Container'>
                    <div className='AIR-ProductLogo-img-container'><img className='AIR-ProductLogo-img' src={ProductLogo} alt="ProductLogo" /></div>
                    <div> 
                        <h4 className='AIR-Product-Title'>Placement & Recruitment Platform</h4>
                        <p className='AIR-Product-SubTitle'>Connect <span className='AIR-Seperator-Dot-white'></span> Discover <span className='AIR-Seperator-Dot-white'></span> Succeed</p>
                    </div>
                </div>
                <div className='AIR-Product-HeroSec-Container'>
                    <h4 className='AIR-Product-HeroSec-welcome-Text'>WELCOME</h4>
                    <h3 className='AIR-Product-HeroSec-Text'>One Platform. Endless <br /> Opportunities</h3>
                    <p className='AIR-Product-HeroSec-sub-heading'>Discover jobs, build your skills, and take the next step in your  <br />career journey with EduHire.</p>
                </div>

                <div className='AIR-Product-cards-wrapper'>
                    <div className='AIR-Product-cards-container'>
                        <div className='AIR-Product-cards-image-container'>
                        <img className='AIR-Product-cards-icon'  src={SearchIcon} alt="" /></div>
                        <p className='AIR-Product-cards-title'>Find Opportunities</p>
                        <p className='AIR-Product-cards-sub-title'>Explore roles from top companies</p>
                    </div>
                    <div>
                        <div className='AIR-Product-cards-image-container'>
                        <img className='AIR-Product-cards-icon'  src={LearnIcon} alt="" /></div>
                        <p className='AIR-Product-cards-title'>Learn & Grow</p>
                        <p className='AIR-Product-cards-sub-title'>Access resources to build your skills</p>
                    </div><div>
                        <div className='AIR-Product-cards-image-container'>
                        <img className='AIR-Product-cards-icon'  src={TrustedIcon} alt="" /></div>
                        <p className='AIR-Product-cards-title'>Find Opportunities</p>
                        <p className='AIR-Product-cards-sub-title'>Safe, transparent and <br /> reliable.</p>
                    </div>
                </div>
                
                <img className='AIR-Login-Illustration-img' src={LoginIllustration} alt="" />
                </div>
                <div className='AIR-Product-Info-Container'>
                    <img src={InfoIcon} alt="" />
                    <p className='AIR-Product-Info-text'>Connecting students with the right opportunities to build successful careers.</p>
                </div>
            </div> */}
             <div className='AIR-Login-Page-Left-container'>
                <div className='AIR-Login-Page-Left'>
                
                <div className='AIR-Product-HeroSec-Container'>
                    <h4 className='AIR-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
                    <h3 className='AIR-Product-HeroSec-Text'>Connecting academic talent with <br /> career-defining corporate internships</h3>
                    <p className='AIR-Product-HeroSec-sub-heading'>The verified enterprise portal synchronizing university dean approvals, experiential learning hours, <br /> and Fortune 500 mentorship agreements</p>
                </div>

                <div className='AIR-Product-cards-wrapper'>
                    <div className='AIR-Product-cards-container'>
                        <h2 className='AIR-Product-cards-count'>14200+</h2>
                        <p className='AIR-Product-cards-title'>Active Interns</p>
                        <div className='AIR-Product-Image-Wrapper'>
                        <img src={Upstock} alt="stock up" />
                        <p className='AIR-Product-cards-sub-title'>+24% YoY</p>
                        </div>
                    </div>
                    <div className='AIR-Product-cards-container'>
                        <h2 className='AIR-Product-cards-count'>98.4%</h2>
                        <p className='AIR-Product-cards-title'>Credit Verfied</p>
                        <div className='AIR-Product-Image-Wrapper'>
                        <img src={Upstock} alt="stock up" />
                        <p className='AIR-Product-cards-sub-title'>Deans Approved</p>
                        </div>
                    </div>
                    <div className='AIR-Product-cards-container'>
                        <h2 className='AIR-Product-cards-count'>14200+</h2>
                        <p className='AIR-Product-cards-title'>Active Interns</p>
                        <div className='AIR-Product-Image-Wrapper'>
                        <img src={Upstock} alt="stock up" />
                        <p className='AIR-Product-cards-sub-title'>+24% YoY</p>
                        </div>
                    </div>
                </div>
                <div className='AIR-Login-Illustration-container'>
                <img className='AIR-Login-Illustration-img' src={LoginIllustration} alt="" />
                </div>
                </div>
                <div className='AIR-Product-Info-Container'>
                    <img src={InfoIcon} alt="" />
                    <p className='AIR-Product-Info-text'>Connecting students with the right opportunities to build successful careers.</p>
                </div>
            </div>
            <div className='AIR-Login-Page-Right'>
                    <form onSubmit={handleSignIn} className='AIR-Login-Page-form'>
                    <div className='AIR-Login-Page-Form-Header'>
                        <p className='AIR-Login-Page-Form-Text'>Welcome Back</p>
                        <p className='AIR-Login-Page-Message'>Login to your EduHire account</p>
                    </div>
                    <div className='AIR-Login-Input-Container'>
                        <label htmlFor="email">Email Address</label>
                        <div className='AIR-Login-Input-Wrapper'>
                            <img className='AIR-Login-email-icon' src={EmailIcon} alt="" />
                            <input onChange={handleChange} className='AIR-Login-Input' id='email' name='email' value={formData.email} type="mail" placeholder='Enter Email address' />
                        </div>
                        {error.email && (<span className="error-msg">{error.email}</span>)}
                    </div>
                    <div className='AIR-Login-Input-Container'>
                        <div className='AIR-Login-forgot-Link-Wrappper'>
                        <label htmlFor="">Password</label>
                        <p onClick={()=>navigate('/ForgotPassword')} className='AIR-Login-forgot-Text'>Forgot password ?</p>
                        </div>
                        <div className='AIR-Login-Input-Wrapper'>
                            <img className='AIR-Login-pwd-icon' src={PasswordIcon} alt="" />
                            <input onChange={handleChange} className='AIR-Login-Input' name='password' value={formData.password} type={showPassword ? 'text' : 'password'} placeholder='Enter your password'/>
                            <div className='AIR-Login-Input-Icon-Wrapper'>
                            <img onClick={()=>setShowPassword(!showPassword)} className='AIR-Login-pwd-eye-icon' src={showPassword ?  HidePasswordIcon : ShowPasswordIcon} alt="Showpasswords" />
                            </div>
                        </div>
                        {error.password && (<span className="error-msg">{error.password}</span>)}
                    </div>
                    <div className='AIR-Login-Checkbox-Container'>
                        <input name='rememberMe'  onChange={handleChange} checked={formData.rememberMe} type="checkbox" />
                        <p className='AIR-Login-Checkbox-Text'>Keep me signed in</p>
                    </div>
                    <button type='Submit' className='AIR-Login-Button'>
                        <p>Sign in</p>
                        <img className='AIR-Login-Button-Icon' src={SignInArrow} alt="" />
                        
                    </button>
                    <div className="AIR-ResetLink-Container">
                      <div className="AIR-resetLink-Seperator"></div>
                        <p className="AIR-ResetLink-text">Or Continue with</p>
                      <div className="AIR-resetLink-Seperator"></div>
                    </div>
                    <div className='AIR-Login-Social-Logins-Container'>
                    <div className='AIR-Login-Google-Button'>
                        <img className='AIR-Login-Google-icon' src={GoogleIcon} alt="Google" />
                        <p>Google</p>
                    </div>
                    <p className='AIR-Login-Account-Creation-Link'>Don't have an account? <Link>Create Account</Link></p>
                    <div className='AIR-Login-NavLinks'>
                    <Link>Help</Link>
                     <span className='AIR-Seperator-Dot-Black'></span>
                    <Link>Privacy</Link>
                    <span className='AIR-Seperator-Dot-Black'></span>
                    <Link>Terms</Link>
                    </div>
                    </div>
                    </form>
                    

                
            </div>
        </div>
       
    )
}

export default LoginPage