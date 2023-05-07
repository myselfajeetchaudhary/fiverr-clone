import { useState, useEffect } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import TestiCard from './TestiCard'
import { testimonial, projects } from '../data'
import Slide from './Slide'
import ProjectCard from './ProjectCard'

function Features() {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 640) {
            return setSlidesToShow(1);
          } else if (window.innerWidth < 1024) {
            return setSlidesToShow(2);
          } else if (window.innerWidth < 1280) {
            return setSlidesToShow(3);
          }else {
            return setSlidesToShow(4);
          }
        }
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        };
    })
  return (
    <div>
        {/* Feature 1 */}
        <section className="bg-green-50 flex justify-center">
            <div className="w-[1400px] px-5 sm:px-8 py-10 sm:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                {/* Left */}
                <div className='lg:max-w-md'>
                    <h3 className='text-[32px] text-gray-700 font-bold mb-5'>The best part? Everything.</h3>
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className='w-6 h-6 text-gray-500' />
                        <span className='text-lg font-bold text-gray-700'>Stick to your budget</span>
                    </div>
                    <p className='text-lg font-medium text-gray-500 mb-4'>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className='w-6 h-6 text-gray-500' />
                        <span className='text-lg font-bold text-gray-700'>Get quality work done quickly</span>
                    </div>
                    <p className='text-lg font-medium text-gray-500 mb-4'>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className='w-6 h-6 text-gray-500' />
                        <span className='text-lg font-bold text-gray-700'>Pay when you're happy</span>
                    </div>
                    <p className='text-lg font-medium text-gray-500 mb-4'>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className='w-6 h-6 text-gray-500' />
                        <span className='text-lg font-bold text-gray-700'>Count on 24/7 support</span>
                    </div>
                    <p className='text-lg font-medium text-gray-500 mb-4'>Our round-the-clock support team is available to help anytime, anywhere.</p>
                </div>

                {/* Right */}
                <div className="relative cursor-pointer lg:w-[630px] lg:h-[405px] rounded-md">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="" className='object-cover w-full h-full rounded-s rounded-e' />
                    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-black/50 w-20 h-20 rounded-full flex items-center justify-center">
                        <PlayIcon className='h-10 w-10 text-white' />
                    </div>
                </div>
            </div>
        </section>

        {/* Feature 2 */}
        <section className='bg-white flex justify-center'>
            <div className="w-[1400px] px-8 py-10 sm:py-20">
                <h3 className='text-[32px] text-gray-700 font-bold mb-16'>You need it, we've got it</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-16 whitespace-nowrap">
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/graphics-design.91dfe44.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Graphics & Design</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/online-marketing.a3e9794.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Digital Marketing</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/writing-translation.a787f2f.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Writing & Translation</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/video-animation.1356999.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Video & Animation</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/music-audio.ede4c90.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Music & Audio</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/programming.6ee5a90.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Programming & Tech</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/business.fabc3a7.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Business</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/lifestyle.112b348.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Lifestyle</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/data.855fe95.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Data</span>
                    </div>
                    <div className="cursor-pointer group flex flex-col items-center gap-2">
                        <img src="/images/photography.0cf5a3f.svg" alt="" className='w-12 h-12' />
                        <hr className='border-x-[25px] border rounded-full border-gray-300 transition-all duration-300 ease-in-out group-hover:border-green-500 group-hover:border-x-[40px]' />
                        <span className='text-lg text-gray-900'>Photography</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Fiverr Business */}
        <section className='bg-[#00004a] flex justify-center'>
            <div className="w-[1400px] px-5 md:px-8 py-10 xl:py-20 flex flex-col md:flex-row gap-10 md:gap-0 items-start md:items-center justify-between">
                {/* Left */}
                <div className="text-white max-w-md">
                    <p className='text-3xl font-bold tracking-tighter mb-6'>fiverr<span className='font-normal ml-1'>business.</span> <span className='bg-blue-400 rounded-full py-[1px] px-2 text-[10px] font-medium align-middle'>NEW</span></p>
                    <h3 className='text-[32px] font-bold mb-5'>A solution built for <span className='font-Playfair tracking-wide font-medium'>business</span></h3>
                    <p className='text-xl font-medium mb-5'>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className='w-7 h-7 text-gray-500' />
                        <span className='text-lg'>Talent matching</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className='w-7 h-7 text-gray-500' />
                        <span className='text-lg'>Dedicated account management</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className='w-7 h-7 text-gray-500' />
                        <span className='text-lg'>Team collaboration tools</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className='w-7 h-7 text-gray-500' />
                        <span className='text-lg'>Business payment solutions</span>
                    </div>
                    <button type='button' className='text-lg font-medium capitalize bg-green-500 hover:bg-green-500/80 px-7 py-2 rounded-md mt-12'>Explore Fiverr Business</button>
                </div>
                {/* Right */}
                <div className="xl:w-[650px] xl:h-[415px]">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" className='object-cover w-full h-full' />
                </div>
            </div>
        </section>

        {/* Feature 3 */}
        <section className='flex justify-center'>
            <div className="w-[1400px]">
                <Slide slidesToShow={1} arrowsScroll={1}>
                    {testimonial.map(card => <TestiCard key={card.id} item={card}  />)}
                </Slide>
            </div>
        </section>

        {/* Fiverr Logomaker */}
        <section className=' flex justify-center'>
            <div className="relative w-[1400px] h-auto lg:h-[300px] bg-[#446ee7] sm:mx-8 md:mb-24 flex flex-col lg:flex-row">
                {/* Left */}
                <div className="lg:absolute lg:top-0 lg:bottom-0 lg:m-auto lg:left-20 pl-8 pt-6 lg:pt-0 lg:pl-0 h-10 sm:h-28 lg:h-[250px] text-white max-w-md z-10">
                    <p className='text-3xl font-bold tracking-tighter mb-3'>fiverr<span className='font-normal ml-1'>logomaker</span></p>
                    <h3 className='text-[32px] font-bold mb-2'>Make an incredible logo <span className='font-Playfair tracking-wide font-medium'>in minutes</span></h3>
                    <p className='font-medium mb-6'>Pre-designed by top talent. Just add your touch.</p>
                    <button type='button' className='text-lg text-[#446ee7] font-medium capitalize bg-white hover:bg-white/80 px-7 py-2 rounded-md'>Try Fiverr Logo Maker</button>
                </div>
                {/* Right */}
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png" alt="" className='hidden lg:block object-cover w-full h-full' />
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_852,dpr_1.0/v1/attachments/generic_asset/asset/8610b9c7c90c338adc976e96051cbd6c-1608034070829/logo-maker-banner-tablet-852-2x.png" alt="" className='hidden sm:block lg:hidden object-cover w-full h-full' />
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/371199b9f34bad46149a6397e6ba2804-1608028502616/logo-maker-banner-mobile-552-2x.png" alt="" className='sm:hidden object-cover w-full h-full' />
            </div>
        </section>

        {/* Inspiring Work */}
        <section className='bg-[#f5f5f5] flex justify-center'>
            <div className="w-[1400px] pl-8 py-20">
                <h3 className='text-[32px] text-gray-700 font-bold mb-10'>You need it, we've got it</h3>
                <Slide slidesToShow={slidesToShow} arrowsScroll={4}>
                    {projects.map(card => <ProjectCard key={card.id} item={card} />)}
                </Slide>
            </div>
        </section>

        {/* Feature 4 */}
        <section className='flex justify-center'>
            <div className="relative bg-[#45091b] lg:bg-transparent w-[1400px] h-[220px] sm:h-[260px] md:h-[380px] mx-8 mt-16 mb-20 md:mt-28 md:mb-36">
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608129/bg-signup-1400-x2.png" alt="" className='hidden lg:block object-cover w-full h-[380px] rounded-[4px]' />
                <div className="absolute top-0 bottom-0 m-auto h-[140px] w-auto pl-6 sm:pl-10 md:pl-24 text-white">
                    <p className='text-[32px] sm:text-[42px] md:text-5xl font font-bold mb-8 md:mb-12'>Suddenly it's all so <span className='font-Playfair font-medium'>doable</span>.</p>
                    <button type='button' className='bg-[#1dbf73] hover:bg-[#1dbf73]/80 px-7 py-2 rounded-[4px] text-lg font-medium'>Join Fiverr</button>
                </div>
            </div>
        </section>
        <hr />
    </div>
  )
}

export default Features