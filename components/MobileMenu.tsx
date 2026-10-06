"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { school } from "@/data/school";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  activeSection: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}: MobileMenuProps) {
  // Prevent background scroll when menu is open & listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-white"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <a href="#" onClick={onClose} className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="The Oakrich International School Logo"
            width={44}
            height={44}
            className="w-10 h-10 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">The Oakrich</span>
            <span className="text-[10px] uppercase tracking-wider text-secondary">International School</span>
          </div>
        </a>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 -mr-2 text-primary hover:text-accent transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto px-6 py-8">
        <ul className="space-y-4">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between text-2xl font-light tracking-tight py-2 border-b border-border/40 transition-colors ${
                    isActive ? "text-accent font-normal" : "text-primary hover:text-accent"
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-secondary tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Quick Contact & WhatsApp Action */}
        <div className="mt-10 pt-6 border-t border-border space-y-4">
          <div className="flex items-center gap-1.5 text-xs tracking-wider uppercase text-secondary font-medium">
            <span className="w-2 h-2 rounded-full bg-oakrich-plum" />
            <span className="w-2 h-2 rounded-full bg-oakrich-yellow" />
            <span className="w-2 h-2 rounded-full bg-oakrich-green" />
            <span className="w-2 h-2 rounded-full bg-oakrich-blue" />
            <span className="ml-1">Direct Admissions Desk</span>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#admissions"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-oakrich-plum hover:bg-oakrich-plumDark text-white text-sm font-semibold tracking-wide uppercase transition-colors rounded-lg shadow-sm"
            >
              <span>Enquire for Admissions 2026–27</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about admission at The Oakrich International School.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 border border-border text-primary text-sm font-medium hover:border-oakrich-plum hover:text-oakrich-plum transition-colors rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-oakrich-plum" />
              <span>WhatsApp Us: +91 {school.whatsapp.slice(2)}</span>
            </a>
            <a
              href={`tel:${school.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 text-xs text-secondary hover:text-primary py-2"
            >
              <Phone className="w-3.5 h-3.5 text-oakrich-green" />
              <span>Call Admissions: +91 {school.primaryPhone}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
