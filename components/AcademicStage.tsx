"use client";

import { AcademicStage as StageType } from "@/data/school";

interface AcademicStageProps {
  stage: StageType;
  isSelected: boolean;
  onSelect: () => void;
}

export default function AcademicStage({
  stage,
  isSelected,
  onSelect,
}: AcademicStageProps) {
  const accent = stage.accentColor || "#701A75";

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer transition-all duration-300 text-left border p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group ${
        isSelected
          ? "bg-white shadow-card border-opacity-100"
          : "border-border bg-surface hover:bg-white hover:border-border-dark"
      }`}
      style={{
        borderColor: isSelected ? accent : undefined,
      }}
    >
      {/* Top Accent Strip */}
      {isSelected && (
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: accent }}
        />
      )}

      <div>
        {/* Top Header */}
        <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-border/60">
          <span
            className="font-mono text-2xl font-light tracking-tight transition-colors"
            style={{ color: isSelected ? accent : "#64748B" }}
          >
            {stage.number}
          </span>
          <span className="text-[11px] font-mono tracking-wider uppercase text-secondary">
            {stage.grades}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium text-primary mb-2">
          {stage.title}
        </h3>

        {/* Curriculum Tag */}
        <div
          className="text-xs font-semibold mb-3 uppercase tracking-wider"
          style={{ color: accent }}
        >
          {stage.curriculum}
        </div>

        {/* One line focus */}
        <p className="text-xs text-secondary leading-relaxed font-light mb-4">
          {stage.focus}
        </p>
      </div>

      {/* Footer Indicator */}
      <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px]">
        <span
          className="font-medium"
          style={{ color: isSelected ? accent : "#64748B" }}
        >
          {isSelected ? "Active View" : "View Benchmarks & Outcomes"}
        </span>
        <span
          className="w-2.5 h-2.5 rounded-full transition-all"
          style={{
            backgroundColor: isSelected ? accent : "#CBD5E1",
            transform: isSelected ? "scale(1.2)" : "scale(1)",
          }}
        />
      </div>
    </div>
  );
}
