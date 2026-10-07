"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    number: "01",
    title: "LED SIGN BOARDS",
    description:
      "High-impact illuminated signage designed to make your storefront impossible to miss.",
    image: "/products/led-signage.jpg",
  },
  {
    number: "02",
    title: "3D LETTERS",
    description:
      "Dimensional lettering crafted to give your brand depth, character and presence.",
    image: "/products/3d-letters.jpg",
  },
  {
    number: "03",
    title: "ACRYLIC SIGNAGE",
    description:
      "Clean, contemporary acrylic signage for offices, retail and premium spaces.",
    image: "/products/acrylic-signage.jpg",
  },
  {
    number: "04",
    title: "LED CLIP-ON BOARDS",
    description:
      "Flexible illuminated branding solutions built for changing campaigns and promotions.",
    image: "/products/led-clip-board.jpg",
  },
  {
    number: "05",
    title: "GLASS FILM",
    description:
      "Transform glass surfaces with privacy films, graphics and branded applications.",
    image: "/products/glass-film.jpg",
  },
  {
    number: "06",
    title: "WALL GRAPHICS",
    description:
      "Large-format visual branding that transforms ordinary walls into brand experiences.",
    image: "/products/wall-graphics.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-xpose-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 border-b border-xpose-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
              What We Make
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              SIGNAGE THAT
              <br />
              <span className="text-xpose-red">GETS NOTICED.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-xpose-gray">
            From illuminated storefronts to detailed indoor branding, we
            create physical brand experiences built to be seen.
          </p>
        </div>

        {/* Products */}
        <div className="grid gap-px bg-xpose-border md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.a
              href="#contact"
              key={product.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-xpose-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-xpose-off-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center bg-white text-xs font-bold text-xpose-black">
                  {product.number}
                </div>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-xpose-red text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-xpose-gray">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                  View Product
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}