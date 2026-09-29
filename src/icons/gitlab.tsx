"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const DURATION = 0.7;

const CALCULATE_DELAY = (i: number) => {
  if (i === 0) return 0.1;

  return i * DURATION + 0.1;
};

export const GitlabIcon = createAnimatedIcon((controls, size) => (
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
      d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
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
  </svg>
));
