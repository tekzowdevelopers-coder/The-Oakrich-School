"use client";

import Image from "next/image";
import { ArrowUp, Heart } from "lucide-react";
import { school } from "@/data/school";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Identity & Crest (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 flex-shrink-0 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="The Oakrich International School Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm uppercase tracking-[0.2em] font-bold text-white leading-tight">
                    The Oakrich
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
                    <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
                    <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
                    <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-[0.14em] text-white/70">
                  International School • Hosur
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
              A premier co-educational institution in Hosur, dedicated to nurturing inquisitive, ethical, and self-assured global citizens through an integrated ICSE & Cambridge learning framework.
            </p>

            <div className="text-xs font-mono text-white/50 tracking-wider">
              {school.affiliation}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono tracking-widest uppercase text-accent-light mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Philosophy
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Academic Stages
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Laboratories & Campus
                </a>
              </li>
              <li>
                <a href="#student-life" className="hover:text-white transition-colors">
                  Student Life & Arts
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions 2026–27
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Stages (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono tracking-widest uppercase text-accent-light mb-4">
              Curriculum
            </div>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Kindergarten (Pre-KG – UKG)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Primary (Grades I – V)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Middle School (VI – VIII)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  High School (IX – X)
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  AI & Robotics Lab
                </a>
              </li>
              <li>
                <a href="#student-life" className="hover:text-white transition-colors">
                  Athletics & Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Admissions & Immediate Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-widest uppercase text-accent-light mb-4">
              Admissions Desk
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Admissions Open for 2026–2027. Connect with our admissions counselors today.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-white/90">
              <div>Phone: +91 7305664161</div>
              <div>Secondary: +91 7305664162 / 63</div>
              <div>Email: {school.email}</div>
            </div>
            <div className="pt-2">
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-accent-light transition-colors"
              >
                <span>Apply for 2026–27</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <div>
            &copy; {new Date().getFullYear()} {school.name}, Hosur. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Static Export • CDN Optimized</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors p-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
