"use client";

import { motion,  type Variants } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const CIRCLE_GAUGE_VARIANTS: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 72,
  },
};

export const CircleGaugeIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    animate={controls}
    fill="none"
    height={size}
    initial="normal"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    variants={CIRCLE_GAUGE_VARIANTS}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
    <circle cx="12" cy="12" r="2" />
    <path d="M13.4 10.6 19 5" />
  </motion.svg>
));
