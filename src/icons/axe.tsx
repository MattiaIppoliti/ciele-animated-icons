"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const AXE_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    rotate: [0, -20, 25, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.6, 0.8, 1],
      ease: ["easeInOut", "easeOut", "easeOut"],
    },
  },
};

export const AxeIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    initial="normal"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    style={{ transformOrigin: "0% 100%", transformBox: "fill-box" }}
    variants={AXE_VARIANTS}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" />
    <path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" />
  </motion.svg>
));
