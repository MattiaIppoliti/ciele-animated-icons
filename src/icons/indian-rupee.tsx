"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const INDIAN_RUPEE_MAIN_VARIANTS: Variants = {
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

const INDIAN_RUPEE_SECONDARY_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay: 0.5,
      duration: 0.4,
      opacity: { duration: 0.1, delay: 0.5 },
    },
  },
};

export const IndianRupeeIcon = createAnimatedIcon((controls, size) => (
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
      d="M9 3c6.667 0 6.667 10 0 10"
      initial="normal"
      variants={INDIAN_RUPEE_MAIN_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M9 13h-3"
      initial="normal"
      variants={INDIAN_RUPEE_MAIN_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="m14.5 21 l-8.5 -8"
      initial="normal"
      variants={INDIAN_RUPEE_MAIN_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M18 3h-12"
      initial="normal"
      variants={INDIAN_RUPEE_SECONDARY_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M18 8h-12"
      initial="normal"
      variants={INDIAN_RUPEE_SECONDARY_VARIANTS}
    />
  </svg>
));
