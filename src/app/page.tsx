import PageReveal from "@/components/page-reveal";
import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhatIBringSection from "@/components/what-i-bring-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <PageReveal>
      <Navbar />
      <main className="min-h-screen w-full">
        <HeroSection />
        <WhatIBringSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </PageReveal>
  );
}
