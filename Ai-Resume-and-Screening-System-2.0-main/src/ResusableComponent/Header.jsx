import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='Prp-Landing-Header'>
        <h4 className='Prp-Header-Logo'>Placement and Recruitement Platform</h4>
        <div className='Prp-Landing-Button'>
            <button className='Prp-Register-Button'>Register</button>
            <button onClick={()=>navigate('/Login')} className='Prp-Landingpage-Login-Button'>Login</button>
        </div>
    </div>
  )
}

export default Header