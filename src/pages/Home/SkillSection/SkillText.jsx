import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const SkillText = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
      <motion.h2
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='text-6xl text-cyan mb-10'>My Skills</motion.h2>
      <motion.p
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='text-lg text-white text-center'>
      I have a solid foundation in front-end web development, with hands-on experience in HTML5, CSS3, and modern styling frameworks like Tailwind CSS and Bootstrap. I specialize in building responsive and user-friendly interfaces using React.js, ensuring dynamic and efficient web applications. Additionally, I have a basic understanding of Figma, which helps me collaborate effectively on UI/UX design and translate design concepts into functional code.
      </motion.p>
    </div>
  )
}

export default SkillText
