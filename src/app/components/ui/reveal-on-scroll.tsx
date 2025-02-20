"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export function RevealOnScroll({ children, width = "fit-content" }: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-100px",
    once: false
  });

  return (
    <div ref={ref} style={{ width }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
} 