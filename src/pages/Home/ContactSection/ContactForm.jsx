import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const ContactForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-4' action="">
        <motion.input
        variants={fadeIn('right', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0}}
        type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-brown px-2' />
        <motion.input
        variants={fadeIn('left', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0}}
        type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-brown px-2' />
        <motion.textarea
        variants={fadeIn('right', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0}}
        type="text" placeholder='Message' rows='9' cols='50' required className='rounded-lg  bg-brown p-2'/>
        <motion.button 
        variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0}}
        type='submit'className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</motion.button>
      </form>
    </div>
  )
}

export default ContactForm
