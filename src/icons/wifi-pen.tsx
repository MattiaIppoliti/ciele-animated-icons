"use client";

import { motion,  type Variants } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const PEN_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  animate: {
    rotate: [-0.3, 0.2, -0.4],
    x: [0, -0.5, 1, 0],
    y: [0, 1, -0.5, 0],
    transition: {
      duration: 0.5,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

export const WifiPenIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
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
    <path d="M2 8.82a15 15 0 0 1 20 0" />
    <motion.path
      animate={controls}
      d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      initial="normal"
      variants={PEN_VARIANTS}
    />
    <path d="M5 12.859a10 10 0 0 1 10.5-2.222" />
    <path d="M8.5 16.429a5 5 0 0 1 3-1.406" />
  </motion.svg>
));
