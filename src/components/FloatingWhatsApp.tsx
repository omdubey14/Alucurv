"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip Label */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
            className="hidden sm:block px-3.5 py-2 rounded-xl bg-[#0a0c0e]/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-xl pointer-events-none"
          >
            Chat with Alucurv Expert
          </motion.div>

          {/* WhatsApp Pulse Trigger Button */}
          <a
            href={getWhatsAppUrl(
              "Hello Alucurv team, I would like to chat about aluminium system windows and glass solutions."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
            aria-label="Chat on WhatsApp"
          >
            {/* Ripple Pulse Rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
            <MessageSquare className="w-7 h-7 relative z-10 pointer-events-none" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
