"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="bg-xpose-off-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between border-b border-xpose-border pb-6">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              Featured Project
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              BUILT TO BE SEEN.
            </h2>
          </div>

          <span className="hidden text-sm text-xpose-gray sm:block">
            01 / Featured
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-[24px] bg-xpose-black lg:grid-cols-[1.4fr_0.6fr]"
        >
          <div className="relative min-h-[420px] lg:min-h-[650px]">
            <Image
              src="/projects/featured-project.jpg"
              alt="Xpose Branding featured signage project"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="flex flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
                Retail Branding
              </p>

              <h3 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                A STOREFRONT
                <br />
                THAT DEMANDS
                <br />
                ATTENTION.
              </h3>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
                Complete exterior branding combining illuminated signage,
                dimensional lettering and architectural detailing.
              </p>
            </div>

            <div className="mt-12">
              <div className="mb-6 grid grid-cols-2 gap-6 border-t border-white/15 pt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                    Scope
                  </p>
                  <p className="mt-2 text-sm">Design + Fabrication</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                    Location
                  </p>
                  <p className="mt-2 text-sm">India</p>
                </div>
              </div>

              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em]"
              >
                View Project
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-xpose-red">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}