import { motion } from "framer-motion";
import React from "react";

interface SlideInFromBottomProps {
  children: React.ReactNode;
  duration?: number; // Optional duration for the animation
  delay?: number; // Optional delay for the animation
}

export default function SlideInFromBottom({
  children,
  duration = 0.5,
  delay = 0,
}: SlideInFromBottomProps) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }} // Start from the bottom
      whileInView={{ y: 0, opacity: 1 }} // Slide in to position
      transition={{ duration, delay }}
      viewport={{ once: false }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
