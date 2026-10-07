"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "DESIGN",
    text: "Creative concepts that translate your brand into a physical visual identity.",
  },
  {
    number: "02",
    title: "FABRICATION",
    text: "Precision-built signage using quality materials and modern fabrication techniques.",
  },
  {
    number: "03",
    title: "PRINTING",
    text: "High-quality large-format printing for walls, windows, boards and campaigns.",
  },
  {
    number: "04",
    title: "BRANDING",
    text: "Complete visual branding solutions designed around your business environment.",
  },
  {
    number: "05",
    title: "INSTALLATION",
    text: "Professional installation that brings your signage concept to life.",
  },
  {
    number: "06",
    title: "MAINTENANCE",
    text: "Reliable support to keep your signage looking and performing its best.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-xpose-black px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              What We Do
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              FROM IDEA
              <br />
              TO <span className="text-xpose-red">INSTALLATION.</span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
              One team. One process. From the first sketch to the final
              installation, Xpose handles every stage of your branding
              project.
            </p>
          </div>

          <div className="border-t border-white/15">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group grid gap-5 border-b border-white/15 py-7 md:grid-cols-[80px_1fr_1.2fr_40px] md:items-center"
              >
                <span className="text-xs font-bold text-xpose-red">
                  {service.number}
                </span>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/45">
                  {service.text}
                </p>

                <ArrowUpRight
                  size={21}
                  className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-xpose-red"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}