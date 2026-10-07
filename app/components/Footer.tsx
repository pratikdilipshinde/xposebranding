import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-xpose-white px-5 pb-8 pt-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-xpose-border pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <div>
            <Image
              src="/logo.jpg"
              alt="Xpose Branding"
              width={180}
              height={60}
              className="h-auto w-[145px] object-contain"
            />

            <p className="mt-6 max-w-sm text-sm leading-6 text-xpose-gray">
              We make brands visible through signage, branding and visual
              experiences built for real spaces.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-xpose-gray">
              Explore
            </p>

            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm font-medium"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-xpose-gray">
              Connect
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@xposebranding.in"
                className="hover:text-xpose-red"
              >
                hello@xposebranding.in
              </a>

              <a href="tel:+919999999999" className="hover:text-xpose-red">
                +91 98220 15900
              </a>

              
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-xpose-gray sm:flex-row sm:items-center sm:justify-between">
          <p>© 2020 Xpose Branding. All rights reserved.</p>

          <p>Signage · Branding · Visual Experiences</p>
        </div>
      </div>
    </footer>
  );
}