import React from 'react'

function ProjectCard({ item }) {
  return (
    <div className="sm:w-[280px] md:w-[330px] lg:w-[300px] h-auto shadow-md cursor-pointer">
        <img src={item.img} alt="" className='object-cover w-full h-[240px] rounded-t-[4px]' />
        <div className="flex items-center gap-2 bg-white px-5 py-4 rounded-b-md shadow-xl">
          <img src={item.pp} alt="" className='rounded-full w-10 h-10 object-cover' />
          <div className="flex flex-col">
            <span className='font-medium text-gray-700'>{item.cat}</span>
            <span className='text-sm font-medium text-gray-400'>{item.username}</span>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard