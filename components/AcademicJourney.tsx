"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, GraduationCap } from "lucide-react";
import AcademicStage from "./AcademicStage";
import { school } from "@/data/school";

export default function AcademicJourney() {
  const { academics } = school;
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = academics.stages[activeStageIndex];
  const stageAccent = currentStage.accentColor || "#701A75";

  return (
    <section id="academics" className="py-20 md:py-28 lg:py-32 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
                {academics.sectionNum}
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
                {academics.eyebrow}
              </span>
              <div className="flex items-center gap-1.5 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
              </div>
            </div>
            <h2 className="text-editorial-h2 font-light text-primary tracking-tight">
              {academics.heading}
            </h2>
          </div>
          <p className="text-sm md:text-base text-secondary max-w-md font-light leading-relaxed">
            {academics.description}
          </p>
        </div>

        {/* Desktop 4-Stage Horizontal Progression Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {academics.stages.map((stage, idx) => (
            <AcademicStage
              key={stage.id}
              stage={stage}
              isSelected={activeStageIndex === idx}
              onSelect={() => setActiveStageIndex(idx)}
            />
          ))}
        </div>

        {/* Expanded Stage Detail Window */}
        <div className="bg-white border border-border rounded-2xl overflow-hidden p-6 sm:p-10 shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface border border-border shadow-sm group">
                  <Image
                    src={currentStage.image}
                    alt={`${currentStage.title} - ${currentStage.grades} at The Oakrich International School`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                    Stage {currentStage.number} • {currentStage.grades}
                  </div>
                </div>
              </div>

              {/* Right Column: Educational Rigor & Outcomes (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: stageAccent }}
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{currentStage.curriculum}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-3 tracking-tight">
                  {currentStage.title}: {currentStage.focus}
                </h3>

                <p className="text-secondary font-light text-base leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                {/* Key Outcomes Checklist */}
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">
                    Curriculum Benchmarks & Pedagogy:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.keyOutcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-primary/90 font-light">
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: stageAccent }}
                        />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admissions CTA Link */}
                <div className="flex items-center gap-6 pt-4 border-t border-border">
                  <a
                    href="#admissions"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity"
                    style={{ color: stageAccent }}
                  >
                    <span>Enquire for {currentStage.title} Admissions</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-secondary font-light hidden sm:inline">
                    Academic Year {school.admissionsYear}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
