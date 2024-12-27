import React from 'react'
import './Footer.css'
import shortLogo from '../../assets/flairminds-short-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <p className='footer_heading'>Your Trusted Global Partner, Right Where You Are!</p>
        </div>
        <div className="footer_middle">
            <div className="contact_us">
                <div className='contact_details'>
                <p className='footer_sub_heading'>Contact Us </p>
                <p>sales@flairminds.com</p>
                </div>
                <p className='footer_sub_heading'>Follow us on </p>
              <div className="social_icons">
              <FaLinkedin className='linkedin_icon' />
              <FaYoutube  className='youtube_icon'/>
              </div>
            </div>
            <div className="menu">
                <ul>
                    <li className='footer_sub_heading'>Menu</li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>What we do</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="locations">
                <p className='footer_sub_heading'>locations</p>
                <p>India</p>
                <p>1st Flr Alluring Sky Off Aundh Baner Link Road,Vidhate Vasti, Pune</p>
            </div>
        </div>
        <div className="footer_bottom">
            <img src={shortLogo} alt="logo" className='footer_logo'/>
            <p className='copyright_text'>Copyright © 2024 FlairMinds. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer