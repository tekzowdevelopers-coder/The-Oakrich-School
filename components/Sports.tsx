"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Activity, Target } from "lucide-react";
import { school } from "@/data/school";

export default function Sports() {
  const { sports } = school.studentLife;

  return (
    <div className="mt-20 pt-16 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Sports Philosophy & Disciplines (7 cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            <Trophy className="w-4 h-4 text-accent" />
            <span>Athletics & Physical Culture</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-light text-primary tracking-tight mb-4">
            {sports.heading}
          </h3>

          <p className="text-secondary font-light text-base leading-relaxed mb-8">
            {sports.description}
          </p>

          {/* Disciplines Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sports.disciplines.map((sport) => (
              <div
                key={sport}
                className="flex items-center gap-2.5 p-3 bg-surface border border-border rounded-sm hover:border-accent transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-medium text-primary tracking-wide">
                  {sport}
                </span>
              </div>
            ))}
          </div>

          {/* Athletic Credo */}
          <div className="mt-8 p-4 bg-surface-subtle border-l-2 border-accent text-xs text-secondary font-light">
            Oakrich athletic coaching focuses on discipline, tactical endurance, and honorable sportsmanship under certified NIS / state coaches.
          </div>
        </div>

        {/* Right Column: Sports Photography (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-sm">
            <Image
              src={sports.image}
              alt="Track, field and team sports at The Oakrich International School"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex justify-between items-end">
              <span className="font-mono text-[10px] tracking-widest uppercase">Outdoor Arena & Courts</span>
              <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-sm text-[10px]">Hosur Campus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
