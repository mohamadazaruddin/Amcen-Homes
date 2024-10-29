import { motion } from "framer-motion";
import React from "react";
interface PopOutProps {
  children: React.ReactNode;
  duration?: number; // Optional duration for the animation
  delay?: number; // Optional delay for the animation
}
export default function PopOut({
  children,
  duration = 0.5,
  delay = 0,
}: PopOutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
