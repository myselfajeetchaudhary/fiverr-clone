import React from 'react'
import { Link } from 'react-router-dom'

function CatCard({ item }) {
  return (
    <div className='relative cursor-pointer lg:w-[230px] lg:h-[345px] rounded-md'>
      <img src={item.img} alt="" className='object-cover w-full h-[345px] sm:w-[300px] md:w-[230px] rounded-md' />
      <p className='absolute top-3 left-4 text-white font-medium'>{item.desc}</p>
      <p className='absolute top-8 left-4 text-[26px] text-white font-bold'>{item.title}</p>
    </div>
  )
}

export default CatCard