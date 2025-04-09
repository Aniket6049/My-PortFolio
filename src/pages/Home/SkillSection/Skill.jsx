import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import SingleSkill from './SingleSkill';



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
const Skill = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 mx-w-[1200px] mx-auto '>
      {skills.map((item, index) => {
        return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
      })}
    </div>
  )
}

export default Skill
