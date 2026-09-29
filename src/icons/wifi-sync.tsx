"use client";

import {
  motion,
  type Transition, 
  type Variants,
} from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const SYNC_VARIANTS: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: -360 },
};

const SYNC_TRANSITION: Transition = {
  duration: 0.6,
  ease: "easeInOut",
};

export const WifiSyncIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 8.82a15 15 0 0 1 20 0" />
    <path d="M5 12.86a10 10 0 0 1 3-2.032" />
    <path d="M8.5 16.429h.01" />
    <motion.g
      animate={controls}
      initial="normal"
      transition={SYNC_TRANSITION}
      variants={SYNC_VARIANTS}
    >
      <path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
      <path d="M11.965 14.105h4" />
      <path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
      <path d="M21.965 22.105v-4" />
    </motion.g>
  </motion.svg>
));
