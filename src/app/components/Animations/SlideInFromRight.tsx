import { motion } from "framer-motion";
import React from "react";

interface SlideInFromRightProps {
  children: React.ReactNode;
  duration?: number; // Optional duration for the animation
  delay?: number; // Optional delay for the animation
}

export default function SlideInFromRight({
  children,
  duration = 0.5,
  delay = 0,
}: SlideInFromRightProps) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }} // Start from the right
      whileInView={{ x: 0, opacity: 1 }} // Slide in to position
      transition={{ duration, delay }}
      viewport={{ once: false }}   style={{width:"100%"}}
    >
      {children}
    </motion.div>
  );
}
