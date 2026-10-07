"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ========================================
          DESKTOP / MOBILE NAVBAR
      ======================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 bg-xpose-off-white">
        <nav className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between border-b border-xpose-border px-5 sm:px-8 lg:px-10">

          {/* ========================================
              LOGO
          ======================================== */}

          <a
            href=""
            className="relative z-50 flex items-center"
            aria-label="Xpose Branding Home"
          >
            <Image
              src="/logo.jpg"
              alt="Xpose Branding"
              width={180}
              height={60}
              priority
              className="h-auto w-[125px] object-contain sm:w-[145px]"
            />
          </a>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[13px] font-semibold tracking-wide text-xpose-black/65 transition-colors duration-300 hover:text-xpose-black"
              >
                {item.label}

                {/* Hover Line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-xpose-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* ========================================
              DESKTOP CTA
          ======================================== */}

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-white border-xpose-red px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-xpose-red hover:text-white rounded-2xl"
            >
              Get a Free Quote

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* ========================================
              MOBILE MENU BUTTON
          ======================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center bg-xpose-black text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      {/* ========================================
          MOBILE MENU
      ======================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 right-0 top-[82px] z-40 overflow-hidden bg-xpose-off-white lg:hidden"
          >
            <div className="border-b border-xpose-border px-5 pb-7 pt-3 sm:px-8">

              {/* Navigation Links */}
              <div className="divide-y divide-xpose-border">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    className="group flex items-center justify-between py-5 text-xl font-semibold tracking-tight text-xpose-black"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={20}
                      className="text-xpose-gray transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-xpose-red"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="mt-6 flex items-center justify-between bg-xpose-red px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                <span>Get a Free Quote</span>

                <ArrowUpRight size={19} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}