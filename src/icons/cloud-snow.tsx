"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const SNOWFLAKE_VARIANTS: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const SNOWFLAKE_CHILD_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const SNOWFLAKE_PATH = [
  { id: "snowflake1", d: "M8 15h.01" },
  { id: "snowflake2", d: "M8 19h.01" },
  { id: "snowflake3", d: "M12 17h.01" },
  { id: "snowflake4", d: "M12 21h.01" },
  { id: "snowflake5", d: "M16 15h.01" },
  { id: "snowflake6", d: "M16 19h.01" },
];

export const CloudSnowIcon = createAnimatedIcon((controls, size) => (
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
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <motion.g
      animate={controls}
      initial="normal"
      variants={SNOWFLAKE_VARIANTS}
    >
      {SNOWFLAKE_PATH.map((path) => (
        <motion.path
          d={path.d}
          key={path.id}
          variants={SNOWFLAKE_CHILD_VARIANTS}
        />
      ))}
    </motion.g>
  </svg>
));
