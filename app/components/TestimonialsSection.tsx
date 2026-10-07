"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Xpose understood what we wanted and translated the idea into signage that completely changed the look of our space.",
    name: "Client Name",
    company: "Business Name",
  },
  {
    quote:
      "From design to installation, the entire process was professional and smooth. The final result exceeded our expectations.",
    name: "Client Name",
    company: "Business Name",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-xpose-off-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-xpose-red">
            Client Stories
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            TRUSTED BY BUSINESSES
            <br />
            THAT WANT TO <span className="text-xpose-red">STAND OUT.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-xpose-border bg-white p-8 sm:p-10"
            >
              <Quote size={30} className="text-xpose-red" />

              <p className="mt-8 text-xl leading-8 tracking-tight text-xpose-black sm:text-2xl">
                “{testimonial.quote}”
              </p>

              <div className="mt-10 border-t border-xpose-border pt-5">
                <p className="text-sm font-bold">{testimonial.name}</p>
                <p className="mt-1 text-xs text-xpose-gray">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}