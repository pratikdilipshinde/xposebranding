"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-xpose-black px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              Start Your Project
            </p>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              READY TO MAKE
              <br />
              YOUR BRAND
              <br />
              <span className="text-xpose-red">STAND OUT?</span>
            </h2>
          </div>

          <a
            href="mailto:hello@xposebranding.in"
            className="group flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-xpose-red text-center text-xs font-bold uppercase tracking-[0.1em] text-white transition-transform duration-300 hover:scale-105 sm:h-40 sm:w-40"
          >
            <span>
              Get a Free
              <br />
              Quote
              <ArrowUpRight
                size={18}
                className="mx-auto mt-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </a>
        </motion.div>

        <div className="mt-20 border-t border-white/15 pt-6">
          <p className="text-sm text-white/40">
            Tell us what you're building. We'll help you make it visible.
          </p>
        </div>
      </div>
    </section>
  );
}