"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandIntro() {
  return (
    <section
      id="about"
      className="bg-xpose-off-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              Who We Are
            </p>

            <div className="h-px w-20 bg-xpose-red" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-xpose-black sm:text-5xl lg:text-7xl">
              WE MAKE BRANDS
              <br />
              <span className="text-xpose-red">VISIBLE.</span>
            </h2>

            <div className="mt-10 flex flex-col gap-8 border-t border-xpose-border pt-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-7 text-xpose-gray sm:text-lg">
                From storefronts to interiors, Xpose Branding creates
                signage and visual branding solutions that turn spaces into
                powerful brand experiences.
              </p>

              <a
                href="#products"
                className="group flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-xpose-black"
              >
                Discover Xpose
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-xpose-black text-white transition-all duration-300 group-hover:bg-xpose-red">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}