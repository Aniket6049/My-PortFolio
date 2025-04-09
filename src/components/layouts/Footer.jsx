import React from 'react'


const Links = [
  { Links: "About Me", section: "about"},
  { Links: "Skills", section: "skills"},
  { Links: "Experience", section: "experience"},
  { Links: "Projects", section: "projects"},
  { Links: "Contact", section: "contact"},
]
const Footer = () => {

  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
          <p className='text-3xl text-lightGrey'>Aniket Choudhary</p>
          <ul className='flex gap-4 text-lightGrey text-xl'>
            {Links.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer'>{item.Links}</a>
                </li>
              )
            })}
          </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">© 2025 Aniket Choudhary, All rights reserved.</p>
    </div>
  )
}

export default Footer
