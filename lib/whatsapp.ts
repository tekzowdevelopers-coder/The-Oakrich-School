/**
 * Central WhatsApp Configuration & URL Builder
 * Easily configurable phone number as required by specification.
 */
export const WHATSAPP_NUMBER = "917305664161";

export interface EnquiryData {
  parentName: string;
  studentName: string;
  grade: string;
  phone: string;
  email?: string;
  message?: string;
}

export function buildWhatsAppUrl(data: EnquiryData, whatsappNumber: string = WHATSAPP_NUMBER): string {
  const lines = [
    "ADMISSION ENQUIRY — THE OAKRICH INTERNATIONAL SCHOOL",
    "--------------------------------------------------",
    `Parent / Guardian: ${data.parentName.trim()}`,
    `Student Name: ${data.studentName.trim()}`,
    `Grade Seeking: ${data.grade.trim()}`,
    `Phone: ${data.phone.trim()}`,
  ];

  if (data.email && data.email.trim().length > 0) {
    lines.push(`Email: ${data.email.trim()}`);
  }

  if (data.message && data.message.trim().length > 0) {
    lines.push(`Message / Query: ${data.message.trim()}`);
  }

  lines.push("--------------------------------------------------");
  lines.push("Academic Year: 2026–2027 | Sent via Website");

  const fullText = lines.join("\n");
  const encoded = encodeURIComponent(fullText);

  // Return clean wa.me link
  return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encoded}`;
}
