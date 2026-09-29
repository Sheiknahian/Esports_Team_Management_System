'use client'
import Image from "next/image"
import { FaPlayCircle } from "react-icons/fa"
import { matches } from "../Data/matches"
import MobileMatches from "./MobileMatches"
import { motion } from "motion/react"

const Matches = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.95}}
    whileInView={{ opacity: 1, scale: 1}}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
    duration: 0.7,
    ease: "easeOut",
    }}
    className="relative mt-36">
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
            MATCHES FIXTURES
        </h2>

        <div className="mt-16 hidden md:block bg-purple-800/10 py-10 border-y border-[#FACC15]/30 shadow-[0_0_10px_#f7dd79] overflow-x-hidden group">
            <div className="flex items-center gap-8 px-6 w-max animate-slide group-hover:[animation-play-state:paused]">
            {[...matches, ...matches].map((match, index) => (
                <div
                key={index}
                className="w-[400px] shrink-0 aspect-square flex flex-col justify-between bg-purple-500/10 light:bg-gray-200 rounded-3xl p-6 border border-purple-600/30 hover:border-purple-600/50 hover:-translate-y-2 hover:hover:shadow-[0_0_15px_#552d92] transition-all duration-300"
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

                    <h4 className="text-xl font-semibold light:text-purple-500 font-rajdhani">
                    VYRON ESPORTS
                    </h4>
                </div>

                {/* Tournament Info */}
                <div className="space-y-1">
                    <h4 className="text-[#FACC15] light:text-yellow-600 font-semibold text-lg font-rajdhani">
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
                <button className="px-7 py-3 text-center font-semibold light:text-purple-500 hover:text-white font-rajdhani text-lg rounded-2xl bg-purple-500/10 border border-purple-500 cursor-pointer hover:bg-purple-500 hover:-translate-y-1 hover:shadow-[0_0_25px_#552d92] transition-all duration-300 flex items-center justify-center gap-1">
                    <FaPlayCircle />
                    Stream Link
                </button>
                </div>
            ))}
            </div>
        </div>
        <div className="md:hidden mt-16 w-full flex justify-center">
            <MobileMatches></MobileMatches>
        </div>
    </motion.div>
  )
}

export default Matches