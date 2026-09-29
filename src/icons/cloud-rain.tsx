"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const RAIN_VARIANTS: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const RAIN_CHILD_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.2, 1],
    transition: {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

export const CloudRainIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <motion.g
      animate={controls}
      initial="normal"
      variants={RAIN_VARIANTS}
    >
      <motion.path d="M16 14v6" variants={RAIN_CHILD_VARIANTS} />
      <motion.path d="M8 14v6" variants={RAIN_CHILD_VARIANTS} />
      <motion.path d="M12 16v6" variants={RAIN_CHILD_VARIANTS} />
    </motion.g>
  </svg>
));
