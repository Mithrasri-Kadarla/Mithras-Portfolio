import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/Aboutme";
import Skills from "@/components/Skills";
import ExperienceEducation from "@/components/ExperienceEducation";
import Projects from "@/components/Projects";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <div id="home" className="pt-[60px]">
        <Home />
      </div>


      <div id="about">
        <AboutMe />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <ExperienceEducation />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
