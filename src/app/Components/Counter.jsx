"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";

export default function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const startAnimation = () => {
    animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });
  };

  return (
    <motion.span
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onViewportEnter={startAnimation}
    >
      {rounded}
    </motion.span>
  );
}