'use client'
import { motion } from "motion/react"
import Image from "next/image"
import { tournaments } from "../Data/tournaments"

const Tournaments = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
    duration: 0.7,
    ease: "easeOut",
    }}
    className="mt-36">
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
            FF TOURNAMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 w-9/10 mx-auto">
        {tournaments.map((tournament, index) => (
            <div
            key={index}
            className={`
                relative overflow-hidden rounded-3xl border border-purple-500/30
                bg-purple-500/10 hover:scale-102 hover:border-[#FACC15] hover:shadow-[0_0_10px_#FACC15] transition-all duration-300
                ${index === 0 ? "md:col-span-2 min-h-[420px]" : "min-h-[300px]"}
            `}
            >
                {/* Background Image */}
                <Image
                    src={tournament.image}
                    alt={tournament.name} width={1200} height={600}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">

                    <span className="w-fit px-3 py-1 mb-3 rounded-full bg-purple-600 text-xs font-bold uppercase font-inter">
                    {tournament.status}
                    </span>

                    <h3 className="text-2xl md:text-4xl text-[#FACC15] font-bold font-rajdhani">
                        {tournament.name}
                    </h3>

                    <p className="text-gray-300 mt-2 font-inter">
                    {tournament.round} • {tournament.teams} Teams
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-300 font-inter">
                    <span>🏆 {tournament.prizePool}</span>
                    <span>📅 {tournament.date}</span>
                    <span>📍 {tournament.city}</span>
                    </div>

                    <button className="mt-6 w-fit px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors font-semibold cursor-pointer font-rajdhani ">
                    VIEW DETAILS
                    </button>
                </div>
            </div>
        ))}

        </div>
    </motion.div>
  )
}

export default Tournaments