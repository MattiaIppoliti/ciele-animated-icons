"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const SAUDI_RIYAL_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.6,
      opacity: { duration: 0.1 },
    },
  },
};

export const SaudiRiyalIcon = createAnimatedIcon((controls, size) => (
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
      d="m20 19.5-5.5 1.2"
      initial="normal"
      variants={SAUDI_RIYAL_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"
      initial="normal"
      variants={SAUDI_RIYAL_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"
      initial="normal"
      variants={SAUDI_RIYAL_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M20 10 4 13.5"
      initial="normal"
      variants={SAUDI_RIYAL_VARIANTS}
    />
  </svg>
));
