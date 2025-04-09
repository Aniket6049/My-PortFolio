import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';



const skills = [{
    skill:"html",
    icon: FaHtml5,
},
{
    skill:"CSS",
    icon: FaCss3Alt,
},
{
    skill:"Tailwind CSS",
    icon: RiTailwindCssLine,
},
{
    skill:"Bootstap",
    icon: FaBootstrap,
},
{
    skill:"React.js",
    icon: FaReact,
},
{
    skill:"Figma(Basic)",
    icon: FaFigma,
}
]
const Skillsm = () => {
  return (
    <div className='grid md:grid-cols-4  sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => {
        return <motion.div
        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once: false, amount: 0}}
        key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-orange'/>
            <p className='text-white'>{item.skill}</p>
        </motion.div>
      })}
    </div>
  )
}

export default Skillsm
