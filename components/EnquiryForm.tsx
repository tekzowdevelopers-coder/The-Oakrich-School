"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const gradeOptions = [
  "Pre-KG",
  "LKG",
  "UKG",
  "Grade I",
  "Grade II",
  "Grade III",
  "Grade IV",
  "Grade V",
  "Grade VI",
  "Grade VII",
  "Grade VIII",
  "Grade IX",
  "Grade X",
];

export default function EnquiryForm() {
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!parentName.trim()) {
      errs.parentName = "Please enter parent/guardian name.";
    }
    if (!studentName.trim()) {
      errs.studentName = "Please enter student name.";
    }
    if (!grade) {
      errs.grade = "Please select the target grade.";
    }
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const url = buildWhatsAppUrl({
      parentName,
      studentName,
      grade,
      phone,
      email,
      message,
    });

    setSubmitted(true);
    // Open WhatsApp in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-border p-6 sm:p-10 rounded-2xl shadow-card">
      <div className="border-b border-border pb-6 mb-8">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-oakrich-plum" />
          <span className="w-2 h-2 rounded-full bg-oakrich-yellow" />
          <span className="w-2 h-2 rounded-full bg-oakrich-green" />
          <span className="w-2 h-2 rounded-full bg-oakrich-blue" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-secondary ml-1">Official Admissions Channel</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-medium text-primary tracking-tight">
          Admissions Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1">
          Complete the details below to generate an instant admissions enquiry on WhatsApp directly with our Hosur campus team.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-oakrich-plum/5 border border-oakrich-plum/20 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-oakrich-plum shrink-0 mt-0.5" />
          <div className="text-xs text-primary leading-relaxed">
            <span className="font-semibold block mb-0.5">WhatsApp opened!</span>
            Your message has been formatted. If your WhatsApp did not open automatically,{" "}
            <button
              type="button"
              onClick={handleSubmit}
              className="text-oakrich-plum underline font-medium hover:text-oakrich-plumDark"
            >
              click here to send via WhatsApp
            </button>
            .
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Parent/Guardian Name */}
          <div>
            <label
              htmlFor="parentName"
              className="block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
            >
              Parent / Guardian Name <span className="text-oakrich-plum">*</span>
            </label>
            <input
              id="parentName"
              type="text"
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-4 py-3 text-sm bg-surface border rounded-lg transition-all text-primary placeholder:text-secondary/50 focus:bg-white focus:outline-none ${
                errors.parentName ? "border-red-500" : "border-border focus:border-oakrich-plum focus:ring-2 focus:ring-oakrich-plum/10"
              }`}
            />
            {errors.parentName && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.parentName}</span>
              </p>
            )}
          </div>

          {/* Student Name */}
          <div>
            <label
              htmlFor="studentName"
              className="block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
            >
              Student Name <span className="text-oakrich-plum">*</span>
            </label>
            <input
              id="studentName"
              type="text"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="e.g. Aarav Kumar"
              className={`w-full px-4 py-3 text-sm bg-surface border rounded-lg transition-all text-primary placeholder:text-secondary/50 focus:bg-white focus:outline-none ${
                errors.studentName ? "border-red-500" : "border-border focus:border-oakrich-plum focus:ring-2 focus:ring-oakrich-plum/10"
              }`}
            />
            {errors.studentName && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.studentName}</span>
              </p>
            )}
          </div>

          {/* Grade Seeking */}
          <div>
            <label
              htmlFor="grade"
              className="block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
            >
              Grade Seeking Admission <span className="text-oakrich-plum">*</span>
            </label>
            <select
              id="grade"
              required
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className={`w-full px-4 py-3 text-sm bg-surface border rounded-lg transition-all text-primary focus:bg-white focus:outline-none ${
                errors.grade ? "border-red-500" : "border-border focus:border-oakrich-plum focus:ring-2 focus:ring-oakrich-plum/10"
              }`}
            >
              <option value="">Select Grade</option>
              {gradeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.grade && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.grade}</span>
              </p>
            )}
          </div>

          {/* Mobile Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
            >
              Contact Phone Number <span className="text-oakrich-plum">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9876543210"
              className={`w-full px-4 py-3 text-sm bg-surface border rounded-lg transition-all text-primary placeholder:text-secondary/50 focus:bg-white focus:outline-none ${
                errors.phone ? "border-red-500" : "border-border focus:border-oakrich-plum focus:ring-2 focus:ring-oakrich-plum/10"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email (Optional) */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
            >
              Email Address <span className="text-secondary font-normal lowercase">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. parent@example.com"
              className="w-full px-4 py-3 text-sm bg-surface border border-border rounded-lg transition-all text-primary placeholder:text-secondary/50 focus:bg-white focus:border-oakrich-plum focus:ring-2 focus:ring-oakrich-plum/10 focus:outline-none"
            />
          </div>

          {/* Message (Optional) */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
            >
              Message or Specific Queries <span className="text-secondary font-normal lowercase">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any specific questions regarding curriculum, bus routes from your area, or campus walkthrough..."
              className="w-full px-4 py-3 text-sm bg-surface border border-border rounded-lg transition-all text-primary placeholder:text-secondary/50 focus:bg-white focus:border-oakrich-plum focus:ring-2 focus:ring-oakrich-plum/10 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-oakrich-plum hover:bg-oakrich-plumDark text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg shadow-md hover:shadow-hover group"
          >
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span>Enquire on WhatsApp (+91 {WHATSAPP_NUMBER.slice(2)})</span>
          </button>
          <p className="text-[11px] text-secondary mt-3 font-light">
            This will launch WhatsApp on your phone or desktop with a pre-filled, formatted enquiry directed to our admissions coordinator.
          </p>
        </div>
      </form>
    </div>
  );
}
