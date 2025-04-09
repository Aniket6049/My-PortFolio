import React from "react";
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const AboutText = () => {
  return (
    <motion.div
     variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{once: false, amount: 0}}
    className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <motion.h2
       variants={fadeIn('right', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: false, amount: 0}}
      className="text-6xl text-cyan mb-10">About Me</motion.h2>
      <motion.p
       variants={fadeIn('left', 0.4)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: false, amount: 0}}
      className="text-white">
        Creative and detail-oriented Frontend Developer passionate about
        building responsive, user-centric web interfaces. Proficient in HTML,
        CSS, Tailwind CSS, Bootstrap, React.js, and basic design tool like
        Figma. Always eager to learn new technologies and bring designs to life
        through clean, efficient code.
      </motion.p>
      <motion.button
       variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: false, amount: 0}}
      className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</motion.button>
    </motion.div>
  );
};

export default AboutText;
