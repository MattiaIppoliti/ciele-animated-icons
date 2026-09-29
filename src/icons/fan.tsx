"use client";

import { motion,  type Variants } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const FAN_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
      duration: 0.5,
    },
  },
  animate: {
    rotate: 270,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 80,
      damping: 13,
    },
  },
};

export const FanIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    initial="normal"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    variants={FAN_VARIANTS}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
    <path d="M12 12v.01" />
  </motion.svg>
));
