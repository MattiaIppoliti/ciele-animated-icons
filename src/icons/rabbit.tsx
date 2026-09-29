"use client";

import type { Transition, Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const TRANSITION: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
};

const SPEED_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  animate: {
    rotate: [0, 5, -5, 3, -3, 0],
    x: [0, 3, -3, 2, -2, 0],
    y: [0, 1.5, -1.5, 1, -1, 0],
    transition: TRANSITION,
  },
};

export const RabbitIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    variants={SPEED_VARIANTS}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
    <path d="M13 16a3 3 0 0 1 2.24 5" />
    <path d="M18 12h.01" />
    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
    <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
  </motion.svg>
));
