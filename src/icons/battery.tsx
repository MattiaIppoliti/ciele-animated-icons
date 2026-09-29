"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

export const BatteryIcon = createAnimatedIcon((controls, size) => (
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
    <rect height="12" rx="2" width="16" x="2" y="6" />
    <path d="M22 14v-4" />

    <motion.rect
      animate={controls}
      fill="currentColor"
      height="8"
      initial="normal"
      rx="1"
      stroke="none"
      variants={{
        normal: { width: 0, opacity: 0 },
        animate: {
          width: 12,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      x="4"
      y="8"
    />
  </svg>
));
