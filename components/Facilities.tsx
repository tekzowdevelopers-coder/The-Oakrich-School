"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { school } from "@/data/school";

export default function Facilities() {
  const { facilities } = school;

  return (
    <section id="campus" className="py-20 md:py-28 lg:py-32 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
                {facilities.sectionNum}
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
                {facilities.eyebrow}
              </span>
              <div className="flex items-center gap-1.5 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
                <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
              </div>
            </div>
            <h2 className="text-editorial-h2 font-light text-primary tracking-tight">
              {facilities.heading}
            </h2>
          </div>
          <p className="text-sm md:text-base text-secondary max-w-md font-light leading-relaxed">
            {facilities.lead}
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.items.map((facility, idx) => {
            const isTall = facility.size === "tall";
            const isLarge = facility.size === "large";

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group relative flex flex-col justify-between border border-border bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-oakrich-plum hover:shadow-card ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container with Editorial Crop */}
                <div
                  className={`relative w-full overflow-hidden bg-surface ${
                    isLarge
                      ? "aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9]"
                      : isTall
                      ? "aspect-[4/3] sm:aspect-[4/3]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={facility.image}
                    alt={`${facility.title} at The Oakrich International School`}
                    fill
                    sizes={isLarge ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                  {/* Corner Tagline Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-oakrich-yellow block mb-1">
                      {facility.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight">
                      {facility.title}
                    </h3>
                  </div>
                </div>

                {/* Editorial Content Below */}
                <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="pt-3 border-t border-border/60">
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[11px] font-mono text-secondary bg-surface px-2.5 py-1 rounded-md border border-border/80"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
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
