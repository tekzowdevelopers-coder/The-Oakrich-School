"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Bus, Users, HeartHandshake } from "lucide-react";
import { school } from "@/data/school";

const safetyPillars = [
  {
    icon: ShieldCheck,
    title: "24/7 CCTV & Manned Entrances",
    description: "High-definition camera coverage across corridors, gates, and vulnerable perimeters with strict visitor badge verification.",
    color: "#10B981",
  },
  {
    icon: Bus,
    title: "GPS-Enabled Transport Fleet",
    description: "Real-time satellite tracking, CCTV camera recording inside buses, and dedicated emergency SOS protocols across Hosur.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Mandatory Lady Attendant on Buses",
    description: "Every school bus route is staffed by a trained female attendant to ensure safe boarding, travel care, and prompt drop-off.",
    color: "#701A75",
  },
  {
    icon: HeartHandshake,
    title: "Child Safety & Wellbeing Education",
    description: "Age-appropriate training on personal boundaries, digital safety, POCSO guidelines, and emotional wellbeing.",
    color: "#2563EB",
  },
];

export default function Safety() {
  const { safety } = school;

  return (
    <section className="py-20 md:py-28 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
              {safety.sectionNum}
            </span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
              {safety.eyebrow}
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
            </div>
          </div>
          <h2 className="text-editorial-h2 font-light text-primary tracking-tight mb-4">
            {safety.heading}
          </h2>
          <p className="text-base text-secondary font-light leading-relaxed">
            {safety.lead}
          </p>
        </div>

        {/* Asymmetrical Content: Fleet Visual & Trust Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          {/* Real Campus Fleet Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-border shadow-card group">
              <Image
                src="/images/oakrich-campus-building.png"
                alt="Fleet of yellow Oakrich school buses parked in front of the modern campus building"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-oakrich-yellow block mb-0.5">
                  Official Transport Fleet
                </span>
                <span className="text-sm font-medium">
                  Covering Hosur & Surrounding Residential Hubs
                </span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {safetyPillars.map((point, idx) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border border-border p-6 rounded-xl shadow-subtle flex flex-col justify-between hover:border-oakrich-plum/40 transition-colors"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                      style={{
                        backgroundColor: `${point.color}12`,
                        borderColor: `${point.color}30`,
                        color: point.color,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-primary mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs text-secondary font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 text-[10px] font-mono uppercase tracking-wider text-secondary flex items-center justify-between">
                    <span>Protocol 0{idx + 1}</span>
                    <span className="text-oakrich-green font-medium">Active Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
