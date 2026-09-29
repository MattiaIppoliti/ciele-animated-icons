"use client";

import type { Transition } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.3,
};

export const AlignRightIcon = createAnimatedIcon((controls, size) => (
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
    <motion.line
      animate={controls}
      transition={DEFAULT_TRANSITION}
      variants={{
        normal: { x1: 3 },
        animate: { x1: 3 },
      }}
      x1="3"
      x2="21"
      y1="6"
      y2="6"
    />

    <motion.line
      animate={controls}
      transition={DEFAULT_TRANSITION}
      variants={{
        normal: { x1: 9 },
        animate: { x1: 5 },
      }}
      x1="9"
      x2="21"
      y1="12"
      y2="12"
    />

    <motion.line
      animate={controls}
      transition={DEFAULT_TRANSITION}
      variants={{
        normal: { x1: 7 },
        animate: { x1: 12 },
      }}
      x1="7"
      x2="21"
      y1="18"
      y2="18"
    />
  </svg>
));
