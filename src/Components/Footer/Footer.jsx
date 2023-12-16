import React from "react";
import './Footer.css';
import footer_logo from "../Assets/Screenshot (16490).png";
import facebook_icon from "../Assets/facebook.png";
import youtube_icon from "../Assets/youtube.png";
import whatsapp_icon from "../Assets/whatsapp.png";
import instagram_icon from "../Assets/instagram.png";
import twitter_icon from "../Assets/twitter.png";
import pinterest_icon from "../Assets/pinterest.png";

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-logo">
             <img src={footer_logo} alt=""/>
             <p>BuisinessMinds</p>
          </div>
          <div className="footer-social-icons">
             <div className="footer-icons-container">
                <img src={facebook_icon} alt=""/>
             </div>
             <div className="footer-icons-container">
                <img src={youtube_icon} alt=""/>
             </div>
             <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
             </div>
             <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>
             </div>
             <div className="footer-icons-container">
                <img src={twitter_icon} alt=""/>
             </div>
             <div className="footer-icons-container">
                <img src={pinterest_icon} alt=""/>
             </div>
          </div>
          <div className="footer-copywrite">
             <p>© 2023 BuisinessMinds, Inc. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer;