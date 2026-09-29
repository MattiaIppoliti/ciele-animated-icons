"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const LINE_VARIANTS: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.4,
      delay: 0.15,
      opacity: { duration: 0.1 },
    },
  },
};

export const MicOffIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M12 19v3" />
    <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
    <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
    <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    <motion.path
      animate={controls}
      d="m2 2 20 20"
      initial="normal"
      variants={LINE_VARIANTS}
    />
  </svg>
));
