import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'

function TestiCard({ item }) {
  return (
    <div className="px-8 py-10 md:py-24 flex flex-col lg:flex-row gap-5 items-center justify-between">
        {/* Left */}
        <div className="relative cursor-pointer lg:w-[470px] lg:h-[270px] rounded-md">
            <img src={item.img} alt="" className='object-cover w-[1400px] h-full rounded-s rounded-e' />
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-black/50 w-20 h-20 rounded-full flex items-center justify-center">
                <PlayIcon className='h-10 w-10 text-white' />
            </div>
        </div>
        {/* Right */}
        <div>
            <div className="flex items-center items gap-3 mb-5">
                <h5 className='text-[22px] mb-2 text-gray-500'>{item.title}</h5>
                <hr className='border border-gray-300 border-y-[10px]' />
                <img src={item.testiImg} alt="" className='h-9 w-auto' />
            </div>
            <p className='font-Playfair font-medium text-3xl text-black/90 tracking-wider leading-normal max-w-[48rem]'>{item.desc}</p>
        </div>
    </div>
  )
}

export default TestiCard