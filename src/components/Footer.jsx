import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function Footer() {
  const [showCategories, setShowCategories] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showFiverr, setShowFiverr] = useState(false);

  return (
    <footer className='bg-white flex justify-center'>
        <div className="w-[1400px] px-8">
          {/* Top */}
          <div className="sm:grid grid-cols-3 gap-10 lg:flex pb-5 sm:pb-10 pt-5 sm:pt-14">
            {/* 1st Col */}
            <div className="flex-1 flex flex-col justify-between sm:justify-normal gap-3 mb-5 sm:mb-0">
              <div className="flex items-center justify-between" onClick={() => setShowCategories(!showCategories)}>
                <h6 className='text-gray-800 text-[17px] font-medium'>Categories</h6>
                <ChevronDownIcon className='h-5 w-5 sm:hidden' />
              </div>
              <div className={`${showCategories ? 'flex' : 'hidden sm:flex'} flex-col gap-3 text-gray-500 text-[17px]`}>
                <span className='cursor-pointer hover:underline'>Graphics & Design</span>
                <span className='cursor-pointer hover:underline'>Digital Marketing</span>
                <span className='cursor-pointer hover:underline'>Writing & Translation</span>
                <span className='cursor-pointer hover:underline'>Video & Animation</span>
                <span className='cursor-pointer hover:underline'>Music & Audio</span>
                <span className='cursor-pointer hover:underline'>Programming & Tech</span>
                <span className='cursor-pointer hover:underline'>Data</span>
                <span className='cursor-pointer hover:underline'>Business</span>
                <span className='cursor-pointer hover:underline'>Lifestyle</span>
                <span className='cursor-pointer hover:underline'>Photography</span>
                <span className='cursor-pointer hover:underline'>Sitemap</span>
              </div>
            </div>
            {/* 2nd Col */}
            <div className="flex-1 flex flex-col justify-between sm:justify-normal gap-3 mb-5 sm:mb-0">
              <div className="flex items-center justify-between" onClick={() => setShowAbout(!showAbout)}>
                <h6 className='text-gray-800 text-[17px] font-medium'>About</h6>
                <ChevronDownIcon className='h-5 w-5 sm:hidden' />
              </div>
              <div className={`${showAbout ? 'flex' : 'hidden sm:flex'} flex-col gap-3 text-gray-500 text-[17px]`}>
                <span className='cursor-pointer hover:underline'>Careers</span>
                <span className='cursor-pointer hover:underline'>Press & News</span>
                <span className='cursor-pointer hover:underline'>Partnerships</span>
                <span className='cursor-pointer hover:underline'>Privacy Policy</span>
                <span className='cursor-pointer hover:underline'>Terms of Service</span>
                <span className='cursor-pointer hover:underline'>Intellectual Property Claims</span>
                <span className='cursor-pointer hover:underline'>Investor Relations</span>
              </div>
            </div>
            {/* 3rd Col */}
            <div className="flex-1 flex flex-col justify-between sm:justify-normal gap-3 mb-5 sm:mb-0">
              <div className="flex items-center justify-between" onClick={() => setShowSupport(!showSupport)}>
                <h6 className='text-gray-800 text-[17px] font-medium'>Support</h6>
                <ChevronDownIcon className='h-5 w-5 sm:hidden' />
              </div>
              <div className={`${showSupport ? 'flex' : 'hidden sm:flex'} flex-col gap-3 text-gray-500 text-[17px]`}>
                <span className='cursor-pointer hover:underline'>Help & Support</span>
                <span className='cursor-pointer hover:underline'>Trust & Safety</span>
                <span className='cursor-pointer hover:underline'>Selling on Fiverr</span>
                <span className='cursor-pointer hover:underline'>Buying on Fiverr</span>
              </div>
            </div>
            {/* 4th Col */}
            <div className="flex-1 flex flex-col justify-between sm:justify-normal gap-3 mb-5 sm:mb-0">
              <div className="flex items-center justify-between" onClick={() => setShowCommunity(!showCommunity)}>
                <h6 className='text-gray-800 text-[17px] font-medium'>Community</h6>
                <ChevronDownIcon className='h-5 w-5 sm:hidden' />
              </div>
              <div className={`${showCommunity ? 'flex' : 'hidden sm:flex'} flex-col gap-3 text-gray-500 text-[17px]`}>
                <span className='cursor-pointer hover:underline'>Customer Success Stories</span>
                <span className='cursor-pointer hover:underline'>Community Hub</span>
                <span className='cursor-pointer hover:underline'>Forum</span>
                <span className='cursor-pointer hover:underline'>Events</span>
                <span className='cursor-pointer hover:underline'>Blog</span>
                <span className='cursor-pointer hover:underline'>Influencers</span>
                <span className='cursor-pointer hover:underline'>Affiliates</span>
                <span className='cursor-pointer hover:underline'>Podcast</span>
                <span className='cursor-pointer hover:underline'>Invite a friend</span>
                <span className='cursor-pointer hover:underline'>Become a Seller</span>
                <span className='cursor-pointer hover:underline'>Community Standards</span>
              </div>
            </div>
            {/* 5th Col */}
            <div className="flex-1 flex flex-col justify-between sm:justify-normal gap-3">
              <div className="flex items-center justify-between" onClick={() => setShowFiverr(!showFiverr)}>
                <h6 className='text-gray-800 text-[17px] font-medium'>More From Fiverr</h6>
                <ChevronDownIcon className='h-5 w-5 sm:hidden' />
              </div>
              <div className={`${showFiverr ? 'flex' : 'hidden sm:flex'} flex-col gap-3 text-gray-500 text-[17px]`}>
                <span className='cursor-pointer hover:underline'>Fiverr Business</span>
                <span className='cursor-pointer hover:underline'>Fiverr Pro</span>
                <span className='cursor-pointer hover:underline'>Fiverr Logo Maker</span>
                <span className='cursor-pointer hover:underline'>Fiverr Guides</span>
                <span className='cursor-pointer hover:underline'>Get Inspired</span>
                <span className='cursor-pointer hover:underline'>Fiverr Select</span>
                <span className='cursor-pointer hover:underline'>ClearVoice</span>
                <span className='cursor-pointer hover:underline'>Fiverr Workspace</span>
                <span className='cursor-pointer hover:underline'>Learn</span>
                <span className='cursor-pointer hover:underline'>Working Not Working</span>
              </div>
            </div>
          </div>
          <hr />
          {/* Bottom */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 sm:gap-0 md:justify-between py-5">
            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center sm:gap-5">
              <span className='text-gray-800/60 font-extrabold tracking-tight text-[28px] mb-1'>fiverr<span className='text-gray-300 text-3xl'>.</span></span>
              <span className='text-gray-400 text-sm'>© Fiverr International Ltd. 2023</span>
            </div>
            {/* Right */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
              <div className="flex items-center gap-7">
                <img src="images/twitter.png" alt="" className='w-5 h-auto cursor-pointer' />
                <img src="images/facebook.png" alt="" className='w-5 h-auto cursor-pointer' />
                <img src="images/linkedin.png" alt="" className='w-5 h-auto cursor-pointer' />
                <img src="images/pinterest.png" alt="" className='w-5 h-auto cursor-pointer' />
                <img src="images/instagram.png" alt="" className='w-5 h-auto cursor-pointer' />
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <img src="images/language.png" alt="" className='w-4 h-auto' />
                  <span className='text-sm font-medium text-gray-500'>English</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="images/coin.png" alt="" className='w-4 h-auto' />
                  <span className='text-sm font-medium text-gray-500'>US</span>
                </div>
                <div className='flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-none'>
                  <img src="images/accessibility.png" alt="" className='w-5 h-5' />
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer