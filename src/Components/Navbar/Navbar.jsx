import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Screenshot (16490).png";
import { Link } from "react-router-dom";


const Navbar = () => {
    
    const [isMobile, setIsMobile] = useState(false);    
    
    const [menu, setMenu] = useState("home");

    return (
        <nav className="navbar"> 
           <div className="nav-logo">
               <img src={logo} alt="" />
           </div>
           
           <ul className={isMobile? "nav-links-mobile" : "nav-menu"}
           onClick={() => setIsMobile(false)}
           >  
               <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>{menu==="home"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none' }} to='/about'>ABOUT US</Link>{menu==="about"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("services")}}><Link style={{ textDecoration: 'none' }} to='/services'>SERVICES</Link>{menu==="services"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("gallery")}}><Link style={{ textDecoration: 'none' }} to='/gallery'>GALLERY</Link>{menu==="gallery"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none' }} to='/contact'>CONTACT US</Link>{menu==="contact"?<hr/>:<></>}</li>
           </ul>

           <button className="mobile-menu-icon"
           onClick={() => setIsMobile(!isMobile)}
           >
               {isMobile ? (
                 <i className="fas fa-times"></i> 
               ) : (
                 <i className="fas fa-bars"></i>
               )}
           </button>

        </nav>
    )
}

export default Navbar;