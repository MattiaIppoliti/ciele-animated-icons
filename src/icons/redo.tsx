"use client";

import { cubicBezier, motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const CUSTOM_EASING = cubicBezier(0.25, 0.1, 0.25, 1);

export const RedoIcon = createAnimatedIcon((controls, size) => (
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
      d="M21 7v6h-6"
      transition={{ duration: 0.6, ease: CUSTOM_EASING }}
      variants={{
        normal: { translateX: 0, translateY: 0, rotate: 0 },
        animate: {
          translateX: [0, -2.1, 0],
          translateY: [0, -1.4, 0],
          rotate: [0, -12, 0],
        },
      }}
    />
    <motion.path
      animate={controls}
      d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
      transition={{ duration: 0.6, ease: CUSTOM_EASING }}
      variants={{
        normal: { pathLength: 1 },
        animate: { pathLength: [1, 0.8, 1] },
      }}
    />
  </svg>
));
