"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Map } from "lucide-react";
import { companyConfig, getWhatsAppUrl } from "@/config/company";
import { CallbackFormData } from "@/types";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: "",
    phone: "",
    projectType: "Aluminium System Windows",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#0c0f13] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
            [ GET IN TOUCH ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            CONNECT WITH <span className="metallic-text">ALUCURVE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Visit our experience showroom, call our technical office, or request a quick call-back from an architectural engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Maps */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Information Cards */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121519] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold uppercase text-white tracking-wider mb-4 border-b border-white/10 pb-3">
                Corporate Office & Showroom
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Headquarters Address</div>
                  <div className="text-xs sm:text-sm font-light text-slate-200 mt-0.5 leading-relaxed">
                    {companyConfig.address.full}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Direct Phone</div>
                  <a
                    href={`tel:${companyConfig.phoneRaw}`}
                    className="text-sm font-semibold text-slate-100 hover:text-[#d4af37] transition-colors"
                  >
                    {companyConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">WhatsApp Desk</div>
                  <a
                    href={getWhatsAppUrl("Hello Alucurve team, I would like to get in touch.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:underline"
                  >
                    {companyConfig.whatsappFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Email Inquiry</div>
                  <a
                    href={`mailto:${companyConfig.email}`}
                    className="text-sm font-semibold text-slate-100 hover:text-[#d4af37] transition-colors"
                  >
                    {companyConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Showroom Hours</div>
                  <div className="text-xs font-light text-slate-300 mt-0.5">
                    Mon–Sat: {companyConfig.businessHours.weekdays} <br />
                    Sun: {companyConfig.businessHours.sunday}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps External Button */}
            <a
              href={companyConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all flex items-center justify-between text-xs text-slate-300 group"
            >
              <div className="flex items-center gap-3">
                <Map className="w-4 h-4 text-[#d4af37]" />
                <span>Open Location in Google Maps</span>
              </div>
              <span className="text-[#d4af37] group-hover:translate-x-1 transition-transform">→</span>
            </a>

          </div>

          {/* Right Column: Interactive Callback Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#181c22] border border-white/10 shadow-2xl relative">
              <div className="text-xs font-mono uppercase text-[#d4af37] mb-2">[ FAST RESPONSE ]</div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-2">
                REQUEST A CALLBACK
              </h3>
              <p className="text-slate-400 text-xs font-light mb-8">
                Fill in your details and an Alucurve technical specialist will contact you within 2 business hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold uppercase text-white">Callback Request Received</h4>
                  <p className="text-xs text-slate-300 font-light">
                    Thank you, {formData.name}. Our technical engineer will call you shortly at {formData.phone}.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(
                        `*New Website Callback Request*\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Project Type: ${formData.projectType}\n• City: ${formData.city || "Not specified"}\n• Message: ${formData.message || "None"}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp Desk</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", projectType: "Aluminium System Windows", city: "", message: "" });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 text-xs font-semibold text-white uppercase hover:bg-white/15 transition-all"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-4 py-3 rounded-lg bg-[#121519] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#121519] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#121519] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      >
                        <option>Aluminium System Windows</option>
                        <option>Minimal Sliding Doors</option>
                        <option>Curtain Wall Facade</option>
                        <option>Architectural Glass Work</option>
                        <option>Full Villa Fenestration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Project Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Mumbai, NCR, Pune"
                        className="w-full px-4 py-3 rounded-lg bg-[#121519] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      Message / Project Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share approximate dimensions, floor elevations, or architectural requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-[#121519] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#d4af37] text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-yellow-400 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Callback Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
