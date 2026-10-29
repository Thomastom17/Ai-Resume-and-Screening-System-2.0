import React from 'react'
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import successIllustration from '../assets/LoginAssets/SuccessIllustration.png'
import shieldIcon from "../assets/LoginAssets/TrustedIcon.png";
import ResetLink from "../assets/LoginAssets/SuccessIcon.png"
import ArrowRight from "../assets/LoginAssets/SignInArrow.png";
import { useNavigate } from 'react-router-dom';

const ResetSuccessful = () => {
    const navigate = useNavigate();
    return (
        <div className='AIR-Login-Page-Container'>
            <div className='AIR-Login-Page-Left-container'>
                <div className="AIR-Login-Page-Left">
                          <div className='AIR-Product-HeroSec-Container'>
                            <h4 className='AIR-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
                            <h3 className='AIR-Product-HeroSec-Text'>Account Secured & Access Restored</h3>
                            <p className='AIR-Product-HeroSec-sub-heading'>Quickly regain access to your verified internship credentials, university approvals, <br /> and active corporate placements.</p>
                          </div>
                
                
                          <div className='AIR-Login-Illustration-container'>
                            <img className='AIR-Login-Illustration-img' src={successIllustration} alt="" />
                          </div>
                        </div>
                        <div className='AIR-Product-Info-Container'>
                          <div className="AIR-Product-Info-Image-container">
                            <img src={shieldIcon} alt="icon" />
                          </div>
                          <div>
                            <p className="AIR-ForgotPassword-quoteMain">
                              "A unified platform that simplifies training, placements, and
                              recruitment management."
                            </p>
                            <p className="AIR-ForgotPassword-quoteAuthor">
                              Dr. Elena Vance — Dean of Experiential Education, Northeastern
                              Consortium
                            </p>
                          </div>
                        </div>

            </div>

            <div className='AIR-Login-Page-Right'>
                <div className="AIR-PasswordReset-Link-Form">
                    <img className="AIR-PasswordReset-Link-Img" src={ResetLink} alt="" />
                    <div className="AIR-reset-Header-container">
                        <h4 className="AIR-Reset-Header-Title">Password Reset Successfully!</h4>
                        <p className="AIR-Reset-Header-desc">Your password has been reset. You can now log in with your new password
                            and continue exploring all the opportunities on EduHire.</p>
                    </div>
                    <button onClick={()=>{navigate('/Login')}} className="AIR-Login-Button" type="submit">Back to Login
                        <img className="AIR-ForgotPassword-arrowIcon" src={ArrowRight} alt="" />
                    </button>
                    <div className="AIR-ResetLink-Container">
                      <div className="AIR-resetLink-Seperator"></div>
                        <p className="AIR-ResetLink-text">Need help? Contact Support</p>
                      <div className="AIR-resetLink-Seperator"></div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResetSuccessful