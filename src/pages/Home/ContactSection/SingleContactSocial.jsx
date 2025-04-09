import React from 'react'

const SingleContactSocial = ({Icons, Link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center'>
      <a href={Link} className='cursor-pointer'>
        <Icons/>
      </a>
    </div>
  )
}

export default SingleContactSocial
