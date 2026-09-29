"use client";

import type { Transition, Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const TRANSITION: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const VARIANTS: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...TRANSITION,
      delay: 0.1 * custom,
    },
  }),
};

export const ChromeIcon = createAnimatedIcon((controls, size) => (
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
    <circle cx="12" cy="12" r="10" />
    <motion.circle
      animate={controls}
      custom={0}
      cx="12"
      cy="12"
      r="4"
      variants={VARIANTS}
    />
    <motion.line
      animate={controls}
      custom={3}
      variants={VARIANTS}
      x1="21.17"
      x2="12"
      y1="8"
      y2="8"
    />
    <motion.line
      animate={controls}
      custom={3}
      variants={VARIANTS}
      x1="3.95"
      x2="8.54"
      y1="6.06"
      y2="14"
    />
    <motion.line
      animate={controls}
      custom={3}
      variants={VARIANTS}
      x1="10.88"
      x2="15.46"
      y1="21.94"
      y2="14"
    />
  </svg>
));
