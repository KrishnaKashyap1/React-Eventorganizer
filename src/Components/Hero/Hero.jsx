import React from "react";
import './Hero.css';
import hero_image from '../Assets/Screenshot (16622).png';

const Hero = () => {
    return (
        <div className="hero">
           <img src={hero_image} alt="" /> 
        </div>
    )
}

export default Hero;