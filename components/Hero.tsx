"use client";

import Image from "next/image";
import { ArrowRight, MessageSquare, Phone, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { school } from "@/data/school";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white border-b border-border">
      {/* Subtle Logo-Color Ambient Glows (Very Soft & Clean) */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-oakrich-plum/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-oakrich-yellow/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Eyebrow Pill with Logo Dots */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs shadow-sm">
            {/* 4 dots reflecting the Oakrich logo tree */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-oakrich-plum animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-oakrich-yellow" />
              <span className="w-2 h-2 rounded-full bg-oakrich-green" />
              <span className="w-2 h-2 rounded-full bg-oakrich-blue" />
            </div>
            <span className="font-semibold text-primary tracking-wide text-[11px] sm:text-xs">
              Admissions Open 2026–2027
            </span>
            <span className="text-secondary/40 font-light">•</span>
            <span className="text-secondary font-medium text-[11px] sm:text-xs hidden sm:inline">
              ICSE Affiliated • Hosur Campus
            </span>
          </div>
        </motion.div>

        {/* Hero Grid: Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Editorial Narrative (6.5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-oakrich-plum mb-3 flex items-center gap-2">
              <span>The Oakrich International School</span>
            </div>

            {/* Headline */}
            <h1 className="text-editorial-hero font-light text-primary tracking-tight mb-6">
              Where curiosity <br />
              <span className="font-normal italic">becomes</span>{" "}
              <span className="font-semibold text-oakrich-plum relative inline-block">
                confidence.
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-oakrich-plum via-oakrich-yellow to-oakrich-green rounded-full opacity-80" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl mb-8 font-light">
              A premier institution in Hosur combining the academic rigor of the{" "}
              <strong className="text-primary font-medium">ICSE curriculum</strong> with the hands-on inquiry of{" "}
              <strong className="text-primary font-medium">Cambridge Primary</strong>. Inspiring children from Pre-KG to
              Grade X through future-ready laboratories, chess, arts, and value-based leadership.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* WhatsApp Primary CTA */}
              <a
                href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent("Hello! I would like to enquire about admission at The Oakrich International School for 2026-2027.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-oakrich-plum hover:bg-oakrich-plumDark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 rounded-md shadow-md hover:shadow-hover group"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Enquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Admissions Anchor CTA */}
              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-primary text-xs sm:text-sm font-medium tracking-wider uppercase hover:border-oakrich-plum hover:text-oakrich-plum transition-all duration-200 rounded-md bg-surface/70"
              >
                <span>View Admissions Form</span>
              </a>
            </div>

            {/* Direct Telephone Helpline Callout */}
            <div className="flex items-center gap-4 text-xs text-secondary pt-4 border-t border-border/70">
              <div className="flex items-center gap-2 text-primary font-medium">
                <div className="w-6 h-6 rounded-full bg-oakrich-greenLight flex items-center justify-center text-oakrich-green">
                  <Phone className="w-3 h-3" />
                </div>
                <span>Admissions Helpline:</span>
              </div>
              <a
                href={`tel:${school.primaryPhone}`}
                className="font-mono font-semibold text-primary hover:text-oakrich-plum transition-colors underline decoration-border"
              >
                +91 {school.primaryPhone}
              </a>
              <span className="text-[11px] text-secondary/60 hidden sm:inline">• Mon–Sat 9AM–4:30PM</span>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Visual Composition (5.5-6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Campus Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-border shadow-card group">
              {/* Actual Campus Building & Bus Fleet Image */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-surface">
                <Image
                  src="/images/oakrich-campus-building.png"
                  alt="The Oakrich International School campus building and student transport fleet in Hosur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Campus Identity Badge */}
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-90 block text-oakrich-yellow">
                      Official Campus • Hosur
                    </span>
                    <h2 className="text-base sm:text-lg font-medium tracking-tight text-white">
                      The Oakrich International School
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30">
                    Pre-KG to Grade X
                  </span>
                </div>
              </div>

              {/* Bottom Strip on Card: Bus Fleet & Safety */}
              <div className="p-4 bg-surface/90 border-t border-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <ShieldCheck className="w-4 h-4 text-oakrich-green shrink-0" />
                  <span className="text-[11px] sm:text-xs">GPS-Tracked Bus Fleet with Lady Attendants</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-secondary px-2 py-0.5 bg-white rounded border border-border">
                  100% CCTV Safe
                </span>
              </div>
            </div>

            {/* Floating Card 1: Students Playing Chess (Top Right / Offset) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -top-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-border p-2.5 rounded-xl shadow-lg hidden sm:flex items-center gap-3 max-w-[240px] hover:border-oakrich-plum transition-all"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-border">
                <Image
                  src="/images/oakrich-students-chess.png"
                  alt="Oakrich students playing chess"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-oakrich-blue font-semibold">
                  Mind Sports
                </span>
                <span className="text-xs font-semibold text-primary leading-tight">
                  Chess & Logic Labs
                </span>
                <span className="text-[10px] text-secondary">Strategic Focus</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Kindergarten Children (Bottom Left / Offset) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="absolute -bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-border p-2.5 rounded-xl shadow-lg hidden sm:flex items-center gap-3 max-w-[250px] hover:border-oakrich-yellow transition-all"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-border">
                <Image
                  src="/images/oakrich-kindergarten-play.png"
                  alt="Kindergarten play at Oakrich"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-oakrich-yellow font-semibold">
                  Early Childhood
                </span>
                <span className="text-xs font-semibold text-primary leading-tight">
                  Montessori & Cambridge
                </span>
                <span className="text-[10px] text-secondary">Sensory Discovery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 4 Clean Minimal Trust Metrics Underneath */}
        <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {school.stats.map((stat, idx) => (
            <div key={stat.label} className="flex items-start gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: stat.dot || "#701A75" }}
              />
              <div>
                <div className="text-2xl sm:text-3xl font-light text-primary tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-primary mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-secondary font-light">
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
