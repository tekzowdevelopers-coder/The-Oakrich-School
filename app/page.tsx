import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import AcademicJourney from "@/components/AcademicJourney";
import Facilities from "@/components/Facilities";
import Safety from "@/components/Safety";
import StudentLife from "@/components/StudentLife";
import Leadership from "@/components/Leadership";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky & Responsive Header */}
      <Header />

      {/* Main Editorial Story Flow */}
      <main className="flex-1">
        {/* 1. Identity & Signature Hero */}
        <Hero />

        {/* 2. Key Academic & Community Statistics */}
        <StatsStrip />

        {/* 3. Philosophy & Purpose */}
        <About />

        {/* 4. Academic Journey (Kindergarten to High School) */}
        <AcademicJourney />

        {/* 5. Campus Learning Spaces & Specialized Labs */}
        <Facilities />

        {/* 6. Child Safety, Transport & Wellbeing */}
        <Safety />

        {/* 7. Student Life, Performing Arts & Sports */}
        <StudentLife />

        {/* 8. Institutional Leadership */}
        <Leadership />

        {/* 9. Admissions 2026–2027 & Direct WhatsApp Enquiry */}
        <Admissions />

        {/* 10. Campus Location, Timings & Contact */}
        <Contact />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
