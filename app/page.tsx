"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

const RED = "#CE0028";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa] text-[#171717]">

      {/* ================= BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#111 1px, transparent 1px),
            linear-gradient(90deg, #111 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Red ambient glow */}
      <motion.div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full"
        style={{
          background: `radial-gradient(
            circle,
            ${RED}30 0%,
            ${RED}12 35%,
            transparent 70%
          )`,
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= HEADER ================= */}

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10"
      >
        {/* Actual Xpose Logo */}
        <div className="relative h-[72px] w-[250px] sm:h-[82px] sm:w-[290px]">
          <Image
            src="/logo.jpg"
            alt="Xpose Branding"
            fill
            priority
            className="object-contain object-left"
          />
        </div>

        {/* Status */}
        <div className="hidden items-center gap-3 sm:flex">
          <motion.span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: RED }}
            animate={{
              opacity: [1, 0.35, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Launching Soon
          </span>
        </div>
      </motion.header>

      {/* ================= HERO ================= */}

      <section className="relative z-10 flex min-h-[calc(100vh-115px)] items-center px-6 pb-16 pt-8 md:px-10">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ================= LEFT ================= */}

          <div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-7 flex items-center gap-3"
            >
              <span
                className="h-[2px] w-12"
                style={{ backgroundColor: RED }}
              />

              <span
                className="text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: RED }}
              >
                New Website
              </span>
            </motion.div>

            {/* Heading */}

            <div className="overflow-hidden">

              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[15vw] font-black leading-[0.82] tracking-[-0.07em] sm:text-8xl md:text-9xl lg:text-[8.5rem]"
              >
                WE
              </motion.h1>

            </div>

            <div className="overflow-hidden">

              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[15vw] font-black leading-[0.82] tracking-[-0.07em] sm:text-8xl md:text-9xl lg:text-[8.5rem]"
              >
                ARE
              </motion.h1>

            </div>

            <div className="overflow-hidden">

              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.54,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[15vw] font-black leading-[0.82] tracking-[-0.07em] sm:text-8xl md:text-9xl lg:text-[8.5rem]"
              >
                <span style={{ color: RED }}>COMING.</span>
              </motion.h1>

            </div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-9 max-w-xl text-base leading-7 text-gray-500 md:text-lg"
            >
              We’re working on something new. Our website is being
              redesigned to bring you a better Xpose Branding experience.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-8 flex flex-wrap gap-4"
            >

              <a
                href="mailto:hello@xposebranding.com"
                className="group flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
                style={{
                  backgroundColor: RED,
                  boxShadow: `0 12px 35px ${RED}30`,
                }}
              >
                <Mail size={17} />

                Get in touch

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
              >
                Follow Xpose
              </a>

            </motion.div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <div className="relative flex min-h-[430px] items-center justify-center">

            {/* Large rotating ring */}

            <motion.div
              className="absolute h-[320px] w-[320px] rounded-full border border-gray-200 md:h-[440px] md:w-[440px]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Red dot */}
              <div
                className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
                style={{ backgroundColor: RED }}
              />
            </motion.div>

            {/* Dashed ring */}

            <motion.div
              className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-gray-300 md:h-[350px] md:w-[350px]"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Central Logo */}

            <motion.div
              className="relative z-10 flex h-[210px] w-[210px] items-center justify-center rounded-full bg-white shadow-2xl md:h-[280px] md:w-[280px]"
              animate={{
                y: [-8, 8, -8],
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: `0 30px 90px ${RED}22`,
              }}
            >

              <div
                className="absolute inset-3 rounded-full border"
                style={{
                  borderColor: `${RED}30`,
                }}
              />

              <div className="relative h-[115px] w-[115px] md:h-[150px] md:w-[150px]">

                <Image
                  src="/logo.jpg"
                  alt="Xpose Branding logo"
                  fill
                  className="object-contain"
                />

              </div>

            </motion.div>

            {/* Floating Card */}

            <motion.div
              className="absolute right-0 top-4 rounded-2xl border border-white bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                We Create
              </div>

              <div className="mt-1 text-sm font-bold">
                Brands That Stand Out
              </div>
            </motion.div>

            {/* Floating Card */}

            <motion.div
              className="absolute bottom-4 left-0 rounded-2xl border border-white bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="text-xl font-black"
                style={{ color: RED }}
              >
                XP
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Branding
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-20 border-t border-gray-100"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row md:px-10">

          <p className="text-xs text-gray-400">
            © 2020 Xpose Branding. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            {/* <a
              href="#"
              className="text-gray-400 transition hover:text-[#CE0028]"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-[#CE0028]"
            >
              <Linkedin size={18} />
            </a> */}

            <a
              href="mailto:hello@xposebranding.com"
              className="text-gray-400 transition hover:text-[#CE0028]"
            >
              <Mail size={18} />
            </a>

          </div>

          <p className="text-xs text-gray-400">
            Something exciting is on the way.
          </p>

        </div>
      </motion.footer>

      {/* Bottom red accent */}

      <motion.div
        className="fixed bottom-0 left-0 z-50 h-1"
        style={{ backgroundColor: RED }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.5,
          delay: 0.4,
        }}
      />

    </main>
  );
}