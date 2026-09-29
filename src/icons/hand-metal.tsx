"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

export const HandMetalIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    initial="normal"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    style={{ originX: "50%", originY: "90%" }}
    variants={{
      normal: { rotate: 0 },
      animate: {
        rotate: [0, -15, 15, -10, 10, 0],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    }}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
    <path d="M14 11V9a2 2 0 1 0-4 0v2" />
    <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
    <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
  </motion.svg>
));
