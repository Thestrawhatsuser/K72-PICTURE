import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font-2] flex item-center justify-center gap-6'>
      <Link className='text-[6.5vw] leading-tight-[5.5vw] border-5 border-white rounded-full px-14 pt-6  uppercase '>Projects </Link>
      <Link className='text-[6.5vw] leading-tight-[5.5vw] border-5 border-white rounded-full px-14 pt-6  uppercase'>Agence </Link>
    </div>
  )
}

export default HomeBottomText