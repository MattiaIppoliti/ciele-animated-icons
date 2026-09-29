"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const SVG_VARIANTS: Variants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [0, -5, -3],
    transition: {
      duration: 0.5,
      times: [0, 0.6, 1],
    },
  },
};

const VERTICAL_BAR_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.3,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
};

const HORIZONTAL_BAR_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.6,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.6 },
    },
  },
};

export const MapPinPlusIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    initial="normal"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    variants={SVG_VARIANTS}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
    <circle cx="12" cy="10" r="3" />
    <motion.path
      animate={controls}
      d="M16 18h6"
      initial="normal"
      variants={HORIZONTAL_BAR_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M19 15v6"
      initial="normal"
      variants={VERTICAL_BAR_VARIANTS}
    />
  </motion.svg>
));
