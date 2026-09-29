"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const PATH_VARIANTS: Variants = {
  animate: {
    x: -2,
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

export const LogInIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <motion.polyline
      animate={controls}
      points="10 17 15 12 10 7"
      variants={PATH_VARIANTS}
    />
    <motion.line
      animate={controls}
      variants={PATH_VARIANTS}
      x1="3"
      x2="15"
      y1="12"
      y2="12"
    />
  </svg>
));
