import HeroSection from "../components/HeroSection";
import CompanyBanner from "../components/CompanyBanner";
import AboutMe from "../components/AboutMe";
import WhatIBringSection from "../components/WhatIBringSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PageReveal from "../components/PageReveal";

export default function HomePage() {
  return (
    <PageReveal>
      <main className="min-h-screen w-full bg-[#FCFBF8] text-slate-900">
        <HeroSection />
        <CompanyBanner />
        <AboutMe />
        <WhatIBringSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </PageReveal>
  );
}
