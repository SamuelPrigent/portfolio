import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavigationBar from "../components/NavigationBar";
import ProjectsSection from "../components/ProjectsSection";
// import SkillsSection from "../components/SkillsSection";
import WhatIBringSection from "../components/WhatIBringSection";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#FCFBF8] text-slate-900">
      <NavigationBar />
      <HeroSection />
      <WhatIBringSection />
      <ProjectsSection />
      {/* <SkillsSection /> */}
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
