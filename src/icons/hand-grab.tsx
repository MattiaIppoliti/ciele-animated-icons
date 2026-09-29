"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

export const HandGrabIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    initial="normal"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    variants={{
      normal: { scale: 1 },
      animate: {
        scale: [1, 0.9, 1],
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      },
    }}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
    <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
    <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
    <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
    <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
  </motion.svg>
));
