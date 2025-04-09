import React from 'react'
import Project from './Project'
import website1 from '../../../../public/website-img-1.jpg'
const projects = [
  {
    name: "Food-App",
    year: "2025",
    align:"right",
    image:"/website-img-1.jpg",
    link:"https://food-app-henna-zeta.vercel.app/",
},
{
    name: "Food-App",
    year: "2025",
    align:"left",
    image:"/website-img-2.webp",
    link:"https://food-app-henna-zeta.vercel.app/",
},
{
    name: "Food-App",
    year: "2025",
    align:"right",
    image:"/website-img-3.jpg",
    link:"https://food-app-henna-zeta.vercel.app/",
}
]
const projectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto  px-4'>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>{projects.map((item, index) =>{
        return <Project key={index} name={item.name} year={item.year} align={item.align} link={item.link} image={item.image}/>
      })}</div>
    </div>
  )
}

export default projectMain
