"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Sports from "./Sports";
import { school } from "@/data/school";

export default function StudentLife() {
  const { studentLife } = school;

  return (
    <section id="student-life" className="py-20 md:py-28 lg:py-32 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
                {studentLife.sectionNum}
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
                {studentLife.eyebrow}
              </span>
              <div className="flex items-center gap-1.5 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
              </div>
            </div>
            <h2 className="text-editorial-h2 font-light text-primary tracking-tight">
              {studentLife.heading}
            </h2>
          </div>
          <p className="text-sm md:text-base text-secondary max-w-md font-light leading-relaxed">
            {studentLife.lead}
          </p>
        </div>

        {/* Large Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {studentLife.activities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group border border-border rounded-2xl overflow-hidden bg-white flex flex-col justify-between hover:border-oakrich-plum hover:shadow-card transition-all duration-300"
            >
              {/* Mosaic Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={`${item.title} at The Oakrich International School`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Editorial Description & Tags */}
              <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Sub-Disciplines / Highlights */}
                <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono tracking-wider text-secondary bg-surface px-2.5 py-1 rounded-md border border-border/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrated Sports Section */}
        <Sports />
      </div>
    </section>
  );
}
