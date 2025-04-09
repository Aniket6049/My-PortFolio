import React from 'react'
import ContactForm from './ContactForm'
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const ContactLeft = () => {
  return (
    <motion.div
    variants={fadeIn('right', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: false, amount: 0}}
    >
      <div>
        <motion.h2
        variants={fadeIn('down', 0.4)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: false, amount: 0}}
        className='text-orange text-3xl mb-4'>Get In Touch</motion.h2>
        <motion.p
        variants={fadeIn('right', 0.6)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: false, amount: 0}}
        className='text-white'>Fell free to reach out if you'd to collaborate
            <br />
            you are just a few clicks away!
        </motion.p>
      </div>
      <ContactForm/>
    </motion.div>
  )
}

export default ContactLeft
