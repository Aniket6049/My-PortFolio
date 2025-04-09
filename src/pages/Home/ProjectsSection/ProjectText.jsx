import React from "react";
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const ProjectText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <motion.h2
        variants={fadeIn('down', 0.2)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: false, amount: 0}}
      className="text-6xl text-cyan mb-10">Projects</motion.h2>
      <motion.p
        variants={fadeIn('up', 0.4)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: false, amount: 0}}
      className="text-lg text-center text-white">
        I have worked on a variety of web development projects, ranging from
        responsive website for small businesses to full-stack applications a
        complex front-end interfaces.
      </motion.p>
    </div>
  );
};

export default ProjectText;
