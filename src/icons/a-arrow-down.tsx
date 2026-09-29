"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const LETTER_VARIANTS: Variants = {
  normal: { opacity: 1, scale: 1 },
  animate: {
    opacity: [0, 1],
    scale: [0.8, 1],
    transition: { duration: 0.3 },
  },
};

const ARROW_VARIANTS: Variants = {
  normal: { opacity: 1, y: 0 },
  animate: {
    opacity: [0, 1],
    y: [-10, 0],
    transition: { duration: 0.3, delay: 0.2 },
  },
};

export const AArrowDownIcon = createAnimatedIcon((controls, size) => (
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
    <motion.path
      animate={controls}
      d="M3.5 13h6"
      variants={LETTER_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="m2 16 4.5-9 4.5 9"
      variants={LETTER_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M18 7v9"
      variants={ARROW_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="m14 12 4 4 4-4"
      variants={ARROW_VARIANTS}
    />
  </svg>
));
