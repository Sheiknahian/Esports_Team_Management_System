'use client'
import { AiFillHome, AiFillSun } from "react-icons/ai"
import ActiveNav from "./ActiveNav"
import { FaCrosshairs, FaMedal } from "react-icons/fa"
import { RiTargetFill } from "react-icons/ri"
import { BsFillTrophyFill } from "react-icons/bs"
import { CgDetailsMore } from "react-icons/cg"
import { useEffect, useRef, useState } from "react"
import { HiUserGroup } from "react-icons/hi"
import { GrLogin } from "react-icons/gr"
import { useTheme } from "../Providers/ThemeProvider"
import { IoIosMoon } from "react-icons/io"

const MobileNav = () => {
    const {isDark, setIsDark} = useTheme()
    const [more, setMore] = useState(false)
    const moreRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (moreRef.current && !moreRef.current.contains(e.target)) {
                setMore(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [setMore]);
    return (
        <div ref={moreRef} className="w-[92%] mx-auto absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-end gap-2">
            <div className={`lg:hidden w-[82%] bg-black light:bg-white light:border-[#E5E7EB] -z-10 rounded-full border-1 border-purple-500 absolute transition-all duration-300 ${more ? 'bottom-22 opacity-100' : 'bottom-0 opacity-0 pointer-events-none'}`}>
                <div
                    className="flex justify-around py-2 px-5 cursor-pointer select-none"
                    >
                    <div onClick={() => setIsDark(!isDark)} className="w-16 light:text-[#5b24a7] aspect-square flex flex-col items-center justify-center gap-[2px] relative">

                        {/* Icon */}
                        <div className="relative w-6 h-6 flex items-center justify-center">

                            <span
                                className={`absolute text-xl transition-all duration-500 ease-out
                                ${
                                    isDark
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 rotate-180"
                                }`}
                            >
                                <AiFillSun />
                            </span>

                            <span
                                className={`absolute text-xl transition-all duration-500 ease-out
                                ${
                                    isDark
                                    ? "opacity-0 scale-0 -rotate-180"
                                    : "opacity-100 scale-100 rotate-0"
                                }`}
                            >
                                <IoIosMoon />
                            </span>

                        </div>

                        {/* Text */}
                        <div className="relative h-5.5 w-full">
                            <p
                                className={`absolute inset-0 text-[12px] font-rajdhani text-center
                                transition-all duration-400
                                ${
                                    isDark
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-2"
                                }`}
                            >
                                Light Mode
                            </p>

                            <p
                                className={`absolute inset-0 text-[12px] font-rajdhani text-center
                                transition-all duration-400
                                ${
                                    isDark
                                    ? "opacity-0 -translate-y-2"
                                    : "opacity-100 translate-y-0"
                                }`}
                            >
                                Dark Mode
                            </p>
                        </div>

                    </div>

                    <ActiveNav href={'#achivements'}>
                        <span className="text-xl"><FaMedal /></span>
                        <p className="text-[12px] font-rajdhani">Achivements</p>
                    </ActiveNav>
                    <ActiveNav href={'#contact'}>
                        <span className="text-xl"><HiUserGroup /></span>
                        <p className="text-[12px] font-rajdhani">Contact</p>
                    </ActiveNav>
                    <ActiveNav href={'/'}>
                        <span className="text-xl"><GrLogin /></span>
                        <p className="text-[12px] font-rajdhani">Login</p>
                    </ActiveNav>
                </div>
            </div>
            <div className="lg:hidden w-full bg-black light:bg-white rounded-full border-1 border-purple-500">
                <div className="flex justify-around py-2 px-5">
                    <ActiveNav href={'#home'}>
                        <span className="text-xl"><AiFillHome /></span>
                        <p className="text-[12px] font-rajdhani">Home</p>
                    </ActiveNav>
                    <ActiveNav href={'#roster'}>
                        <span className="text-xl"><FaCrosshairs /></span>
                        <p className="text-[12px] font-rajdhani">Roster</p>
                    </ActiveNav>
                    <ActiveNav href={'#matches'}>
                        <span className="text-xl"><RiTargetFill /></span>
                        <p className="text-[12px] font-rajdhani">Matches</p>
                    </ActiveNav>
                    <ActiveNav href={'#tournamnets'}>
                        <span className="text-xl"><BsFillTrophyFill /></span>
                        <p className="text-[12px] font-rajdhani">Contests</p>
                    </ActiveNav>
                    <div onClick={() => setMore(!more)} className="w-16 light:text-[#5b24a7] aspect-square flex flex-col items-center justify-center gap-[2px]">
                        <span className="text-xl"><CgDetailsMore /></span>
                        <p className="text-[12px] font-rajdhani">More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav