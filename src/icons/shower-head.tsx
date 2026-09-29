"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const DROP_VARIANTS: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DROP_CHILD_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.2, 1],
    transition: {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const DROP_PATH = [
  { id: "drop1", d: "M14 17v.01" },
  { id: "drop2", d: "M10 16v.01" },
  { id: "drop3", d: "M13 13v.01" },
  { id: "drop4", d: "M16 10v.01" },
  { id: "drop5", d: "M11 20v.01" },
  { id: "drop6", d: "M17 14v.01" },
  { id: "drop7", d: "M20 11v.01" },
];

export const ShowerHeadIcon = createAnimatedIcon((controls, size) => (
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
    <path d="m4 4 2.5 2.5" />
    <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
    <path d="M15 5 5 15" />
    <motion.g
      animate={controls}
      initial="normal"
      variants={DROP_VARIANTS}
    >
      {DROP_PATH.map((path) => (
        <motion.path
          d={path.d}
          key={path.id}
          variants={DROP_CHILD_VARIANTS}
        />
      ))}
    </motion.g>
  </svg>
));
