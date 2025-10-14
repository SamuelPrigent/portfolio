import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#fffcf7] text-slate-900">
      <NavigationBar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
