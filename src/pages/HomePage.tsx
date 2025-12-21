// import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import CompanyBanner from "../components/CompanyBanner";
import AboutMe from "../components/AboutMe";
import WhatIBringSection from "../components/WhatIBringSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#FCFBF8] text-slate-900">
      <HeroSection />
      <CompanyBanner />
      <AboutMe />
      <WhatIBringSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
