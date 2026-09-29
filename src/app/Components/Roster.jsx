'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { roster } from "../Data/roster";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs";
import Image from "next/image";
import { motion } from "motion/react";

export default function CreatorSwiper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
}, []);
  const [index, setIndex] = useState(2);
  const count = roster.length;

  const go = (dir) => {
    setIndex((i) => (i + dir + count) % count);
  };

  // signed distance from the active card, wrapped to the shortest path
  const offsetOf = (i) => {
    let d = i - index;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
    duration: 0.7,
    ease: "easeOut",
    }}
    className="w-full flex flex-col items-center justify-center px-4 relative">
      <h2
        className="text-4xl md:text-5xl text-[#FACC15] font-bold text-center font-rajdhani"
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
        OUR ROSTER
      </h2>
        
      {/* carousel stage */}
      <div className="relative mt-16 w-full max-w-[1300px] h-[560px] flex items-center justify-center [perspective:1400px]">
        {/* nav arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous creator"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-purple-500 text-black shadow-[0_0_20px_#552d92] hover:scale-[1.16] hover:shadow-[0_0_40px_#552d92] duration-300 hover:bg-purple-400 transition-all cursor-pointer"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next creator"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-purple-500 text-black shadow-[0_0_20px_#552d92] hover:scale-116 hover:shadow-[0_0_40px_#552d92] duration-300 hover:bg-purple-400 transition-all cursor-pointer"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>

        {roster.map((creator, i) => {
          const offset = offsetOf(i);
          const isActive = offset === 0;
          const abs = Math.abs(offset);
          if (abs > 2) return null; // only render 5 cards worth of positions

          const translateX = offset * 260;
          const scale = isActive ? 1 : abs === 1 ? 0.86 : 0.74;
          const opacity = isActive ? 1 : abs === 1 ? 0.75 : 0.35;
          const zIndex = 20 - abs;
          const blur = isActive ? "" : abs === 1 ? "" : "blur-[1px]";

          return (
            <div
              key={creator.name}
              onClick={() => setIndex(i)}
              aria-label={`Show ${creator.name}`}
              className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-out ${blur} ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
              style={{
                transform: `translate(-50%, -50%) ${ isMobile ? '' : `translateX(${translateX}px)`} scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <div
                className={`w-90 md:w-[420px] flex flex-col items-center justify-between rounded-2xl bg-[#121716] light:bg-white border overflow-hidden ${
                  isActive
                    ? "border-purple-600/60 shadow-[0_0_50px_#552d92] hover:shadow-none hover:border-2 transition-shadow duration-500"
                    : "border-white/10 hover:border-purple-600 hidden md:block"
                }`}
              >
                <div className="flex items-center justify-center w-72 overflow-hidden">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    width={800}
                    height={800}
                    draggable={false}
                  ></Image>
                </div>
                <div className="flex flex-col items-center gap-5 px-8 py-7">
                  <h3 className="text-purple-500 text-[28px] font-bold tracking-tight font-rajdhani">
                    {creator.name}
                  </h3>
                  <p className={`text-sm ${creator.class} font-inter`}>{creator.role}</p>
                  <div className="flex items-center justify-center gap-2 text-lg my-3">

                    <span className="rounded-full p-3 border border-gray-600 light:text-gray-800 cursor-pointer transition-all hover:text-white hover:-translate-y-2 hover:scale-116 hover:bg-[#1877F2] duration-300"><FaFacebook></FaFacebook></span>

                    <span className="rounded-full p-3 border border-gray-600 cursor-pointer light:text-gray-800 transition-all hover:text-white hover:-translate-y-2 hover:scale-116 hover:bg-[#1877F2] hover:bg-linear-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] duration-300"><BsInstagram></BsInstagram></span>

                    <span className="rounded-full p-3 border border-gray-600 cursor-pointer light:text-gray-800 transition-all hover:text-white hover:-translate-y-2 hover:scale-116 hover:bg-[#FF0000] duration-300"><BsYoutube></BsYoutube></span>

                    <span className="rounded-full p-3 border border-gray-600 cursor-pointer light:text-gray-800 transition-all hover:text-white hover:-translate-y-2 hover:scale-116 hover:bg-black duration-300"><BsTiktok></BsTiktok></span>

                    <span className="rounded-full p-3 border border-gray-600 cursor-pointer light:text-gray-800 hover:text-white transition-all hover:-translate-y-2 hover:scale-116 hover:bg-black duration-300"><BsTwitterX></BsTwitterX></span>

                  </div>
                  <button className="px-7 py-3 font-rajdhani text-center rounded-full light:text-purple-500 hover:text-white bg-purple-500/10 border border-purple-500 cursor-pointer hover:bg-purple-500 hover:-translate-y-1 hover:shadow-[0_0_25px_#552d92] duration-300">
                    VIEW PROFILE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button className="mt-20 rounded-lg font-rajdhani bg-purple-500 px-8 py-3.5 font-bold tracking-wide text-white cursor-pointer hover:bg-purple-400 duration-300 hover:scale-[1.05] transition-all shadow-[0_0_25px_#552d92]">
        MEET OUR TEAM
      </button>
    </motion.div>
  );
}