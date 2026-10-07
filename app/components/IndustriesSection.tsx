"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  "Retail",
  "Restaurants",
  "Corporate",
  "Healthcare",
  "Real Estate",
  "Hospitality",
  "Education",
  "Salons & Spas",
];

export default function IndustriesSection() {
  return (
    <section className="bg-xpose-red px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Industries
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              BUILT FOR
              <br />
              BUSINESS.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/70">
            Every industry has a different environment, audience and brand
            language. We create signage that fits the way your business works.
          </p>
        </div>

        <div className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.a
              key={industry}
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex items-center justify-between border-b border-white/20 py-7 sm:border-r sm:px-5 lg:px-6"
            >
              <span className="text-lg font-medium">{industry}</span>

              <ArrowUpRight
                size={19}
                className="text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}