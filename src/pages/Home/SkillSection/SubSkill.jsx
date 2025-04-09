import React from 'react'
import subskill from '../../../assets/subSkills.jpg'
const SubSkill = () => {
  return (
    <div className='border-y-2 border-lightGrey relative'>
        <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img src={subskill} alt="" />
    </div>
  )
}

export default SubSkill
