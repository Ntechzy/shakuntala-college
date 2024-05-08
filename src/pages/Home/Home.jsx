import React from "react";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Contact from "../Contact/Contact";
import Whatsapp from "../../components/whatsapp/Whatsapp";
import UsefulLinks from "../../components/UsefulLinks";
import ApplyNowForm from "../../components/ApplyNowForm";
import ImageGallery from "../../routes/ImageGallery";
import HomeGallery from "./HomeGallery";
import Ayurveda from "./Ayurveda";
import Connect from "./Connect";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <img
        src={front}
        className="hero"
        alt="Dr. Shakuntala Ayurvedic Medical College"
      /> */}
      
      <Hero />
      <Section1 />
      <Section2 />
      <Ayurveda />
      <div className="applyHome">
        <ApplyNowForm />
      </div>
      <Section3 />
      <HomeGallery />
      <Contact />
      <Connect />
      <Whatsapp />
      <UsefulLinks />

      <Outlet />
    </div>
  );
};

export default Home;
