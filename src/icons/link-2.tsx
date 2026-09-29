"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const LEFT_VARIANTS: Variants = {
  normal: { x: 0 },
  animate: {
    x: [0, -0.7, 0.3, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.4, 0.75, 1],
      ease: "easeInOut",
    },
  },
};

const RIGHT_VARIANTS: Variants = {
  normal: { x: 0 },
  animate: {
    x: [0, 0.7, -0.3, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.4, 0.75, 1],
      ease: "easeInOut",
    },
  },
};

export const Link2Icon = createAnimatedIcon((controls, size) => (
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
    <motion.g animate={controls} variants={LEFT_VARIANTS}>
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <line x1="8" x2="12" y1="12" y2="12" />
    </motion.g>
    <motion.g animate={controls} variants={RIGHT_VARIANTS}>
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="16" x2="12" y1="12" y2="12" />
    </motion.g>
  </svg>
));
