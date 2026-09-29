"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

export const Disc3Icon = createAnimatedIcon((controls, size) => (
  <svg
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2" />

    <motion.g
      animate={controls}
      style={{ transformOrigin: "12px 12px" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      variants={{
        normal: { rotate: 0 },
        animate: { rotate: 90 },
      }}
    >
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </motion.g>
  </svg>
));
