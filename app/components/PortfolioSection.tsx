"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Retail",
    category: "LED Signage",
    image: "/portfolio/project-1.jpg",
  },
  {
    title: "Corporate Identity",
    category: "Indoor Branding",
    image: "/portfolio/project-2.jpg",
  },
  {
    title: "Premium Storefront",
    category: "3D Letters",
    image: "/portfolio/project-3.jpg",
  },
  {
    title: "Restaurant Branding",
    category: "Outdoor Signage",
    image: "/portfolio/project-4.jpg",
  },
  {
    title: "Office Experience",
    category: "Wall Graphics",
    image: "/portfolio/project-5.jpg",
  },
  {
    title: "Retail Identity",
    category: "Acrylic Signage",
    image: "/portfolio/project-6.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-xpose-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              WORK THAT
              <br />
              <span className="text-xpose-red">SPEAKS FOR ITSELF.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "LED Signs", "3D Letters", "Indoor", "Outdoor"].map(
              (filter, index) => (
                <button
                  key={filter}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                    index === 0
                      ? "bg-xpose-black text-white"
                      : "bg-xpose-off-white text-xpose-gray hover:bg-xpose-red hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              href="#contact"
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-xpose-off-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-xpose-red text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-1 text-xs text-xpose-gray">
                    {project.category}
                  </p>
                </div>

                <span className="text-xs text-xpose-gray">
                  0{index + 1}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}