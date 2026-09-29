"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const PATH_VARIANTS: Variants = {
  normal: { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", translateY: 0 },
  animate: {
    d: "M9 18v-6H5l7-7 7 7h-4v6H9z",
    translateY: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

export const ArrowBigUpIcon = createAnimatedIcon((controls, size) => (
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
      d="M9 18v-6H5l7-7 7 7h-4v6H9z"
      variants={PATH_VARIANTS}
    />
  </svg>
));
