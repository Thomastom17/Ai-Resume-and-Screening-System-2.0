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
        <div className='PRP-Login-Page-Container'>
            <div className='Prp-Login-Page-Left-container'>
                <div className="Prp-Login-Page-Left">
                          <div className='Prp-Product-HeroSec-Container'>
                            <h4 className='Prp-Product-HeroSec-welcome-Text'>AI Education & Workforce <br />Development Platform</h4>
                            <h3 className='Prp-Product-HeroSec-Text'>Account Secured & Access Restored</h3>
                            <p className='Prp-Product-HeroSec-sub-heading'>Quickly regain access to your verified internship credentials, university approvals, <br /> and active corporate placements.</p>
                          </div>
                
                
                          <div className='Prp-Login-Illustration-container'>
                            <img className='Prp-Login-Illustration-img' src={successIllustration} alt="" />
                          </div>
                        </div>
                        <div className='Prp-Product-Info-Container'>
                          <div className="prp-Product-Info-Image-container">
                            <img src={shieldIcon} alt="icon" />
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
                <div className="Prp-PasswordReset-Link-Form">
                    <img className="Prp-PasswordReset-Link-Img" src={ResetLink} alt="" />
                    <div className="Prp-reset-Header-container">
                        <h4 className="Prp-Reset-Header-Title">Password Reset Successfully!</h4>
                        <p className="Prp-Reset-Header-desc">Your password has been reset. You can now log in with your new password
                            and continue exploring all the opportunities on EduHire.</p>
                    </div>
                    <button onClick={()=>{navigate('/Login')}} className="Prp-Login-Button" type="submit">Back to Login
                        <img className="Prp-ForgotPassword-arrowIcon" src={ArrowRight} alt="" />
                    </button>
                    <div className="Prp-ResetLink-Container">
                      <div className="Prp-resetLink-Seperator"></div>
                        <p className="Prp-ResetLink-text">Need help? Contact Support</p>
                      <div className="Prp-resetLink-Seperator"></div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResetSuccessful