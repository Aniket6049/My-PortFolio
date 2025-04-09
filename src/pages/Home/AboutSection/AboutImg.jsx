import React from 'react'
import About from '../../../assets/about-me.jpg'
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const AboutImg = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
      <motion.div
      variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0}}
      className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
        <img src={About} className='h-full w-auto object-cover' alt="" />
      </motion.div>
      <motion.div
      variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0}}
      className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></motion.div>
    </div>
  )
}

export default AboutImg
