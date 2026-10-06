import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oakrichinternationalschool.com"),
  title: "The Oakrich International School | ICSE School in Hosur",
  description:
    "The Oakrich International School in Hosur, Tamil Nadu offers an integrated ICSE & Cambridge curriculum, world-class laboratories, future-ready AI and robotics, performing arts, and holistic character development.",
  keywords: [
    "Oakrich International School",
    "ICSE School Hosur",
    "Cambridge Primary Hosur",
    "Best school in Hosur",
    "Schools near Electronic City Bangalore",
    "Admissions 2026-2027 Hosur",
    "Holistic education Hosur",
  ],
  authors: [{ name: "The Oakrich International School" }],
  openGraph: {
    title: "The Oakrich International School | ICSE School in Hosur",
    description: "Where curiosity becomes confidence. Discover a school built around possibility.",
    url: "https://oakrichinternationalschool.com",
    siteName: "The Oakrich International School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-campus.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakrich International School Campus, Hosur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oakrich International School | ICSE School in Hosur",
    description: "Where curiosity becomes confidence. Discover a school built around possibility.",
    images: ["/images/hero-campus.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <body className="bg-background text-primary antialiased selection:bg-accent selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
