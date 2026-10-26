import { useState } from "react";
import "./ForgotPassword.css";
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import MainIllustration from "../assets/LoginAssets/ForgetPasswordIllustration.png";
import emailIcon from "../assets/LoginAssets/EmailVerify.png"
import phoneIcon from "../assets/LoginAssets/PhoneVerify.png"
import ArrowRight from "../assets/LoginAssets/SignInArrow.png";
import ShieldIcon from "../assets/LoginAssets/TrustedIcon.png";
import { Link, useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [ActiveTab, setActivetab] = useState('');
  const[error,setError]=useState('')

  const[formData,setFormData]=useState({
    email:'',
    mobilenumber:''
  })

  const handleChange=(e)=>{
     const { name, value}=e.target;
      setFormData((prev) => ({
            ...prev,
          [name]: value}))
  }

const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

     if (ActiveTab === ''){
      newErrors.verification='Select any one of the Verification method'
     }

    if (ActiveTab === 'Email Verification') {
        if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }
    }

    if (ActiveTab === 'Sms / Text Message') {
        if (!formData.mobilenumber) {
            newErrors.mobilenumber = 'Mobile number is required';
        } else {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(formData.mobilenumber)) {
                newErrors.mobilenumber = 'Please enter a valid 10-digit mobile number';
            }
        }
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
    navigate('/OtpVerification', {
        state: {
            method: ActiveTab,
            value: ActiveTab === 'Email Verification' ? formData.email : formData.mobilenumber
        }
    });
}
};

  return (
    <div className="PRP-Login-Page-Container">
      <div className='Prp-Login-Page-Left-container'>
        <div className="Prp-Login-Page-Left">
          <div className='Prp-Product-HeroSec-Container'>
            <h4 className='Prp-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
            <h3 className='Prp-Product-HeroSec-Text'>Secure Account Recovery & Identity Protection</h3>
            <p className='Prp-Product-HeroSec-sub-heading'>Quickly regain access to your verified internship credentials, university approvals, <br /> and active corporate placements.</p>
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
        <form onSubmit={handleSubmit} className='Prp-Login-Page-form'>
          <div className='Prp-Login-Page-Form-Header'>
            <p className='Prp-Login-Page-Form-Text'>Forgot Password ?</p>
            <p className='Prp-Login-Page-Message'>Choose your preferred method to receive a one-time <br /> verification code.</p>
          </div>
          <div className='Prp-Login-Verification-Container'>
            <p className='Prp-Login-Page-Message'>Verification Method</p>
             {error.verification && (<span className="error-msg">{error.verification}</span>)}
            <div onClick={() => { setActivetab('Email Verification') }}
              className={ActiveTab === "Email Verification" ? 'Prp-Login-Verification-Selector-Active' : 'Prp-Login-Verification-Selector'}>
              <div className="Prp-Login-Verification-img-cont">
              <img src={emailIcon} alt="mail icon" width={15} />
              </div>
              <p className='Prp-Login-Verification-Method'>Email Verification</p>
              <input type="radio" checked={ActiveTab === "Email Verification"} />
            </div>
            {ActiveTab === 'Email Verification' && (
              <>
                <div className='Prp-Login-Input-Wrapper'>
                  <input onChange={handleChange} className='Prp-Login-Input' id='email' value={formData.email} name='email' type="mail" placeholder='Enter Email address' />
                </div>
                {error.email && (<span className="error-msg">{error.email}</span>)}
               </>
            )}

            <div className="Prp-ResetLink-Container">
              <div className="Prp-resetLink-Seperator"></div>
              <p className="Prp-ResetLink-text">Or Continue with</p>
              <div className="Prp-resetLink-Seperator"></div>
            </div>
            <div onClick={() => { setActivetab('Sms / Text Message') }}
              className={ActiveTab === "Sms / Text Message" ? 'Prp-Login-Verification-Selector-Active' : 'Prp-Login-Verification-Selector'}>
              <div className="Prp-Login-Verification-img-cont">
              <img src={phoneIcon} alt="mail icon" width={12} height={17} />
              </div>

              <p className='Prp-Login-Verification-Method'>Sms / Text Message</p>
              <input type="radio" checked={ActiveTab === 'Sms / Text Message'} />

            </div>
            {ActiveTab === 'Sms / Text Message' && (
              <>
                <div className='Prp-Login-Input-Wrapper'>
                  <input onChange={handleChange} className='Prp-Login-Input' id='mobilenumber' value={formData.mobilenumber} name='mobilenumber' type="phone" placeholder='Enter Your Mobile Number' />
                </div>
                {error.mobilenumber && (<span className="error-msg">{error.mobilenumber}</span>)}
               </>
            )}
          </div>
          <button className="Prp-Login-Button" type="submit">
            Send Verification code
            <img className="Prp-ForgotPassword-arrowIcon" src={ArrowRight} alt="" />
          </button>

          <div style={{textAlign:"center"}}>Back to Login</div>
        </form>
      </div>

    </div>
  );
};

export default ForgotPassword;