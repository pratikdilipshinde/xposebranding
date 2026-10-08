"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";

const RED = "#CE0028";

const slides = [
  {
    id: 1,
    eyebrow: "SIGNAGE & BRANDING",
    title: "MAKE YOUR",
    highlight: "BRAND",
    ending: "IMPOSSIBLE TO IGNORE.",
    description:
      "Premium signage and visual branding solutions designed to make your business stand out.",
    image: "/hero/hero-1.jpg",
    label: "01",
  },
  {
    id: 2,
    eyebrow: "LED SIGNAGE",
    title: "LIGHT UP",
    highlight: "YOUR BRAND",
    ending: "AFTER DARK.",
    description:
      "Create powerful first impressions with custom illuminated signage built around your identity.",
    image: "/hero/hero-2.jpg",
    label: "02",
  },
  {
    id: 3,
    eyebrow: "3D LETTERING",
    title: "GIVE YOUR",
    highlight: "BRAND",
    ending: "A NEW DIMENSION.",
    description:
      "Premium dimensional lettering that gives your storefront, office or space a distinctive identity.",
    image: "/hero/hero-3.jpg",
    label: "03",
  },
  {
    id: 4,
    eyebrow: "INDOOR BRANDING",
    title: "TURN YOUR",
    highlight: "SPACE",
    ending: "INTO AN EXPERIENCE.",
    description:
      "Transform interiors into memorable brand environments that people remember.",
    image: "/hero/hero-4.jpg",
    label: "04",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];

  /* ========================================
     AUTO CAROUSEL
  ======================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-xpose-off-white pt-[82px]">
      <div className="mx-auto max-w-[1440px] px-4 pb-6 pt-4 sm:px-6 lg:px-8 lg:pb-8 lg:pt-6">

        {/* ========================================
            HERO CAROUSEL
        ======================================== */}

        <div className="relative min-h-[calc(100vh-120px)] overflow-hidden rounded-[28px] bg-xpose-black sm:rounded-[36px] lg:min-h-[720px]">

          {/* ========================================
              BACKGROUND IMAGE
          ======================================== */}

          <AnimatePresence mode="sync">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={`${slide.eyebrow} - Xpose Branding`}
                fill
                priority={current === 0}
                className="object-cover"
                sizes="100vw"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/5" />

              {/* Red Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    90deg,
                    rgba(11,11,12,0.85) 0%,
                    rgba(11,11,12,0.45) 40%,
                    rgba(11,11,12,0.15) 75%,
                    rgba(11,11,12,0.4) 100%
                  )`,
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* ========================================
              DECORATIVE GRID
          ======================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* ========================================
              CONTENT
          ======================================== */}

          <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col justify-between p-7 sm:p-10 lg:min-h-[720px] lg:p-14 xl:p-16">

            {/* TOP ROW */}

            <div className="flex items-center justify-between">

              {/* Eyebrow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: RED }}
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
                    {slide.eyebrow}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Slide Number */}
              <div className="flex items-center gap-3 text-white">
                <span className="text-sm font-medium">
                  {slide.label}
                </span>

                <span className="text-white/30">/</span>

                <span className="text-sm text-white/40">
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="max-w-[850px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  {/* Heading */}

                  <h1 className="max-w-4xl text-[clamp(3.2rem,7vw,7.5rem)] font-black leading-[0.88] tracking-[-0.055em] text-white">

                    {slide.title}

                    <br />

                    <span
                      className="relative inline-block"
                      style={{ color: RED }}
                    >
                      {slide.highlight}

                      {/* Red underline
                      <span
                        className="absolute -bottom-2 left-0 h-[4px] w-[65%] rounded-full sm:-bottom-3 sm:h-[6px]"
                        style={{ backgroundColor: RED }}
                      /> */}
                    </span>

                    <br />

                    {slide.ending}
                  </h1>

                  {/* Description */}

                  <p className="mt-7 max-w-xl text-sm leading-6 text-white/65 sm:mt-8 sm:text-base sm:leading-7 lg:text-lg">
                    {slide.description}
                  </p>

                  {/* CTA */}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <a
                      href="#contact"
                      className="group flex items-center rounded-2xl text-white justify-center gap-3 bg-xpose-red px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-xpose-deep-red sm:px-7"
                    >
                      Get a Free Quote

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>

                    <a
                      href="#portfolio"
                      className="group flex items-center rounded-2xl text-white justify-center gap-3 border border-white/30 bg-transparent px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-xpose-black sm:px-7"
                    >
                      Explore Our Work

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ========================================
                BOTTOM CONTROLS
            ======================================== */}

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

              {/* Scroll Indicator */}

              <a
                href="#products"
                className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:text-white sm:flex"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                  <ChevronDown size={14} />
                </span>

                Explore Xpose
              </a>

              {/* Carousel Controls */}

              <div className="flex items-center justify-between gap-6 sm:gap-8">

                {/* Progress */}

                <div className="flex items-center gap-2">

                  {slides.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className="group relative h-[2px] w-10 overflow-hidden bg-white/20 sm:w-14"
                    >
                      {index === current && (
                        <motion.span
                          layoutId="activeProgress"
                          className="absolute inset-y-0 left-0 bg-xpose-red"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 5.8,
                            ease: "linear",
                          }}
                        />
                      )}
                    </button>
                  ))}

                </div>

                {/* Arrows */}

                <div className="flex items-center gap-2">

                  <button
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-xpose-red hover:bg-xpose-red"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-xpose-red hover:bg-xpose-red"
                  >
                    <ArrowRight size={17} />
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              RED CORNER ACCENT
          ======================================== */}

          <div
            className="absolute bottom-0 right-0 h-1 w-32 sm:w-48"
            style={{ backgroundColor: RED }}
          />

        </div>
      </div>
    </section>
  );
}