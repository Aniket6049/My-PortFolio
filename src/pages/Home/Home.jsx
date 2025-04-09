import React from "react";
import Layouts from "../../components/layouts/Layouts";
import HeroText from "./HeroSection/HeroText";
import HeroPic from "./HeroSection/HeroPic";
import HeroGradiant from "./HeroSection/HeroGradiant";
import SubHero from "./HeroSection/SubHero";
import AboutText from "./AboutSection/AboutText";
import AboutImg from "./AboutSection/AboutImg";
import SkillText from "./SkillSection/SkillText";
import Skill from "./SkillSection/Skill";
import Skillsm from "./SkillSection/Skillsm";
import SubSkill from "./SkillSection/SubSkill";
import ProjectText from "./ProjectsSection/ProjectText";
import ProjectMain from "./ProjectsSection/ProjectMain";
import ContactLeft from "./ContactSection/ContactLeft";
import ContactRight from "./ContactSection/ContactRight";
import {motion} from 'framer-motion';
import { fadeIn } from '../../framermotion/variants';
const Home = () => {
  return (
    <>
      <Layouts>
        {/* Hero Section */}
        <div className="pt-40 pb-16">
          <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
            <HeroText />
            <HeroPic />
          </div>
        </div>
        {/* Hero Gradiant */}
        <HeroGradiant />
        {/* Sub Hero Section */}
        <SubHero />

        {/* About Section Start */}
        <div id="about" className="flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
          <div>
          <AboutText />
          </div>
          <div>
          <AboutImg />
          </div>
        </div>




        {/* Skill Section */}
        <div id="skills">
          <div className="max-w-[1200px] mx-auto px-4 min-h-[600px] relative overflow-hidden">
          <SkillText/>
          <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <Skill/>
          </div>
          <div className="sm:block lg:hidden">
            <Skillsm/>
          </div>
          </div>
        </div>
        <SubSkill/>

        {/* Projects Section */}
        <div id="projects"> 
        <ProjectText/>
        <ProjectMain/>
        </div>
        {/* Contact Me */}
    
       <div id="contact" className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4">
          <motion.h2
          variants={fadeIn('down', 0.2)}
                   initial='hidden'
                   whileInView='show'
                   viewport={{once: false, amount: 0}}
          className="text-6xl text-cyan mb-10 text-center">Contact Me</motion.h2>
          <div className="flex justify-between gap-24 bg-lightBrown p-8 rounded-2xl lg:flex-row sm:flex-col">
          <ContactLeft/>
          <ContactRight/>
          </div>
        </div>
      
      </Layouts>
    </>
  );
};

export default Home;
