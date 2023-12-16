import React from "react";
import Hero from "../Components/Hero/Hero";
import ServiceList from "../Components/ServiceList/ServiceList";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Contact from "../Components/Contact/Contact";

const Home = () => {
    return (
        <div>
          <Hero />
          <ServiceList />
          <NewsLetter />
          <Contact />
        </div>
    )
}

export default Home;