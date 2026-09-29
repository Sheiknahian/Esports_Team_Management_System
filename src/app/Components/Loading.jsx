"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    // Progress slowly moves from 0 → 90
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }

        return prev + 1;
      });
    }, 40);

    // Minimum loading time
    const finishTimer = setTimeout(() => {
      setProgress(100);

      // Give 100% time to be visible
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#141118]">

      {/* Logo */}
      <div className="w-36 rounded-full">
        <Image
          src="/logo_bgr.jpg"
          className="rounded-full"
          width={600}
          height={600}
          alt="VYRON logo"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <div
          className="mt-2 text-center"
          style={{
            textShadow: `
              0 0 5px #552d92,
              0 0 15px #552d92,
              0 0 30px #552d92,
              0 0 60px #552d92,
              0 0 90px #552d92
            `,
          }}
        >
          <h1 className="font-bebas text-5xl text-purple-500">
            VYRON <span className="text-white">ESPORTS</span>
          </h1>

          <p className="mt-2 font-inter text-sm text-white">
            Explore VYRON, know the team.
          </p>

          {/* Progress bar */}
          <div className="mt-8 h-[3px] w-72 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-[#FACC15]"
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.08,
                ease: "linear",
              }}
            />
          </div>

          {/* Percentage */}
          <p className="mt-3 font-orbitron text-sm text-[#FACC15]">
            {progress}%
          </p>
        </div>
      </motion.div>
    </div>
  );
}
