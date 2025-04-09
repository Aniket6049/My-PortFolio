import React from 'react'
import email from '../../../assets/email-image.png'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
import {motion} from 'framer-motion';
import { fadeIn } from '../../../framermotion/variants';
const ContactRight = () => {
  return (
    <motion.div
    variants={fadeIn('left', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: false, amount: 0}}
    className='flex flex-col items-center justify-center gap-12'>
      <img
                    viewport={{once: false, amount: 0}}
                     src={email} className='max-w-[300px]' alt="" />
      <ContactInfo/>
      <ContactSocial/>
    </motion.div>
  )
}

export default ContactRight
