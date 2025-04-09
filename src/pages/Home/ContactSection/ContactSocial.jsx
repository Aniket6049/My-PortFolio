import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
const ContactSocial = () => {
  return (
    <div>
      <SingleContactSocial Link="https://github.com/Aniket6049" Icons={FiGithub}/>
    </div>
  )
}

export default ContactSocial
