"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { school } from "@/data/school";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Student Life", href: "#student-life" },
  { label: "Leadership", href: "#leadership" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for scroll spy
      const sectionElements = navLinks.map((link) => {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id, top: rect.top, bottom: rect.bottom };
        }
        return null;
      });

      const current = sectionElements.find(
        (sec) => sec && sec.top <= 140 && sec.bottom >= 100
      );
      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-subtle py-3.5"
            : "bg-white/80 backdrop-blur-sm border-b border-border/60 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-oakrich-plum"
            aria-label="The Oakrich International School Homepage"
          >
            <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="The Oakrich International School Crest"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary leading-tight">
                  The Oakrich
                </span>
                {/* 4 small logo dots */}
                <div className="flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
                  <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
                  <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
                  <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.14em] text-secondary font-medium">
                International School • Hosur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs tracking-wider uppercase font-medium transition-colors py-1 ${
                    isActive
                      ? "text-oakrich-plum font-semibold"
                      : "text-primary/80 hover:text-oakrich-plum"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-oakrich-plum transition-all duration-300 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Enquire Button */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="hidden xl:inline text-[11px] font-mono text-secondary tracking-widest uppercase">
              ICSE • Cambridge
            </span>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-oakrich-plum hover:bg-oakrich-plumDark text-white transition-all duration-200 rounded-lg shadow-sm"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 -mr-2 text-primary hover:text-oakrich-plum transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
