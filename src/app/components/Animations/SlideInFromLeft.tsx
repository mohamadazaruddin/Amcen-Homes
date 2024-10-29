import { motion } from "framer-motion";
import React from "react";

interface SlideInFromLeftProps {
  children: React.ReactNode;
  duration?: number; // Optional duration for the animation
  delay?: number; // Optional delay for the animation
}

export default function SlideInFromLeft({
  children,
  duration,
  delay,
}: SlideInFromLeftProps) {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }} // Start from the left
      whileInView={{ x: 0, opacity: 1 }} // Slide in to position
      transition={{ duration, delay }}
      viewport={{ once: false }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
