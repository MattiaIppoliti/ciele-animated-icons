"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const DURATION = 0.3;

const CALCULATE_DELAY = (i: number) => {
  if (i === 0) return 0.1;

  return i * DURATION + 0.1;
};

export const GitForkIcon = createAnimatedIcon((controls, size) => (
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
    <motion.circle
      animate={controls}
      cx="12"
      cy="18"
      r="3"
      transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(0),
        opacity: { delay: CALCULATE_DELAY(0) },
      }}
      variants={{
        normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
        animate: {
          pathLength: [0, 1],
          opacity: [0, 1],
        },
      }}
    />

    <motion.path
      animate={controls}
      d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
      transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(1),
        opacity: { delay: CALCULATE_DELAY(1) },
      }}
      variants={{
        normal: {
          pathLength: 1,
          pathOffset: 0,
          opacity: 1,
          transition: { delay: 0 },
        },
        animate: {
          pathLength: [0, 1],
          opacity: [0, 1],
          pathOffset: [1, 0],
        },
      }}
    />

    <motion.circle
      animate={controls}
      cx="6"
      cy="6"
      r="3"
      transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(2),
        opacity: { delay: CALCULATE_DELAY(2) },
      }}
      variants={{
        normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
        animate: {
          pathLength: [0, 1],
          opacity: [0, 1],
        },
      }}
    />

    <motion.circle
      animate={controls}
      cx="18"
      cy="6"
      r="3"
      transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(2),
        opacity: { delay: CALCULATE_DELAY(2) },
      }}
      variants={{
        normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
        animate: {
          pathLength: [0, 1],
          opacity: [0, 1],
        },
      }}
    />

    <motion.path
      animate={controls}
      d="M12 12v3"
      transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(1),
        opacity: { delay: CALCULATE_DELAY(1) },
      }}
      variants={{
        normal: {
          pathLength: 1,
          pathOffset: 0,
          opacity: 1,
          transition: { delay: 0 },
        },
        animate: {
          pathLength: [0, 1],
          opacity: [0, 1],
          pathOffset: [1, 0],
        },
      }}
    />
  </svg>
));
