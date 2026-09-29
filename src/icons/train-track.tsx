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

export const TrainTrackIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M2 17 17 2" />
    <motion.path
      animate={controls}
      custom={4}
      d="m2 14 8 8"
      variants={VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={3}
      d="m5 11 8 8"
      variants={VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={2}
      d="m8 8 8 8"
      variants={VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={1}
      d="m11 5 8 8"
      variants={VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={0}
      d="m14 2 8 8"
      variants={VARIANTS}
    />
    <path d="M7 22 22 7" />
  </svg>
));
