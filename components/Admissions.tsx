"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, CalendarCheck, Clock, Check } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { school } from "@/data/school";

export default function Admissions() {
  const { admissions } = school;

  return (
    <section id="admissions" className="py-20 md:py-28 lg:py-32 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
              {admissions.sectionNum}
            </span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
              {admissions.eyebrow}
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
              <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
            </div>
          </div>
          <h2 className="text-editorial-h2 font-light text-primary tracking-tight mb-4">
            Admissions Open {school.admissionsYear}
          </h2>
          <p className="text-base sm:text-lg text-secondary font-light leading-relaxed">
            {admissions.description}
          </p>
        </div>

        {/* 2-Column Admissions Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Process & Contact Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Admissions Steps */}
            <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-subtle">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6 pb-2 border-b border-border flex items-center justify-between">
                <span>Four-Step Enrollment Process</span>
                <span className="text-[10px] font-mono text-secondary">Pre-KG to Grade X</span>
              </h3>
              <div className="space-y-6">
                {admissions.steps.map((item, idx) => {
                  const colors = ["#701A75", "#F59E0B", "#10B981", "#2563EB"];
                  const color = colors[idx % colors.length];
                  return (
                    <div key={item.step} className="flex items-start gap-4">
                      <span
                        className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md border shrink-0"
                        style={{
                          backgroundColor: `${color}10`,
                          borderColor: `${color}30`,
                          color: color,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-secondary font-light leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Telephone Numbers Callout */}
            <div className="bg-white border border-border p-6 rounded-2xl shadow-subtle">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-oakrich-green" />
                <span>Prefer to Speak with Admissions?</span>
              </div>
              <p className="text-xs text-secondary font-light leading-relaxed mb-4">
                Our counselors are available Monday to Saturday (9:00 AM – 4:30 PM) to assist you with curriculum queries, grade placement, and campus visits.
              </p>
              <div className="flex flex-col gap-2">
                {school.phone.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num}`}
                    className="inline-flex items-center justify-between text-xs font-mono font-medium text-primary hover:text-oakrich-plum p-3 bg-surface rounded-lg border border-border hover:border-oakrich-plum transition-all"
                  >
                    <span>+91 {num}</span>
                    <span className="text-[10px] uppercase text-secondary">Call Desk</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
