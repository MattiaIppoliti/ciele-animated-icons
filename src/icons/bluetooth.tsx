"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const PATH_VARIANTS: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
  },
};

export const BluetoothIcon = createAnimatedIcon((controls, size) => (
  <svg
    fill="none"
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      animate={controls}
      d="m7 7 10 10-5 5V2l5 5L7 17"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      d="M14.5 9.5 17 7l-5-5v4.5"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={PATH_VARIANTS}
    />
  </svg>
));
