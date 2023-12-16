import React from "react";
import './ContactUs.css';
import Contact from "../Components/Contact/Contact";

const ContactUs = () => {
    return (
        <div>
           <div className="contact-hero">
               <h1>Contact Us</h1>
               <hr />
           </div>
           <Contact />
        </div>
    )
}

export default ContactUs;