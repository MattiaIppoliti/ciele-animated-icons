"use client";

import { motion,  type Variants } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const SOUP_PATH_VARIANTS: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: (custom: number) => ({
    y: -3,
    opacity: [0, 1, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.2 * custom,
    },
  }),
};

export const SoupIcon = createAnimatedIcon((controls, size) => (
  <motion.svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    style={{ overflow: "visible" }}
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
    <path d="M7 21h10" />
    <path d="M19.5 12 22 6" />
    <motion.path
      animate={controls}
      custom={0}
      d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
      initial="normal"
      variants={SOUP_PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={0.2}
      d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
      initial="normal"
      variants={SOUP_PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={0.4}
      d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
      initial="normal"
      variants={SOUP_PATH_VARIANTS}
    />
  </motion.svg>
));
