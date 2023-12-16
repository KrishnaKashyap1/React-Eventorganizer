import React from "react";
import './Contact.css';
import callLogo from "../Assets/phone-call.png";
import mailLogo from "../Assets/email.png";
import addLogo from "../Assets/location.png";

const Contact = () => {
    function Submit(e){
        const formEle = document.querySelector('form')
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbzeHX_9PBIpJYaiAE2RoaM2PQnbp70Z29glwNgHrHAYJhNOTBkVE2YXd-lUHTPDw3u4/exec", {
            method: "POST",
            body: formData
        })
    }
    return (
        <div className="contact">
          <h1>Contact us</h1>
          <hr />
          <p>We Look Forward To Hearing From You</p>
          <div className="mainSubContant">
            <div className="leftContant" >
               <form id="form" onSubmit={(e)=>Submit(e)}>
                <label>Name</label>
                <input type="text" placeholder="Your name here" name="Name"/>
                <label>Email</label>
                <input type="email" placeholder="Your email here" name="Email"/>
                <label>Mobile</label>
                <input type="tel" placeholder="Your mobile number here" name="Mobile"/>
                <label>City</label>
                <input type="text" placeholder="Your city here" name="City"/>
                <label>Message</label>
                <textarea id="subject" placeholder="Your message here" name="Message"></textarea>
                <div>
                    <button>SEND NOW</button>
                </div>
              </form>  
            </div>
            <div className="rightContant">
                <div className="calling">
                    <img src={callLogo} alt="" />
                    <label>+917766095252</label>
                </div>
                <div className="mailing">
                    <img src={mailLogo} alt="" />
                    <label>info@BuisinessMinds.com</label>
                </div>
                <div className="address">
                    <img src={addLogo} alt="" />
                    <p>Shri Kashi Vishwanath
CK 37/40,41,42 Bansphatak, Varanasi-221 001</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Contact;