import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './WelcomeRegistration.css';
import WelcomeIllustration from '../assets/RegistrationAssets/WelcomeRegistrationIllustration.png';
import UnifiedPlatformIcon from '../assets/RegistrationAssets/UnifiedPlatformIcon.png';
import DropdownArrow from '../assets/RegistrationAssets/DropdownArrow.png';
import CandidateRegistration from './CandidateRegistration';
import Logo from "../assets/RegistrationAssets/AIR_Logo.png";
import RecruiterRegistration from './RecruiterRegistration';

const WelcomeRegistration = () => {
    const { role } = useParams();
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState('');
    const Roles = ['Student', 'Recruiter'];

    useEffect(() => {
        if (role) {
            const formattedRole = Roles.find(r => r.toLowerCase() === role.toLowerCase());
            if (formattedRole) {
                setSelectedRole(formattedRole);
            }
        } else {
            setSelectedRole('');
        }
    }, [role]);

    const handleRoleChange = (e) => {
        const chosenRole = e.target.value;
        setSelectedRole(chosenRole);
        if (chosenRole) {
            navigate(`/registration/${chosenRole.toLowerCase().replace(/\s+/g, '-')}`);
        } else {
            navigate('/register');
        }
    };

    return (
        <div className="AIR-Login-Page-Container">
            {!selectedRole && (
                <>
                    <section className="AIR-Login-Page-Left-container">
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
                                <h3 className='AIR-Product-HeroSec-Text'>Welcome to your career <br />collaborative workspace.</h3>
                                <p className='AIR-Product-HeroSec-sub-heading'>Join over 14,000+ ambitious students, corporate mentors, leading enterprises, and <br /> academic institutions shaping the future of workforce talent.</p>
                            </div>
                            <div className='AIR-Login-Illustration-container'>
                                <img className='AIR-Login-Illustration-img' src={WelcomeIllustration} alt="" />
                            </div>

                        </div>
                       
                            <div className='AIR-Product-Info-Container'>
                                <img className="AIR-Registration-Left-Footer-Img" src={UnifiedPlatformIcon} alt="" />
                                <div className="AIR-Registration-Hor-Seperator"></div>
                                <div className="AIR-Registration-Left-Footer-text">
                                    <p>Better training today,</p>
                                    <p>Brighter opportunities tomorrow.</p>
                                </div>
                                
                            </div>
                           
                        
                    </section>
                    <section className="AIR-registration-Page-Right">
                        <div className="AIR-Login-Page-form">
                            <div className="AIR-WelcomeRegistration-Form-Header">
                                <h2>Your Journey Starts Here</h2>
                                <p>Select your account type below to begin your tailored registration</p>
                            </div>
                            <div className="AIR-WelcomeRegistration-Role-Group">
                                <label htmlFor="AIR-WelcomeRegistration-Role">SELECT YOUR ROLE <span>*</span></label>
                                <div className="AIR-WelcomeRegistration-Select-Wrapper">
                                    <select
                                        id="AIR-WelcomeRegistration-Role"
                                        value={selectedRole}
                                        onChange={handleRoleChange}
                                        required
                                    >
                                        <option value="" disabled>Select role</option>
                                        {Roles.map((r) => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                    <img className="AIR-WelcomeRegistration-Select-Arrow" src={DropdownArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {selectedRole === 'Student' && (
                <CandidateRegistration />
            )}
            {selectedRole === 'Recruiter' && (
                <RecruiterRegistration />
            )}
            
            
        </div>
    );
};

export default WelcomeRegistration;