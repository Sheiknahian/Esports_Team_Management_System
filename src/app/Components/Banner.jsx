'use client'
import Image from "next/image"
import { ArrowUpRight, Gamepad, UsersRound } from "lucide-react";
import { FaGamepad, FaMedal } from "react-icons/fa";
import Counter from "./Counter";
import { BsFillTrophyFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="pt-10 lg:pt-48 mx-5 md:mx-10">
        <div className="flex flex-col xl:flex-row justify-center gap-25 items-center">
            <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
                <div className="relative w-36 h-36 md:w-50 md:h-50 rounded-full p-[2px] overflow-hidden">

                    {/* Card */}
                    <div>
                        <div className="
                            absolute inset-[-100%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_330deg,#FACC15_350deg,#FACC15_360deg)] animate-[spin_4s_linear_infinite]
                        " />
                        <div className="
                            relative z-10 flex h-full w-full p-5 md:p-10 items-center justify-center rounded-full bg-[#050505]
                        ">
                            <Image
                            src="/logo.jpg"
                            width={700}
                            height={700}
                            alt="Logo"
                            className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-purple-400 light:text-[#7C3AED] light:[text-shadow:none] dark:[text-shadow:0_0_5px_#552d92,0_0_15px_#552d92,0_0_30px_#552d92,0_0_60px_#552d92,0_0_90px_#552d92] mt-3 font-bebas"
                >
                    VYRON ESPORTS
                </h3>
                <h4 className="text-xl md:text-2xl text-[#FACC15] light:text-black [text-shadow:0_0_10px_#f7dd79] font-rajdhani">
                    Rise • Compete • Conquer
                </h4>
                <p className="text-sm text-gray-200 light:text-gray-900 md:w-150 font-inter">Forged by competition. Driven by ambition. VYRON brings together
                    fearless players ready to make their mark on the battlefield.</p>
                <div className="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-4">

                    {/* Primary CTA */}
                    <button className="
                        group relative overflow-hidden rounded-xl bg-[#552d92] px-7 py-3.5 font-semibold text-white shadow-[0_0_20px_#552d9240] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_#552d9270] cursor-pointer font-rajdhani text-lg
                    ">
                        <span className="relative z-10 flex items-center gap-2">
                            DISCOVER VYRON
                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight></ArrowUpRight>
                            </span>
                        </span>

                        <span className="
                        absolute inset-0
                        -translate-x-full
                        bg-linear-to-r
                        from-transparent via-white/15 to-transparent
                        transition-transform duration-700
                        group-hover:translate-x-full
                        " />
                    </button>

                    {/* Secondary CTA */}
                    <button className="
                        group rounded-xl border-2 border-[#552d92]/50 light:border-purple-600 bg-white/[0.03] px-7 py-3.5 font-semibold text-purple-400 light:text-purple-600 backdrop-blur-md transition-bg duration-300 hover:border-2 hover:border-purple-600 hover:bg-[#FACC15] hover:text-purple-500 hover:shadow-[0_0_15px_#FACC15] cursor-pointer flex items-center gap-1 font-rajdhani text-lg
                    ">
                        <UsersRound></UsersRound> VIEW ROSTER
                    </button>

                </div>
            </div>
            <div className="hidden xl:block md:w-100 bg-[#552d92]/10 light:bg-purple-100 backdrop-blur-2xl p-5 rounded-3xl border border-[#a88bbd]/15 shadow-[0_0_15px_#FACC15] light:shadow-[0_0_15px_#552d92]"
            >
                <Image src={'/tatsuiya.png'} width={800} height={800} alt="tatsuiya"></Image>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
            duration: 0.7,
            ease: "easeOut",
            }}
        className="grid grid-cols-2 xl:grid-cols-4 gap-8 my-28 md:my-40 xl:my-56 text-center place-items-center 2xl:mx-25">

            <div className="w-42 h-35 md:w-72 md:h-60 bg-purple-500/10 light:bg-purple-50 light:border-purple-300 rounded-2xl flex flex-col items-center justify-center border-2 border-purple-500/10 hover:border-purple-500/30 hover:hover:shadow-[0_0_15px_#552d92] hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl md:text-5xl text-[#60A5FA] light:text-[#0072ff] drop-shadow-[0_0_30px_#2563EB]">
                    <FaGamepad />
                </span>
                <h4 className="text-3xl md:text-5xl font-bold text-purple-400 light:text-[#7C3AED] mt-2 md:mt-4 flex items-center dark:[text-shadow:0_0_5px_#552d92,0_0_15px_#552d92,0_0_30px_#552d92,0_0_60px_#552d92,0_0_90px_#552d92] light:[text-shadow:none] font-rajdhani"><Counter value={500}></Counter>+</h4>
                <p className="mt-2 text-sm light:text-gray-900 md:text-normal font-inter">MATCHES PLAYED</p>
            </div>

            <div className="w-42 h-35 md:w-72 md:h-60 bg-purple-500/10 light:bg-purple-50 light:border-purple-300 rounded-2xl flex flex-col items-center justify-center border-2 border-purple-500/10 hover:border-purple-500/30 hover:hover:shadow-[0_0_15px_#552d92] hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl md:text-5xl text-[#FACC15] light:drop-shadow-none light:text-purple-500 drop-shadow-[0_0_30px_#F59E0B]">
                    <FaMedal />
                </span>
                <h4 className="text-3xl md:text-5xl font-bold text-purple-400 light:text-[#7C3AED] mt-2 md:mt-4 flex items-center dark:[text-shadow:0_0_5px_#552d92,0_0_15px_#552d92,0_0_30px_#552d92,0_0_60px_#552d92,0_0_90px_#552d92] light:[text-shadow:none] font-rajdhani"><Counter value={20}></Counter>+</h4>
                <p className="mt-2 light:text-gray-900 text-sm md:text-normal font-inter">TOURNAMENTS WON</p>
            </div>

            <div className="w-42 h-35 md:w-72 md:h-60 bg-purple-500/10 light:bg-purple-50 light:border-purple-300 rounded-2xl flex flex-col items-center justify-center border-2 border-purple-500/10 hover:border-purple-500/30 hover:hover:shadow-[0_0_15px_#552d92] hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl md:text-5xl text-purple-500 drop-shadow-[0_0_30px_#552d92]">
                    <HiUserGroup />
                </span>

                <h4 className="text-3xl md:text-5xl font-bold text-purple-400 light:text-[#7C3AED] mt-2 md:mt-4 flex items-center dark:[text-shadow:0_0_5px_#552d92,0_0_15px_#552d92,0_0_30px_#552d92,0_0_60px_#552d92,0_0_90px_#552d92] light:[text-shadow:none] font-rajdhani">0<Counter value={8}></Counter>+</h4>
                <p className="mt-2 text-sm light:text-gray-900 md:text-normal font-inter">PLAYERS</p>
            </div>

            <div className="w-42 h-35 md:w-72 md:h-60 bg-purple-500/10 light:bg-purple-50 light:border-purple-300 rounded-2xl flex flex-col items-center justify-center border-2 border-purple-500/10 hover:border-purple-500/30 hover:hover:shadow-[0_0_15px_#552d92] hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl md:text-5xl light:text-purple-500 light:drop-shadow-none text-[#FACC15] drop-shadow-[0_0_20px_#FACC15]">
                    <BsFillTrophyFill />
                </span>
                <h4 className="text-3xl md:text-5xl font-bold text-purple-400 light:text-[#7C3AED] mt-2 md:mt-4 flex items-center dark:[text-shadow:0_0_5px_#552d92,0_0_15px_#552d92,0_0_30px_#552d92,0_0_60px_#552d92,0_0_90px_#552d92] light:[text-shadow:none] font-rajdhani">0<Counter value={6}></Counter>+</h4>
                <p className="mt-2 text-sm light:text-gray-900 md:text-normal font-inter">TROPHIES</p>
            </div>

        </motion.div>
    </div>
  )
}

export default Banner