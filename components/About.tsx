"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { school } from "@/data/school";

export default function About() {
  const { about } = school;

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Numeral and Logo Colors */}
        <div className="flex items-center gap-4 mb-12 lg:mb-16">
          <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
            {about.sectionNum}
          </span>
          <span className="w-8 h-[1px] bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
            {about.eyebrow}
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
          </div>
        </div>

        {/* Asymmetrical 5/7 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-surface border border-border shadow-card group">
              <Image
                src={about.image || "/images/oakrich-teachers-students.png"}
                alt="Teachers and students engaged in collaborative learning and art at The Oakrich International School"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-oakrich-yellow block mb-0.5">
                  School Community
                </span>
                <span className="text-sm font-medium">
                  Inspiring Faculty & Engaged Learners
                </span>
              </div>
            </div>
            {/* Caption badge */}
            <div className="mt-4 flex items-center justify-between text-xs text-secondary border-t border-border/80 pt-3">
              <span className="font-mono text-[10px] tracking-wider uppercase">Philosophy in Action</span>
              <span className="font-medium text-primary">Inquiry • Rigor • Empathy</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-editorial-h2 font-light text-primary tracking-tight mb-6">
              {about.heading}
            </h2>

            <p className="text-lg text-primary/90 font-normal leading-relaxed mb-6">
              {about.lead}
            </p>

            <div className="space-y-4 text-base text-secondary font-light leading-relaxed mb-10">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Three Institutional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-6 border-t border-border">
              {about.pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-1.5 p-3 rounded-lg bg-surface border border-border/60">
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary flex items-center gap-1.5">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: pillar.color || "#701A75" }}
                    />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Link to Academic Journey */}
            <div>
              <a
                href="#academics"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary hover:text-oakrich-plum transition-colors group"
              >
                <span className="underline decoration-oakrich-plum underline-offset-4 font-semibold">
                  Discover our Academic Journey
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-oakrich-plum" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
