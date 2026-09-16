import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "@/config/company";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Alucurv Aluminium System Windows | Premium Aluminium & Glass Solutions",
  description:
    "Alucurv Aluminium System Window Pvt. Ltd. provides premium aluminium windows, doors, minimal sliding systems, curtain walls and architectural glass solutions for modern residential and commercial spaces.",
  keywords: [
    "Aluminium System Windows",
    "Minimal Sliding Doors",
    "Architectural Glass Solutions",
    "Aluminium Window Manufacturer",
    "Curtain Wall Facade",
    "Double Glazed Low-E Glass",
    "Toughened Glass Partitions",
    "Alucurv Systems",
  ],
  authors: [{ name: companyConfig.name }],
  openGraph: {
    title: "Alucurv Aluminium System Windows | Architectural Glass Solutions",
    description:
      "Engineered aluminium windows, minimal sliding doors and architectural glass systems for modern living.",
    url: "https://www.alucurv.com",
    siteName: companyConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Alucurv Premium Aluminium Windows & Glass Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alucurv Aluminium System Windows",
    description: "Premium aluminium windows, doors and architectural glass systems for modern architecture.",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0c0e] text-slate-100">
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#0a0c0e] text-slate-100 antialiased selection:bg-[#d4af37] selection:text-slate-950">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
