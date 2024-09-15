import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../assets/junmike.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a full stack software engineer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>*/}
        <hr/> 
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ 2024 JunMike. All rights reserved.</p>
            <div className="footer-bottom-right">
            <Link to="/terms-of-service"><p>Terms of Service</p></Link>
            <Link to="/privacy-policy"><p>Privacy Policy</p></Link>
                {/* <p>Connect with me</p> */}
            </div>
        </div>
    </div>
  )
}

export default Footer