import React from "react";
import NavBer from "./Components/NavBer";
import Benar from "./Components/Benar";
import ServiceSection from "./Components/ServiceSection";
import AboutSection from "./Components/AboutSection";
import SkillSection from "./Components/SkillSection";
import ProjectSection from "./Components/ProjectSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import ContactSection from "./Components/ContactSection"
import FooterSection from "./Components/FooterSection";

function App() {
  return (
    <>

      <NavBer />
      <Benar />
      <SkillSection />
      <ServiceSection />
      <AboutSection />
      <ProjectSection />
      <TestimonialsSection />
      <ContactSection/>
      <FooterSection/>
    </>
  );
}

export default App;
