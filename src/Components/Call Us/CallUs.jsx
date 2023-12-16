import React from "react";
import "./CallUs.css";
import callLogo from "../Assets/phone-call.png";
import mailLogo from "../Assets/email.png";

const CallUs = () => {
    return (
        <div className="callUs"> 
            <div className="call">
              <img src={callLogo} alt="" />
              <label>+917766095252</label>
            </div>
            <div className="mail">
              <img src={mailLogo} alt="" />
              <label>info@BuisinessMinds.com</label>
            </div>
        </div>
    )
}

export default CallUs;