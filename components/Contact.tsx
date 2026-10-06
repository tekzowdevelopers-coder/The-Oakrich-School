"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { school } from "@/data/school";

export default function Contact() {
  const { contact } = school;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-oakrich-plum font-semibold">
            {contact.sectionNum}
          </span>
          <span className="w-8 h-[1px] bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary">
            {contact.eyebrow}
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-plum" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-yellow" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-green" />
            <span className="w-1.5 h-1.5 rounded-full bg-oakrich-blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Directory (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-editorial-h2 font-light text-primary tracking-tight">
              {contact.heading}
            </h2>

            <p className="text-base text-secondary font-light leading-relaxed max-w-lg">
              We welcome prospective parents and visitors to experience our classrooms, laboratories, and vibrant campus life in person. Prior appointment recommended.
            </p>

            <div className="space-y-6 pt-4 border-t border-border">
              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-oakrich-greenLight flex items-center justify-center text-oakrich-green shrink-0 border border-oakrich-green/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Admissions & Campus Inquiries
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm font-mono text-secondary">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="hover:text-oakrich-plum transition-colors"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-oakrich-plumLight flex items-center justify-center text-oakrich-plum shrink-0 border border-oakrich-plum/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Official Email
                  </div>
                  <div className="mt-1 text-sm font-mono text-secondary">
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-oakrich-plum transition-colors underline decoration-border"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-oakrich-blueLight flex items-center justify-center text-oakrich-blue shrink-0 border border-oakrich-blue/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Campus Location
                  </div>
                  <div className="mt-1 text-sm text-secondary font-light">
                    {contact.addressLines.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <a
                      href="https://maps.google.com/?q=The+Oakrich+International+School+Hosur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-oakrich-plum hover:text-oakrich-plumDark transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Administrative Timings (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-surface border border-border p-8 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-oakrich-plum mb-4">
                <Clock className="w-4 h-4 text-oakrich-plum" />
                <span>Operational & School Timings</span>
              </div>

              <h3 className="text-xl font-medium text-primary mb-6">
                Campus Schedules & Office Hours
              </h3>

              <div className="space-y-4 divide-y divide-border">
                {contact.hours.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm ${
                      idx !== 0 ? "pt-4" : ""
                    }`}
                  >
                    <span className="font-medium text-primary">{item.days}</span>
                    <span className="font-mono text-secondary mt-1 sm:mt-0">
                      {item.timing}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent("Hello, I would like to schedule a campus walkthrough at The Oakrich International School, Hosur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-oakrich-plum hover:bg-oakrich-plumDark text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xl shadow-md hover:shadow-hover"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Schedule Campus Walkthrough on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
