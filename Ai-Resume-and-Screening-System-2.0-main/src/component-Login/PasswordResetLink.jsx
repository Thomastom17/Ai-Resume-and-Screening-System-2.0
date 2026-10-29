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
  const email = "priya1@AIR.com";
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
    <main className="AIR-Login-Page-Container">
      <div className='AIR-Login-Page-Left-container'>
      <div className='AIR-Login-Page-Left'>
        <div className='AIR-Product-Header-Container'>
          <div className='AIR-ProductLogo-img-container'><img className='AIR-ProductLogo-img' src={ProductLogo} alt="ProductLogo" /></div>
          <div>
            <h4 className='AIR-Product-Title'>Placement & Recruitment Platform</h4>
            <p className='AIR-Product-SubTitle'>Connect <span className='AIR-Seperator-Dot-white'></span> Discover <span className='AIR-Seperator-Dot-white'></span> Succeed</p>
          </div>
        </div>
        <div className='AIR-Product-HeroSec-Container'>
          <h3 className='AIR-Product-HeroSec-Text'>Check Your Inbox</h3>
          <p className='AIR-Product-HeroSec-sub-heading'>We’ve sent a password reset link to your registered email address. <br />
          Follow the link to securely create a new password.</p>
        </div>

        {/* <div className='AIR-Login-Illustration-container' > */}
          <img className='AIR-Login-Illustration-img' src={ResearchPaper} alt="" />
        {/* </div> */}

        </div>
        <div className='AIR-Product-Info-Container'>
          <img src={UnifiedPlatform} alt="" />
          <p className='AIR-Product-Info-text'>Connecting students with the right opportunities to build successful careers.</p>
        </div>
      </div>

      <div className="AIR-Login-Page-Right">
        <div className="AIR-PasswordReset-Link-Form">
          <img className="AIR-PasswordReset-Link-Img" src={ResetLink} alt="" />
          <div className="AIR-Reset-Header-container">
            <h4 className="AIR-Reset-Header-Title">Reset Link Sent !</h4>
            <p className="AIR-Reset-Header-desc">We’ve sent a password reset link to your email address.</p>
          </div>
          <div className="AIR-Reset-mail-wrapper">
            <img src={MailIcon} alt="" />
            <p className="AIR-Reset-mail-Notify">priya1@AIR.com</p>
          </div>
          <p className="AIR-Reset-Link-mail">Check your inbox for the reset link.</p>

          <div onClick={handleBackToLogin} className='AIR-Login-Button'>
            <p>Back to Login</p>
            <img className='AIR-Login-Button-Icon' src={Arrow} alt="" />
          </div>

          <div className="AIR-ResetLink-Container">
            <div className="AIR-resetLink-Seperator"></div>
            <div onClick={handleResendLink} className="AIR-ResetLink-Wrapper">
              <img className="AIR-ResetLink-Icon" src={ResendLink} alt="" />
              <p className="AIR-ResetLink-text">Resend Reset Link</p>
            </div>
            <div className="AIR-resetLink-Seperator"></div>
          </div>
          <p
            className="AIR-Reset-timer"
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