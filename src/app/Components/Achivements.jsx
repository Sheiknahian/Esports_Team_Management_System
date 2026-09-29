'use client'
import { motion } from "motion/react"
import Image from "next/image"
import { achievements } from "../Data/achivements"

const Achivements = () => {
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
            OUR ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 w-9/10 mx-auto">
            {achievements.map((achievement, index) => (
                <div
                    key={achievement.id}
                    className={`
                        relative overflow-hidden rounded-3xl
                        border border-purple-500/30
                        bg-purple-500/10 hover:scale-102 hover:border-[#FACC15] hover:shadow-[0_0_10px_#FACC15] transition-all duration-300
                        ${index === 0
                        ? "md:col-span-2 min-h-[420px]"
                        : "min-h-[300px]"
                        }
                `}
                >
                    <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

                    <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">

                        {/* Placement */}
                        <span className="w-fit px-4 py-1.5 mb-3 rounded-full bg-[#FACC15] text-black text-xs font-bold font-inter">
                        {achievement.placement}
                        </span>

                        {/* Trophy */}
                        <span className="text-4xl md:text-5xl mb-3">
                        {achievement.icon}
                        </span>

                        {/* Title */}
                        <h3 className="text-2xl md:text-4xl font-bold text-[#FACC15] font-rajdhani">
                        {achievement.title}
                        </h3>

                        {/* Year */}
                        <p className="text-gray-400 mt-2 font-inter">
                        {achievement.year}
                        </p>

                        {/* Info */}
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-300 font-inter">
                            <span>🏆 {achievement.prizePool}</span>
                            <span>👥 {achievement.teams} Teams</span>
                            <span>📍 {achievement.location}</span>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Achivements