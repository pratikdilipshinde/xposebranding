import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xposebranding.in"),

  title: {
    default: "Xpose Branding | Signage & Branding Solutions",
    template: "%s | Xpose Branding",
  },

  description:
    "Xpose Branding creates premium signage, LED signs, 3D lettering, acrylic signage, indoor branding, wall graphics and visual branding solutions for businesses across India and the USA.",

  keywords: [
    "Xpose Branding",
    "signage company",
    "signage solutions",
    "LED signage",
    "LED sign boards",
    "3D letters",
    "3D signage",
    "acrylic signage",
    "indoor branding",
    "outdoor signage",
    "wall graphics",
    "business signage",
    "retail signage",
    "corporate branding",
    "visual branding",
  ],

  authors: [
    {
      name: "Xpose Branding",
      url: "https://xposebranding.in",
    },
  ],

  creator: "Xpose Branding",
  publisher: "Xpose Branding",

  applicationName: "Xpose Branding",

  alternates: {
    canonical: "https://xposebranding.in",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xposebranding.in",
    siteName: "Xpose Branding",

    title: "Xpose Branding | Signage & Branding Solutions",

    description:
      "Premium signage, LED signs, 3D lettering and visual branding solutions designed to make your brand impossible to ignore.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xpose Branding - Signage & Branding Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Xpose Branding | Signage & Branding Solutions",

    description:
      "Premium signage, LED signs, 3D lettering and visual branding solutions by Xpose Branding.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}