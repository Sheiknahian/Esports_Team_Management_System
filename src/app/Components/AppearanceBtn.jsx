import { useState } from "react"
import { AiFillSun } from "react-icons/ai"
import { IoIosMoon } from "react-icons/io"
import { useTheme } from "../Providers/ThemeProvider"

const AppearanceBtn = () => {
    const {isDark, setIsDark} = useTheme()
    return (
        <div
            onClick={() => setIsDark(!isDark)}
            className="w-18 h-10 bg-purple-500 rounded-full relative cursor-pointer"
            >
            <div
                className={`w-8 h-8 bg-white rounded-full text-black text-xl flex justify-center items-center absolute left-1 top-1 transition-all duration-300 ${
                isDark ? "" : "translate-x-8"
                }`}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <IoIosMoon
                        className={`absolute transition-all duration-500 ${
                            isDark
                            ? "scale-100 rotate-0"
                            : "scale-0 rotate-180"
                        }`}
                    />

                    <AiFillSun
                        className={`absolute transition-all duration-500 ${
                            isDark
                            ? "scale-0 -rotate-180"
                            : "scale-100 rotate-0"
                        }`}
                    />
                </div>
            </div>
        </div>
  )
}

export default AppearanceBtn