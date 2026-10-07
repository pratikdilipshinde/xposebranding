"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-xpose-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/about/about-xpose.jpg"
              alt="Xpose Branding team and workshop"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 bg-xpose-red px-6 py-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.15em]">
                Xpose Branding
              </p>
              <p className="mt-1 text-sm text-white/80">
                Making brands visible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              About Xpose
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              WE DON'T JUST
              <br />
              MAKE SIGNS.
              <br />
              <span className="text-xpose-red">
                WE BUILD BRAND EXPERIENCES.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-xpose-gray">
              Xpose Branding brings together creative thinking, fabrication
              expertise and installation capabilities to help businesses
              create spaces people remember.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-xpose-gray">
              Whether it's a storefront, office, restaurant or commercial
              space, our goal is simple: make your brand impossible to ignore.
            </p>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-3 bg-xpose-black px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-xpose-red"
            >
              More About Xpose
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}