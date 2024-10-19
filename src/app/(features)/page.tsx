"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/landing-screens/HeroSection";
import AboutUs from "../components/landing-screens/AboutUs";
import { servicesList } from "../../../public/content.json";
import Services from "../components/landing-screens/Services";
import WhyChoose from "../components/landing-screens/WhyChoose";
import useScrollPosition from "../hooks/useScrollPosition";
import PriceViewing from "../components/landing-screens/PriceViewing";
import OurPortfolio from "../components/landing-screens/OurPortfolio";
import NewLook from "../components/landing-screens/NewLook";
import HowItWorks from "../components/landing-screens/HowItWorks";
import Reviews from "../components/landing-screens/Reviews";
import ContactUs from "../components/landing-screens/ContactUs";
import Footer from "../components/Footer";
import EstimateSection from "../components/landing-screens/EstimateSection";

export default function HomePage() {
  const isScrolled = useScrollPosition();
  return (
    <div>
      <HeroSection />
      <div id="about-us">
        <AboutUs />
      </div>
      <Services servicesList={servicesList} />
      <EstimateSection />
      <NewLook />
      <WhyChoose />
      <PriceViewing />
      <OurPortfolio />
      <HowItWorks />
      <Reviews />
      <ContactUs />
    </div>
  );
}
