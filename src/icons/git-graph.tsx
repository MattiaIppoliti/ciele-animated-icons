"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const DURATION = 0.3;

const CALCULATE_DELAY = (i: number) => {
  if (i === 0) return 0.1;

  return i * DURATION + 0.1;
};

export const GitGraphIcon = createAnimatedIcon((controls, size) => (
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
      cx="5"
      cy="6"
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
      d="M5 9v6"
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
      cx="5"
      cy="18"
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
      d="M12 3v18"
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
      cx="19"
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
      d="M16 15.7A9 9 0 0 0 19 9"
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
