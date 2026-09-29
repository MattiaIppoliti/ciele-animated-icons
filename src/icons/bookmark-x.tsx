"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const BOOKMARK_VARIANTS: Variants = {
  normal: { scaleY: 1, scaleX: 1 },
  animate: {
    scaleY: [1, 1.3, 0.9, 1.05, 1],
    scaleX: [1, 0.9, 1.1, 0.95, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const X_LINE_VARIANTS: Variants = {
  normal: { strokeDashoffset: 0, opacity: 1 },
  animate: (i: number) => ({
    strokeDashoffset: [1, 0],
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

export const BookmarkXIcon = createAnimatedIcon((controls, size) => (
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
      d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
      style={{ originX: 0.5, originY: 0.5 }}
      variants={BOOKMARK_VARIANTS}
    />

    <motion.path
      animate={controls}
      custom={0}
      d="m14.5 7.5-5 5"
      initial="normal"
      pathLength="1"
      strokeDasharray="1 1"
      variants={X_LINE_VARIANTS}
    />

    <motion.path
      animate={controls}
      custom={1}
      d="m9.5 7.5 5 5"
      initial="normal"
      pathLength="1"
      strokeDasharray="1 1"
      variants={X_LINE_VARIANTS}
    />
  </svg>
));
