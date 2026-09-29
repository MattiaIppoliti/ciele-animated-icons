"use client";

import { motion } from "motion/react";
import { createAnimatedIcon } from "../create-animated-icon";

export const AlignCenterIcon = createAnimatedIcon((controls, size) => (
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
      d="M17 12H7"
      variants={{
        normal: { translateX: 0 },
        animate: {
          translateX: [0, 3, -3, 2, -2, 0],
          transition: {
            ease: "linear",
            translateX: {
              duration: 1,
            },
          },
        },
      }}
    />
    <path d="M19 18H5" />
    <path d="M21 6H3" />
  </svg>
));
