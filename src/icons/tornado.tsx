"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const PATH_VARIANTS: Variants = {
  normal: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: (custom: number) => ({
    x: [0, custom * 1, 0],
    opacity: 1,
    transition: {
      x: {
        duration: 0.6,
        repeat: 1,
        ease: "easeInOut",
        delay: custom * 0.1,
      },
    },
  }),
};

export const TornadoIcon = createAnimatedIcon((controls, size) => (
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
      custom={1}
      d="M21 4H3"
      initial="normal"
      variants={PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={2}
      d="M18 8H6"
      initial="normal"
      variants={PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={3}
      d="M19 12H9"
      initial="normal"
      variants={PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={4}
      d="M16 16h-6"
      initial="normal"
      variants={PATH_VARIANTS}
    />
    <motion.path
      animate={controls}
      custom={5}
      d="M11 20H9"
      initial="normal"
      variants={PATH_VARIANTS}
    />
  </svg>
));
