"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import {
  FaDiscord,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <motion.section
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
    duration: 1,
    ease: "easeOut",
    }}
      id="contact"
      className="relative isolate overflow-hidden bg-black light:bg-white px-4 py-20 text-[#F8FAFC] md:px-6 md:py-24 lg:py-32 xl:py-40 mt-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[15%] h-[420px] w-[560px] rounded-full bg-[#552D92]/30 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[8%] h-[380px] w-[480px] rounded-full bg-[#552D92]/20 blur-[120px]" />
      </div>

      {/* Reticle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      >
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="#A88BBD"
            strokeWidth="0.6"
          />

          <circle
            cx="200"
            cy="200"
            r="130"
            fill="none"
            stroke="#A88BBD"
            strokeWidth="0.6"
          />

          <circle
            cx="200"
            cy="200"
            r="80"
            fill="none"
            stroke="#FACC15"
            strokeWidth="0.8"
          />

          <line
            x1="200"
            y1="0"
            x2="200"
            y2="60"
            stroke="#A88BBD"
            strokeWidth="1"
          />

          <line
            x1="200"
            y1="340"
            x2="200"
            y2="400"
            stroke="#A88BBD"
            strokeWidth="1"
          />

          <line
            x1="0"
            y1="200"
            x2="60"
            y2="200"
            stroke="#A88BBD"
            strokeWidth="1"
          />

          <line
            x1="340"
            y1="200"
            x2="400"
            y2="200"
            stroke="#A88BBD"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-center">

            {/* Brand */}
            <div className="mb-10 flex items-center gap-1">
              <Image alt="logo" src={'/logo_bgr.jpg'} width={32} height={32}></Image>

              <div className="font-bold light:text-purple-500 tracking-[0.06em] font-rajdhani text-lg">
                VYRON{" "}
                <span className="text-[#FACC15] light:text-yellow-500">
                  ESPORTS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="mb-5 bg-linear-to-r from-white via-white to-[#A88BBD] light:from-purple-600 light:via-purple-400 light:to-yellow-600 bg-clip-text text-[2.4rem] font-bold leading-[1.05] text-transparent md:text-[3.2rem] lg:text-[3.6rem] font-rajdhani">
              LET&apos;S CONNECT
            </h2>

            <p className="mb-12 max-w-[440px] light:text-gray-700 text-base leading-7 text-[#B7B3C2]">
              Have a question, partnership idea, sponsorship opportunity, or
              business inquiry? We&apos;d love to hear from you.
            </p>

            {/* Contact Channels */}
            <div className="flex flex-col gap-3.5">

              {/* Email */}
              <a
                href="mailto:contact@vyronesports.gg"
                className="group flex items-center gap-4 rounded-[18px] border border-[#A88BBD]/20 light:bg-purple-500/20 bg-white/[0.03] px-5 py-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FACC15]/40 hover:bg-[#552D92]/15 hover:shadow-[0_8px_30px_-8px_rgba(85,45,146,0.6)]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#A88BBD]/30 bg-[#552D92]/35 text-[#FACC15] transition-all duration-300 group-hover:bg-[#552D92]/55 group-hover:shadow-[0_0_18px_rgba(250,204,21,0.35)]">
                  <FaEnvelope />
                </span>

                <span className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] light:text-purple-500 text-[#A88BBD]">
                    Email
                  </span>

                  <span className="text-[15px] font-medium light:text-gray-600">
                    contact@vyronesports.gg
                  </span>
                </span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/vyronesports"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[18px] border light:bg-purple-500/20 border-[#A88BBD]/20 bg-white/[0.03] px-5 py-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FACC15]/40 hover:bg-[#552D92]/15 hover:shadow-[0_8px_30px_-8px_rgba(85,45,146,0.6)]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#A88BBD]/30 bg-[#552D92]/35 text-[#FACC15] transition-all duration-300 group-hover:bg-[#552D92]/55 group-hover:shadow-[0_0_18px_rgba(250,204,21,0.35)]">
                  <FaDiscord />
                </span>

                <span className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] light:text-purple-500 text-[#A88BBD]">
                    Discord
                  </span>

                  <span className="text-[15px] font-medium light:text-gray-600">
                    discord.gg/vyronesports
                  </span>
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/vyronesports"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[18px] border border-[#A88BBD]/20 light:bg-purple-500/20 bg-white/[0.03] px-5 py-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FACC15]/40 hover:bg-[#552D92]/15 hover:shadow-[0_8px_30px_-8px_rgba(85,45,146,0.6)]"
              >
                <span className="flex size-11 shrink-0 items-center light:text-yellow-400 justify-center rounded-xl border border-[#A88BBD]/30 bg-[#552D92]/35 text-[#FACC15] transition-all duration-300 group-hover:bg-[#552D92]/55 group-hover:shadow-[0_0_18px_rgba(250,204,21,0.35)]">
                  <FaFacebookF />
                </span>

                <span className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] light:text-purple-500 text-[#A88BBD]">
                    Facebook
                  </span>

                  <span className="text-[15px] font-medium light:text-gray-600">
                    facebook.com/vyronesports
                  </span>
                </span>
              </a>

            </div>
          </div>

          {/* ================= RIGHT / FORM ================= */}
          <div className="rounded-[28px] bg-linear-to-br from-[#A88BBD]/35 via-[#552D92]/5 to-[#FACC15]/10 p-px">

            <div className="rounded-[27px] border border-white/[0.04] bg-linear-to-b from-white/[0.035] to-white/[0.015] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-[18px] md:p-8 lg:p-11">

              <h3 className="mb-1.5 text-[22px] font-bold light:text-purple-500">
                Send us a message
              </h3>

              <p className="mb-8 text-sm text-[#B7B3C2] light:text-gray-600">
                We typically respond within 1–2 business days.
              </p>

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">

                  <div className="mb-5 flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs light:text-purple-500/90 font-semibold uppercase tracking-[0.05em] text-[#A88BBD]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-[14px] border border-[#A88BBD]/20 bg-white/[0.025] light:border-purple-500/50 px-4 py-3.5 text-[15px] text-[#F8FAFC] light:text-gray-600 outline-none transition-all duration-200 placeholder:text-white/30 light:placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-[#552D92]/10 focus:shadow-[0_0_0_4px_rgba(250,204,21,0.1)]"
                    />
                  </div>

                  <div className="mb-5 flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs light:text-purple-500/90 font-semibold uppercase tracking-[0.05em] text-[#A88BBD]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-[14px] border border-[#A88BBD]/20 bg-white/[0.025] light:border-purple-500/50 px-4 py-3.5 text-[15px] text-[#F8FAFC] light:text-gray-600 outline-none transition-all duration-200 placeholder:text-white/30 light:placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-[#552D92]/10 focus:shadow-[0_0_0_4px_rgba(250,204,21,0.1)]"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mb-5 flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs light:text-purple-500/90 font-semibold uppercase tracking-[0.05em] text-[#A88BBD]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Partnership, sponsorship, general inquiry..."
                    required
                    className="w-full rounded-[14px] border border-[#A88BBD]/20 bg-white/[0.025] light:border-purple-500/50 px-4 py-3.5 text-[15px] text-[#F8FAFC] light:text-gray-600 outline-none transition-all duration-200 placeholder:text-white/30 light:placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-[#552D92]/10 focus:shadow-[0_0_0_4px_rgba(250,204,21,0.1)]"
                  />
                </div>

                {/* Message */}
                <div className="mb-5 flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs light:text-purple-500/90 font-semibold uppercase tracking-[0.05em] text-[#A88BBD]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="min-h-[120px] w-full resize-y rounded-[14px] light:text-gray-600 border border-[#A88BBD]/20 bg-white/[0.025] light:border-purple-500/50 px-4 py-3.5 text-[15px] leading-6 text-[#F8FAFC] outline-none transition-all duration-200 placeholder:text-white/30 light:placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-[#552D92]/10 focus:shadow-[0_0_0_4px_rgba(250,204,21,0.1)]"
                  />
                </div>

                {/* Submit */}

                <button type="submit" className=" flex items-center justify-center gap-2 w-full rounded-lg bg-purple-500 px-8 py-3.5 text-sm font-bold tracking-wide text-white cursor-pointer hover:bg-purple-400 duration-300 transition-all shadow-[0_0_25px_#552d92] group">
                    SEND MESSAGE <span className="transition-all duration-200 group-hover:translate-x-1"><FaArrowRight/></span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;