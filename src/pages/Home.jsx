import React from "react";
import HeroSection from "../component/Hero";
import AboutSection from "../component/about";
import MySkill from "../component/MySkill";
import MyResume from "../component/MyResume";
import MyService from "../component/MyService";
import ProjectSection from "../component/MyProjects";
import ContactSection from "../component/ContactMe";
import Footer from "../component/Footer";


export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">


      {/* HERO SECTION */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-24">
        <AboutSection />

      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="scroll-mt-24">
        <MyResume />

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24">
        <MySkill />

      </section>
      

      {/* SERVICES SECTION */}
      <section id="services" className="scroll-mt-24">
        <MyService />
      </section>

      {/* PROJECT SECTION */}
      <section id="portfolio" className="scroll-mt-24">
        <ProjectSection />
      </section>

{/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>

      {/* CONTACT SECTION (optional placeholder) */}
      <section id="contact" className="scroll-mt-24">
        <Footer />
      </section>

    </div>
  );
}
