import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const Project = ({name, year, align, image, link}) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left"? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
      <div>
        <motion.h2
          variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once: false, amount: 0}}
        className='md:text-3xl sm:text-2xl text-orange'>{name}</motion.h2>
        <motion.h2
         variants={fadeIn('right', 0.4)}
         initial='hidden'
         whileInView='show'
         viewport={{once: false, amount: 0}}
        className={`text-xl font-thin text-white font-special sm:text-cenetr ${align === "left"? "md:text-right" : "md:text-left"}`}>{year}</motion.h2>
        <motion.a 
         variants={fadeIn('left', 0.6)}
         initial='hidden'
         whileInView='show'
         viewport={{once: false, amount: 0}}
        href={link} className={` text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"}`}>view<BiSolidRightTopArrowCircle /></motion.a>
      </div>
      <motion.div
      variants={fadeIn('down', 0.8)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='max-h-[220px]  max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
        <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'>
          
        </div>
        <img src={image} className='w-full h-full ' alt="project-img" />
      </motion.div>
    </div>
  )
}

export default Project
