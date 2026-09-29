"use client";

import { motion,  type Variants } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const BISHOP_VARIANTS: Variants = {
  normal: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
  animate: {
    x: [0, -6, -6, -6, 6, 6, 6, 0],
    y: [0, -6, -6, -6, 6, 6, 6, 0],
    rotate: [0, -16, -16, -16, 16, 16, 4, 0],
    opacity: [1, 1, 0, 0, 0, 0, 1, 1],
    transition: {
      duration: 1.4,
      times: [0, 0.28, 0.38, 0.45, 0.5, 0.58, 0.72, 1],
      ease: "easeInOut",
    },
  },
};

export const ChessBishopIcon = createAnimatedIcon((controls, size) => (
  <svg
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    style={{ overflow: "visible" }}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g
      animate={controls}
      initial="normal"
      style={{ transformBox: "view-box", transformOrigin: "12px 12px" }}
      variants={BISHOP_VARIANTS}
    >
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" />
      <path d="m16 7-2.5 2.5" />
      <path d="M9 2h6" />
    </motion.g>
  </svg>
));
