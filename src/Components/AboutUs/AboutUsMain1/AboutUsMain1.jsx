import React from "react";
import './AboutUsMain1.css';
import side_image from '../../Assets/Screenshot (A1).png';
import side_image_one from '../../Assets/Screenshot (A2).png';

const AboutUsMain1 = () => {
    return (
        <div className="aboutus_main">
            <div className="main_p">
               <p>Vision Vivaah designs beautiful, elegant, and luxurious weddings. Our personal, bespoke, and flexible approach to wedding planning is what sets Vivaah apart. Our clients come from all walks of life, and our services are tailored to meet their individual needs. We take pride in our international reputation for delivering exceptional events with discretion and world-class service. We are privileged to collaborate with some of the most respected companies in the events business, all of whom share our passion, commitment, and high standards of service, excellence, and attention to detail.</p>
               <p>The emotion counts as it is related to the bride and groom's childhood dreams, and we highly value it.</p>
               <p>To turn your dream into reality, we provide a one-stop solution for weddings and events. We aim to enhance your peace of mind by offering a comprehensive</p>
               <p>range of wedding services, sparing you the hassle of dealing with individual suppliers. As a renowned company with extensive experience in organizing</p>
               <p>weddings, we secure the best rates from all vendors in the market, which can benefit you.</p>
            </div>
            <div className="main_div">
                <h1>What we Are</h1>
                <hr />
                <div className="child_one">
                    <div className="child_two">
                       <img src={side_image} alt="" /> 
                    </div>
                    <div className="child_three">
                       <ul>
                         <li> Comprehensive Wedding Planning: We, as Wedding Planners, are here to meticulously manage every aspect of your wedding - from crafting the perfect invitation cards to selecting idyllic honeymoon destinations. We specialize in curating theme-based weddings, orchestrating musical extravaganzas, and planning formal parties, ensuring that every element is flawlessly executed.</li>
                         <li> Your Comfort is Our Priority: Our utmost dedication lies in ensuring your comfort throughout the entire wedding journey. We want you to revel in each function with your cherished family, friends, and relatives, knowing that every detail is impeccably taken care of</li>
                         <li> Leave No Stone Unturned: We are wholly committed to making your wedding a resounding success. Our team leaves no stone unturned when it comes to planning and executing every aspect of your special day.</li>
                         <li> Seamless Coordination: From our very first meeting to the grand culmination on your wedding day, we work closely with you. Our coordination is seamless, allowing us to bring your vision to life flawlessly.</li>
                         <li> Exceptional Value for Your Investment: Lastly, we take immense pride in offering exceptional value for your money. Your trust in us is met with a commitment to delivering top-notch service and an unforgettable wedding experience.</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="main_div_one">
                <h1>What we do</h1>
                <hr />
                <div className="child_four">
                    <div className="child_five">
                       <img src={side_image_one} alt="" /> 
                    </div>
                    <div className="child_six">
                       <ul>
                        <li> Artist Mangement</li>
                        <li> Videography</li>
                        <li> Photography</li>
                        <li> Ritual Ceremony</li>
                        <li> Home Decoration</li>
                        <li> Many More !</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="main_div_two">
                <h1>Why Choose us</h1>
                <hr />
                <div className="child_seven">
                    <div className="child_eight">
                        <img src={side_image} alt="" /> 
                    </div>
                    <div className="child_nine">
                        <p>The goal behind establishing Vision Vivaah is to offer people worldwide services tailored to their wedding needs. This includes connecting them with the best service providers, offering gift solutions, providing guidance on pre and post-marriage etiquette, and most importantly, efficiently managing the entire event.
                        </p>
                        <ul>
                            <li> Your one stop shop for designer weddings.</li>
                            <li> Adding uniqueness to your wedding event.</li>
                            <li> A strong network to provide you with various specialties from different cities of India.</li>
                            <li> Adding a designer touch to enhance the ambiance.</li>
                            <li> Highly cost-effective services.</li>
                            <li> We assist you in identifying the best service providers in your town.</li>
                            <li> Maintaining high professionalism and dedication.</li>
                            <li> Comprehensive coverage of every aspect of your wedding, ensuring a symmetrical touch.</li>
                            <li> Our development department gives new concepts and designs.</li>
                            <li> Enjoy a hassle-free wedding experience.</li>
                            <li> We work to exacting standards and ensure timely delivery.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsMain1;