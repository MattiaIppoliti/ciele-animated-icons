"use client";

import type { Transition, Variants } from "motion/react";
import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

const TRANSITION: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

// Left half + perforation dashes slide left together (the tear line follows).
const LEFT_VARIANTS: Variants = {
  normal: { x: 0 },
  animate: { x: -3 },
};

// Right half slides right and tilts clockwise, as if coming away.
const RIGHT_VARIANTS: Variants = {
  normal: { x: 0, rotate: 0 },
  animate: { x: 3, rotate: 4 },
};

export const TicketIcon = createAnimatedIcon((controls, size) => (
  <svg
    className="overflow-visible"
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
    <motion.g
      animate={controls}
      initial="normal"
      transition={TRANSITION}
      variants={LEFT_VARIANTS}
    >
      <path d="M13 5H4a2 2 0 0 0-2 2v2a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h9" />
      <path d="M13 5v2" />
      <path d="M13 11v2" />
      <path d="M13 17v2" />
    </motion.g>
    <motion.path
      animate={controls}
      d="M13 5h7a2 2 0 0 1 2 2v2a3 3 0 0 0 0 6v2a2 2 0 0 1-2 2h-7"
      initial="normal"
      style={{ transformOrigin: "13px 12px" }}
      transition={TRANSITION}
      variants={RIGHT_VARIANTS}
    />
  </svg>
));
