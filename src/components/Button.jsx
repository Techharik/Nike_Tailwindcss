import React from 'react'
import { arrowRight } from '../assets/icons'

const Button = ({name}) => {
  return (
    <div className='flex border py-4 px-8 rounded-full bg-coral-red gap-2 font-montserrat text-emerald-50 shadow-sm hover:cursor-pointer hover:shadow-lg w-[180px]'>
      {name} <img src={arrowRight} alt="right-arrow" />
    </div>
  )
}

export default Button