"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppChat from "../components/WhatsappChat";

export default function layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header name={`Amcen homes`} />
      <WhatsAppChat isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </div>
  );
}
