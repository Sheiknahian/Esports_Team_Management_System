"use client";

import { useRef } from "react";
import { matches } from "../Data/matches";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MobileMatches = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full">

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={20}
      >
        {matches.map((match, index) => (
            <SwiperSlide key={match.id}>
                <div className="flex justify-center px-4">
                    <div
                    key={index}
                    className="w-full shrink-0 flex flex-col justify-between gap-2 bg-purple-500/10 light:bg-gray-200 rounded-3xl p-6 border border-purple-600/30 hover:border-purple-600/50 hover:-translate-y-2 hover:hover:shadow-[0_0_15px_#552d92] transition-all duration-300"
                    >
                    {/* Date & Logo */}
                    <div className="flex justify-between items-center">
                        <h4 className="text-purple-400 font-semibold font-inter">
                        {match.time}, {match.date}
                        </h4>

                        <div className="w-20">
                        <Image
                            className="rounded-xl"
                            width={600}
                            height={600}
                            alt="ff_logo"
                            src="/ff_logo.jpg"
                        />
                        </div>
                    </div>

                    {/* Team */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-24">
                        <Image
                            width={800}
                            height={800}
                            alt="logo"
                            src="/logo_bgr.jpg"
                        />
                        </div>

                        <h4 className="text-lg font-semibold light:text-purple-500 font-rajdhani">
                        VYRON ESPORTS
                        </h4>
                    </div>

                    {/* Tournament Info */}
                    <div className="space-y-1">
                        <h4 className="text-[#FACC15] font-semibold light:text-yellow-600 font-semibold text-lg font-rajdhani">
                        {match.tournament}
                        </h4>

                        <p className="font-inter text-sm light:text-gray-600 text-gray-400">
                        Venue: {match.venue}
                        </p>

                        <p className="font-inter text-sm light:text-gray-600 text-gray-400">
                        {match.city}, {match.country}
                        </p>

                        <p className="font-inter text-sm light:text-gray-600 text-gray-400">
                        {match.round} • {match.teams} Teams
                        </p>
                    </div>

                    {/* Button */}
                    <button className="px-7 py-2 text-center font-semibold light:text-purple-500 hover:text-white font-rajdhani text-lg rounded-2xl bg-purple-500/10 border border-purple-500 cursor-pointer hover:bg-purple-500 hover:-translate-y-1 hover:shadow-[0_0_25px_#552d92] transition-all duration-300 flex items-center justify-center gap-1">
                      <FaPlayCircle />
                      Stream Link
                  </button>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-purple-700/50 text-white flex items-center justify-center hover:bg-purple-600 transition"
      >
        <FaChevronLeft />
      </button>

      {/* Next */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-purple-700/50 text-white flex items-center justify-center hover:bg-purple-600 transition"
      >
        <FaChevronRight />
      </button>

    </div>
  );
};

export default MobileMatches;

