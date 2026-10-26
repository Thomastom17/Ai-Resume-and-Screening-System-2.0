import { useEffect, useState } from "react";
import "./PasswordResetLink.css";
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import ResearchPaper from "../assets/LoginAssets/ResearchPaper.png";
import UnifiedPlatform from "../assets/LoginAssets/TrustedIcon.png";;
import ResetLink from "../assets/LoginAssets/ResetLink.png"
import MailIcon from "../assets/LoginAssets/EmailIcon.png"
import Arrow from "../assets/LoginAssets/Arrow-Right.png";
import ResendLink from "../assets/LoginAssets/ResendLink.png"
import { useNavigate } from "react-router-dom";


const resendWaitSeconds = 30;

const PasswordResetLink = () => {
  const navigate = useNavigate();
  const email = "priya1@prp.com";
  const [secondsLeft, setSecondsLeft] = useState(resendWaitSeconds);

  useEffect(() => {
    if (secondsLeft === 0) return undefined;

    const timerId = window.setTimeout(() => {
      setSecondsLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [secondsLeft]);

  const handleBackToLogin = () => {
    navigate('./Login')
  };

  const handleResendLink = () => {
    if (secondsLeft > 0) return;

    window.alert("Reset link has been resent.");
    setSecondsLeft(resendWaitSeconds);
  };

  return (
    <main className="PRP-Login-Page-Container">
      <div className='Prp-Login-Page-Left-container'>
      <div className='Prp-Login-Page-Left'>
        <div className='Prp-Product-Header-Container'>
          <div className='Prp-ProductLogo-img-container'><img className='Prp-ProductLogo-img' src={ProductLogo} alt="ProductLogo" /></div>
          <div>
            <h4 className='Prp-Product-Title'>Placement & Recruitment Platform</h4>
            <p className='Prp-Product-SubTitle'>Connect <span className='Prp-Seperator-Dot-white'></span> Discover <span className='Prp-Seperator-Dot-white'></span> Succeed</p>
          </div>
        </div>
        <div className='Prp-Product-HeroSec-Container'>
          <h3 className='Prp-Product-HeroSec-Text'>Check Your Inbox</h3>
          <p className='Prp-Product-HeroSec-sub-heading'>We’ve sent a password reset link to your registered email address. <br />
          Follow the link to securely create a new password.</p>
        </div>

        {/* <div className='Prp-Login-Illustration-container' > */}
          <img className='Prp-Login-Illustration-img' src={ResearchPaper} alt="" />
        {/* </div> */}

        </div>
        <div className='Prp-Product-Info-Container'>
          <img src={UnifiedPlatform} alt="" />
          <p className='Prp-Product-Info-text'>Connecting students with the right opportunities to build successful careers.</p>
        </div>
      </div>

      <div className="Prp-Login-Page-Right">
        <div className="Prp-PasswordReset-Link-Form">
          <img className="Prp-PasswordReset-Link-Img" src={ResetLink} alt="" />
          <div className="Prp-Reset-Header-container">
            <h4 className="Prp-Reset-Header-Title">Reset Link Sent !</h4>
            <p className="Prp-Reset-Header-desc">We’ve sent a password reset link to your email address.</p>
          </div>
          <div className="Prp-Reset-mail-wrapper">
            <img src={MailIcon} alt="" />
            <p className="Prp-Reset-mail-Notify">priya1@prp.com</p>
          </div>
          <p className="Prp-Reset-Link-mail">Check your inbox for the reset link.</p>

          <div onClick={handleBackToLogin} className='Prp-Login-Button'>
            <p>Back to Login</p>
            <img className='Prp-Login-Button-Icon' src={Arrow} alt="" />
          </div>

          <div className="Prp-ResetLink-Container">
            <div className="Prp-resetLink-Seperator"></div>
            <div onClick={handleResendLink} className="Prp-ResetLink-Wrapper">
              <img className="Prp-ResetLink-Icon" src={ResendLink} alt="" />
              <p className="Prp-ResetLink-text">Resend Reset Link</p>
            </div>
            <div className="Prp-resetLink-Seperator"></div>
          </div>
          <p
            className="Prp-Reset-timer"
            aria-live="polite"
          >
            {secondsLeft > 0
              ? `You can request a new link in ${secondsLeft} seconds.`
              : "You can request a new link now."}
          </p>
        </div>
      </div>
    </main>
  );
}

export default PasswordResetLink;