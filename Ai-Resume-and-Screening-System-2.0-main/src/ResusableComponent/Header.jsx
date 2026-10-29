import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='AIR-Landing-Header'>
        <h4 className='AIR-Header-Logo'>Placement and Recruitement Platform</h4>
        <div className='AIR-Landing-Button'>
            <button onClick={()=>navigate('/Registration')} className='AIR-Header-Register-Button'>Register</button>
            <button onClick={()=>navigate('/Login')} className='AIR-Landingpage-Login-Button'>Login</button>
        </div>
    </div>
  )
}

export default Header