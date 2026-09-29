"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const PATH_VARIANTS: Variants = {
  animate: {
    x: 2,
    translateX: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

export const LogoutIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <motion.polyline
      animate={controls}
      points="16 17 21 12 16 7"
      variants={PATH_VARIANTS}
    />
    <motion.line
      animate={controls}
      variants={PATH_VARIANTS}
      x1="21"
      x2="9"
      y1="12"
      y2="12"
    />
  </svg>
));
