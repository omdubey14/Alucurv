"use client";

import React from "react";
import { MessageSquare, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { companyConfig, getWhatsAppUrl } from "@/config/company";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050608] text-slate-400 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-[0.2em] text-white">ALUCURVE</span>
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#d4af37] uppercase">
                System Window Pvt. Ltd.
              </span>
            </div>
            <p className="text-xs text-[#d4af37] font-mono uppercase tracking-wider">
              {companyConfig.tagline}
            </p>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              {companyConfig.description}
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Alucurve, I am visiting your website footer and would like to connect.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4 border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {["Home", "About", "Products", "Projects", "Why Alucurve", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions List */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4 border-b border-white/10 pb-2">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>Aluminium Windows</li>
              <li>Minimal Sliding Doors</li>
              <li>Casement Windows</li>
              <li>Curtain Wall Facades</li>
              <li>Toughened Glass Work</li>
              <li>Acoustic Partitions</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4 border-b border-white/10 pb-2">
              Reach Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>{companyConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>{companyConfig.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#d4af37] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
