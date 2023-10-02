import Navbar from "./components/navbar/Navbar";
import HomeHero from "./components/HomeHero/HomeHero";
import EduExp from "./components/edu&exp/EduExp";
import AboutSection from "./components/aboutSection/AboutSection";
import Skills from "./components/skills/Skills";
import ProjectSection from "./components/projectSection/ProjectSection";
import ContactMe from "./components/contactMeSection/ContactMe";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="container  mx-auto px-5 ">
        <HomeHero />
        <AboutSection />
        <EduExp />
        <Skills />
        <ProjectSection />
        <ContactMe />
        <Toaster position="bottom-right" />
      </div>
    </main>
  );
}
