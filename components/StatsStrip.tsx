"use client";

import { motion } from "framer-motion";
import { BookOpen, Compass, Award, Bus } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Dual Curriculum Hybrid",
    subtitle: "ICSE Rigor + Cambridge Primary Inquiry",
    color: "#701A75",
    bg: "bg-oakrich-plum/10",
  },
  {
    icon: Compass,
    title: "Holistic Student Life",
    subtitle: "Performing Arts, Abacus, Chess & Sports",
    color: "#10B981",
    bg: "bg-oakrich-green/10",
  },
  {
    icon: Award,
    title: "18+ Years Leadership",
    subtitle: "Experienced Pedagogical Mentors",
    color: "#F59E0B",
    bg: "bg-oakrich-yellow/10",
  },
  {
    icon: Bus,
    title: "Dedicated GPS Fleet",
    subtitle: "Safe Hosur-wide Transport Routes",
    color: "#2563EB",
    bg: "bg-oakrich-blue/10",
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-surface border-b border-border py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-center gap-3.5 p-3 rounded-lg bg-white border border-border/80 shadow-subtle hover:border-oakrich-plum/40 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${feat.color}15`, color: feat.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary tracking-wide">
                    {feat.title}
                  </div>
                  <div className="text-[11px] text-secondary font-light">
                    {feat.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
