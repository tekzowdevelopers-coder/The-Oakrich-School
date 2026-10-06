"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";
import { school } from "@/data/school";

export default function Leadership() {
  const { leadership } = school;
  const { profile } = leadership;

  return (
    <section id="leadership" className="py-20 md:py-28 lg:py-32 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
            {leadership.sectionNum}
          </span>
          <span className="w-8 h-[1px] bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
            {leadership.eyebrow}
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
          </div>
        </div>

        {/* Leadership Profile: Asymmetric Editorial Layout */}
        <div className="bg-white border border-border rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Portrait & Credentials (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-surface border border-border shadow-sm group">
                <Image
                  src={profile.image}
                  alt={`${profile.name}, ${profile.role} at The Oakrich International School`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Verified Credentials Box */}
              <div className="mt-5 p-4 bg-surface rounded-xl border border-border text-xs">
                <div className="text-[10px] uppercase font-mono tracking-wider text-secondary">
                  Institutional Role
                </div>
                <div className="font-semibold text-primary mt-0.5">{profile.role}</div>
                <div className="text-secondary mt-1">{profile.credentials}</div>
                <div className="text-oakrich-plum font-semibold mt-1">{profile.experience}</div>
              </div>
            </motion.div>

            {/* Right Column: Bio, Vision & Honors (8 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-oakrich-plum mb-2">
                  Institutional Leadership & Stewardship
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-primary tracking-tight mb-2">
                  {profile.name}
                </h2>
                <div className="text-sm font-medium text-secondary mb-6 pb-6 border-b border-border">
                  {profile.role} • {profile.credentials}
                </div>

                {/* Editorial Quote */}
                <div className="relative pl-6 py-3 border-l-2 border-oakrich-plum mb-8 bg-surface p-4 rounded-r-xl">
                  <Quote className="w-5 h-5 text-oakrich-plum/40 absolute -top-1 left-2" />
                  <p className="text-base sm:text-lg italic text-primary font-normal leading-relaxed">
                    &ldquo;{profile.quote}&rdquo;
                  </p>
                </div>

                {/* Bio text */}
                <p className="text-secondary font-light text-base leading-relaxed mb-8">
                  {profile.bio}
                </p>
              </div>

              {/* Honors & Recognitions: Restrained Vertical List */}
              <div className="pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-oakrich-yellow" />
                  <span>Selected Institutional Honors & Pedagogical Recognitions</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.recognitions.map((honor, i) => (
                    <li
                      key={i}
                      className="text-xs text-secondary flex items-start gap-2.5 font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum mt-1.5 shrink-0" />
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
