"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "BUILT FOR YOUR BRAND",
    text: "Every project starts with understanding your business, your space and your audience.",
  },
  {
    number: "02",
    title: "QUALITY FIRST",
    text: "We focus on materials, construction and finishing that hold up in the real world.",
  },
  {
    number: "03",
    title: "ATTENTION TO DETAIL",
    text: "From typography to installation, every detail contributes to the final experience.",
  },
  {
    number: "04",
    title: "END-TO-END SERVICE",
    text: "Design, production, printing, installation and support under one roof.",
  },
];

export default function WhyXpose() {
  return (
    <section className="bg-xpose-off-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              The Xpose Difference
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              WHY
              <br />
              <span className="text-xpose-red">XPOSE?</span>
            </h2>
          </div>

          <div className="border-t border-xpose-border">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid gap-5 border-b border-xpose-border py-8 md:grid-cols-[70px_1fr_1fr_30px] md:items-center"
              >
                <span className="text-xs font-bold text-xpose-red">
                  {reason.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight">
                  {reason.title}
                </h3>

                <p className="text-sm leading-6 text-xpose-gray">
                  {reason.text}
                </p>

                <ArrowUpRight
                  size={19}
                  className="text-xpose-gray transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-xpose-red"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}