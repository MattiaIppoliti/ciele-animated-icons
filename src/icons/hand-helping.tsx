"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

export const HandHelpingIcon = createAnimatedIcon((controls, size) => (
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
      normal: { x: 0, y: 0 },
      animate: {
        x: [0, 2, 0],
        y: [0, -2, 0],
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    }}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
    <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
    <path d="m2 13 6 6" />
  </motion.svg>
));
