"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const COMMIT_VARIANTS: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.15 * custom,
      opacity: { delay: 0.1 * custom },
    },
  }),
};

export const FolderGitIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    <motion.circle
      animate={controls}
      custom={1}
      cx="12"
      cy="13"
      r="2"
      variants={COMMIT_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={2}
      d="M14 13h3"
      variants={COMMIT_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={0}
      d="M7 13h3"
      variants={COMMIT_VARIANTS}
    />
  </svg>
));
