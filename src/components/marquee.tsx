"use client";
import React from "react";
import { motion } from "motion/react";

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  innerClassName?: string;
  fade?: boolean;
}

export const Marquee = ({ 
  children, 
  duration = 40, 
  className = "", 
  innerClassName = "",
  fade = true 
}: MarqueeProps) => {
  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      {fade && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-roam-go-bone to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-roam-go-bone to-transparent z-20 pointer-events-none" />
        </>
      )}

      <motion.div
        className={`flex w-max ${innerClassName}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
