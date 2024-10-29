"use client";
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/landing-screens/HeroSection";
import AboutUs from "../components/landing-screens/AboutUs";
import { servicesList } from "../../../public/content.json";
import Services from "../components/landing-screens/Services";
import WhyChoose from "../components/landing-screens/WhyChoose";
import PriceViewing from "../components/landing-screens/PriceViewing";
import OurPortfolio from "../components/landing-screens/OurPortfolio";
import NewLook from "../components/landing-screens/NewLook";
import HowItWorks from "../components/landing-screens/HowItWorks";
import Reviews from "../components/landing-screens/Reviews";
import ContactUs from "../components/landing-screens/ContactUs";
import Footer from "../components/Footer";
import EstimateSection from "../components/landing-screens/EstimateSection";
import { motion, useScroll, useSpring } from "framer-motion";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

      <HeroSection />
      {/* <div id="about-us">
        <AboutUs />
      </div> */}
      <Services servicesList={servicesList} />
      <EstimateSection />
      <NewLook />
      <WhyChoose />
      {/* <PriceViewing /> */}
      {/* need to include price in any other section */}
      <OurPortfolio />
      <HowItWorks />
      <Reviews />
      <div id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
}
