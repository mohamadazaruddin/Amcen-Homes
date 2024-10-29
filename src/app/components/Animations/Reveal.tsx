import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export default function Reveal({ children, duration, delay }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: false }}
      style={{
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
