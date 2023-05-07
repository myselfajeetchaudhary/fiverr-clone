import React, { useEffect, useState, useRef } from 'react'
import { Bars3Icon, ChevronDownIcon, GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Navbar() {
    const wrapperRef = useRef(null);

    const [active, setActive] = useState(false);
    const [appear, setAppear] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        function isActive() {
            window.scrollY > 0 ? setActive(true) : setActive(false);
        }
        window.addEventListener('scroll', isActive);
        return() => {
            window.removeEventListener('scroll', isActive);
        };
    })
    useEffect(() => {
        function isAppear() {
            window.scrollY > 150 ? setAppear(true) : setAppear(false);
        }
        window.addEventListener('scroll', isAppear);
        return() => {
            window.removeEventListener('scroll', isAppear);
        };
    })
    function useOutsideDetecter(ref) {
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setHide(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return() => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [ref]);
}
    useOutsideDetecter(wrapperRef);
    const imgWhite = <Link to="/"><img src="/fiverr-white.png" alt="Fiverr Logo" className='max-w-[90px] h-auto' /></Link>;
    const imgBlack = <Link to="/"><img src="/fiverr-black.png" alt="Fiverr Logo" className='max-w-[90px] h-auto' /></Link>;
  return (
    <div className='sticky top-0 z-50'>
        <header className='relative'>
            <nav className={`${active ? 'bg-white' : 'bg-white sm:bg-transparent'} transition duration-500 ease-out`}>
                <div className="max-w-[1400px] h-[70px] md:h-[80px] mx-auto box-border px-5 md:px-8 py-5">
                {/* Top */}
                    <div>
                        {/* PC */}
                        <div className='hidden sm:flex items-center justify-between'>
                            {active ? imgBlack :imgWhite}
                            <div className= {`${appear ? 'block transition duration-75 ease-in' : 'hidden'} flex items-center`}>
                                <input
                                type="search"
                                placeholder="What service are you looking for today?"
                                className="py-2 outline-none border border-gray-300 rounded-l-[4px] w-auto h-auto xl:w-[450px] pl-5 placeholder:text-lg placeholder:text-gray-400"
                                />
                                <div className="flex bg-black/90 border border-black/90 py-[10px] px-[14px] justify-stretch rounded-r-[4px]">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div className={`hidden sm:flex items-center gap-6 text-[17px] font-IBM font-semibold whitespace-nowrap`}>
                                <div className='hidden lg:flex items-center gap-6'>
                                    <span className={`${active ? 'text-gray-500 hover:text-[#1dbf73]' : 'text-white'} cursor-pointer`}>Fiverr Business</span>
                                    <span className={`${active ? 'text-gray-500 hover:text-[#1dbf73]' : 'text-white'} cursor-pointer`}> Explore</span>
                                    <span className={`${active ? 'text-gray-500 hover:text-[#1dbf73]' : 'text-white'} flex items-center gap-1 cursor-pointer group`}><GlobeAltIcon className={`w-5 h-5 ${active ? 'text-gray-500 group-hover:text-[#1dbf73]' : 'text-white'}`} /> English</span>
                                    <span className={`${active ? 'text-gray-500 hover:text-[#1dbf73]' : 'text-white'} cursor-pointer`}>Become a Seller</span>
                                </div>
                                <span className={`${active ? 'text-gray-500 hover:text-[#1dbf73]' : 'text-white'} cursor-pointer`}>Sign In</span>
                                <button type='button' className={`${active ? 'text-[#1dbf73] border-[#1dbf73] hover:text-white' : 'text-white'} px-4 py-2 border outline-none text-sm font-bold rounded-[4px] hover:bg-[#1dbf73] hover:border-[#1dbf73]`}>Join</button>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className="sm:hidden flex items-center justify-between">
                            <div ref={wrapperRef} onClick={() => setHide(true)}>
                                <Bars3Icon className='w-8 h-8 text-gray-500' />
                            </div>
                            <Link to="/">
                                <img src="/fiverr-black.png" alt="Fiverr Logo" className='sm:hidden max-w-[90px] h-auto' />
                            </Link>
                            <button type='button' className='sm:hidden text-[17px] font-semibold text-gray-500 hover:text-gray-400'>Join</button>
                            {/* Hidden Mobile Navbar  */}
                            <div className={`${hide ? 'block' : 'hidden'} absolute top-0 left-0 bg-black/50 w-screen h-screen`}>
                                <div className="p-5 w-[280px] h-screen border-2 bg-white">
                                    <button type='button' className={`px-6 py-2 border outline-none text-[17px] text-white font-medium rounded-[4px] bg-[#1dbf73] border-[#1dbf73] mb-5`}>Join Fiverr</button>
                                    <ul className='flex flex-col gap-3 text-[17px] text-gray-400 font-medium mb-10'>
                                        <li className='cursor-pointer'>Sign in</li>
                                        <li className='cursor-pointer flex items-center justify-between'>Browse Categories <ChevronDownIcon className='h-5 w-5 sm:hidden' /></li>
                                        <li className='cursor-pointer flex items-center justify-between'>Explore <ChevronDownIcon className='h-5 w-5 sm:hidden' /></li>
                                        <li className='cursor-pointer text-[#1dbf73]'>Fiverr Business</li>
                                    </ul>
                                    <ul className='flex flex-col gap-3 text-[17px] text-gray-400 font-medium'>
                                        <li  className='text-base text-gray-800 cursor-pointer'>General</li>
                                        <hr />
                                        <li className='cursor-pointer'>Home</li>
                                        <li className='cursor-pointer flex items-center justify-between'>English <ChevronDownIcon className='h-5 w-5 sm:hidden' /></li>
                                        <li className='cursor-pointer flex items-center justify-between'>₹ INR <ChevronDownIcon className='h-5 w-5 sm:hidden' /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </nav>
            <hr className={`border-gray-200 ${appear ? 'opacity-100' : 'hidden'}`} />
            {/* Bottom */}
            <div className={`${appear ? 'hidden xl:flex' : 'hidden'} transition duration-150 ease-in-out bg-white`}>
                <div className="relative w-[1400px] whitespace-nowrap mx-auto flex items-center justify-between pt-2 pb-1 px-8">
                    {/* Graphics & Design */}
                    <div className='group'>
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Graphics & Design</span>
                        <div className="hidden absolute top-[38px] w-[1280px] group-hover:grid grid-cols-4 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Logo & Brand Identity</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Brand Style Guides</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Business Cards & Stationery</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Fonts & Typography</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Maker Tool</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Art & Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>AI Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Children's Book Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Portraits & Caricatures</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Cartoons & Comics</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Pattern Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Tattoo Design</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Web & App Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Website Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>App Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>UX Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Landing Page Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Icon Design</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Product & Gaming</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Industrial & Product Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Character Modeling</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Game Art</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Graphics for Streamers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Print Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Flyer Design</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Visual Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Image Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Presentation Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Background Removal</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Infographic Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Vector Tracing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Resume Design</span>               
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Marketing Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Media Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Posts & Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Email Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Web Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Signage Design</span>
                                </div>
                            </div>
                            {/* Column 4 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Architecture & Building Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Architecture & Interior Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Landscape Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Building Engineering</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Fashion & Merchandise</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>T-Shirts & Merchandise</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Fashion Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Jewelry Design</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>3D Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Architecture</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Industrial Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Fashion & Garment</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Printing Characters</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Landscape</span>
                                </div>
                            </div>   
                        </div>
                    </div>
                    {/* Digital Marketing */}
                    <div className='group'>
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Digital Marketing</span>
                        <div className="hidden absolute top-[38px] w-[940px] group-hover:grid grid-cols-3 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Search</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Search Engine Optimization (SEO)</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Search Engine Marketing (SEM)</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Local SEO</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>E-Commerce SEO</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Video SEO</span>                 
                                </div>      
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Social</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Media Marketing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Paid Social Media</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Influencer Marketing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Community Management</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-3">
                                <span className='text-[17px] font-medium text-gray-700'>Methods & Techniques</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Video Marketing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>E-Commerce Marketing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Email Marketing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Guest Posting</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Affiliate Marketing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Display Advertising</span>                 
                                <span className='cursor-pointer font-medium text-gray-500'>Public Relations</span>                 
                                <span className='cursor-pointer font-medium text-gray-500'>Text Message Marketing</span>                 
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Analytics & Strategy</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Marketing Strategy</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Marketing Advice</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Web Analytics</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Industry & Purpose-Specific</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Music Promotion</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Podcast Marketing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Book & eBook Marketing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Mobile App Marketing</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Miscellaneous</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Crowdfunding</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Other</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Writing & Translation */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Writing & Translation</span>
                        <div className="hidden absolute top-[38px] right-0 w-[1280px] group-hover:grid grid-cols-4 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Content Writing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Content Strategy</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Articles & Blog Posts</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Book & eBook Writing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Website Content</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Scriptwriting</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Creative Writing</span>                 
                                    <span className='cursor-pointer font-medium text-gray-500'>Podcast Writing</span>                 
                                    <span className='cursor-pointer font-medium text-gray-500'>Speechwriting</span>                 
                                    <span className='cursor-pointer font-medium text-gray-500'>Research & Summaries</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Translation & Transcription</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Translation</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Localization</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Transcription</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Editing & Critique</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Proofreading & Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Book Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Beta Reading</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Writing Advice</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Career Writing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Resume Writing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Cover Letters</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>LinkedIn Profiles</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Job Descriptions</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-3">
                                <span className='text-[17px] font-medium text-gray-700'>Business & Marketing Copy</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Brand Voice & Tone</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Business Names & Slogans</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Case Studies</span>
                                <span className='cursor-pointer font-medium text-gray-500'>White Papers</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Product Descriptions</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Ad Copy</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Sales Copy</span>               
                                <span className='cursor-pointer font-medium text-gray-500'>Email Copy</span>               
                                <span className='cursor-pointer font-medium text-gray-500'>Social Media Copy</span>               
                                <span className='cursor-pointer font-medium text-gray-500'>Press Releases</span>               
                                <span className='cursor-pointer font-medium text-gray-500'>UX Writing</span>               
                            </div>
                            {/* Column 4 */}
                            <div className="flex flex-col gap-3">
                                <span className='text-[17px] font-medium text-gray-700'>Miscellaneous</span>
                                <span className='cursor-pointer font-medium text-gray-500'>ELearning Content Development</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Technical Writing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Grant Writing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Other</span>
                            </div>
                        </div>
                    </div>
                    {/* Video & Animation */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Video & Animation</span>
                        <div className="hidden absolute top-[38px] right-0 w-[1280px] group-hover:grid grid-cols-4 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Editing & Post-Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Video Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Visual Effects</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Intro & Outro Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Video Templates Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Subtitles & Captions</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Social & Marketing Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Video Ads & Commercials</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Media Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Music Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Unboxing Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Slideshow Videos</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Animation</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Animation</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Character Animation</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Animated GIFs</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Animation for Kids</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Animation for Streamers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Lottie & Web Animation</span>                 
                                    <span className='cursor-pointer font-medium text-gray-500'>Rigging</span>                 
                                    <span className='cursor-pointer font-medium text-gray-500'>NFT Animation</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Filmed Video Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Videographers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Filmed Video Production</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Explainer Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Animated Explainers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Live Action Explainers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Spokesperson Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Screencasting Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>ELearning Video Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Crowdfunding Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Product Videos</span>               
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>3D Product Animation</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>E-Commerce Product Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Posts & Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Corporate Videos</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>App & Website Previews</span>
                                </div>
                            </div>
                            {/* Column 4 */}
                            <div className="flex flex-col gap-3">
                                <span className='text-[17px] font-medium text-gray-700'>Miscellaneous</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Article to Video</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Game Trailers</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Meditation Videos</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Real Estate Promos</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Book Trailers</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Video Advice</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Other</span>
                            </div>
                        </div>
                    </div>
                    {/* Music & Audio */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Music & Audio</span>
                        <div className="hidden absolute top-[38px] right-0 w-[960px] group-hover:grid grid-cols-3 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Music Production & Writing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Producers & Composers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Beat Making</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Singers & Vocalists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Session Musicians</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Songwriters</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Jingles & Intros</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Audio Engineering & Post Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Mixing & Mastering</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Audio Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Vocal Tuning</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Voice Over & Narration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Voice Over</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Female Voice Over</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Male Voice Over</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>German Voice Over</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>French Voice Over</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Spanish Voice Over</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Streaming & Audio</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Podcast Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Audiobook Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Audio Ads Production</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Voice Synthesis & AI</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>DJing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>DJ Drops & Tags</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>DJ Mixing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Remixing & Mashups</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Sound Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Sound Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Synth Presets</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Meditation Music</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Audio Logo & Sonic Branding</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Lessons & Transcriptions</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Online Music Lessons</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Music Transcription</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Music & Audio Advice</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Programming & Tech */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Programming & Tech</span>
                        <div className="hidden absolute top-[38px] right-0 w-[1280px] group-hover:grid grid-cols-4 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Logo & Brand Identity</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Brand Style Guides</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Business Cards & Stationery</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Fonts & Typography</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Maker Tool</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Art & Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>AI Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Children's Book Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Portraits & Caricatures</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Cartoons & Comics</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Pattern Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Tattoo Design</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Web & App Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Website Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>App Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>UX Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Landing Page Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Icon Design</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Product & Gaming</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Industrial & Product Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Character Modeling</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Game Art</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Graphics for Streamers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Print Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Flyer Design</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Visual Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Image Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Presentation Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Background Removal</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Infographic Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Vector Tracing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Resume Design</span>               
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Marketing Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Media Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Posts & Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Email Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Web Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Signage Design</span>
                                </div>
                            </div>
                            {/* Column 4 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Architecture & Building Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Architecture & Interior Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Landscape Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Building Engineering</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Fashion & Merchandise</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>T-Shirts & Merchandise</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Fashion Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Jewelry Design</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>3D Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Architecture</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Industrial Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Fashion & Garment</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Printing Characters</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Landscape</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Photography */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Photography</span>
                        <div className="hidden absolute top-[38px] right-0 w-[640px] group-hover:grid grid-cols-2 bg-white px-8 pt-5 pb-10 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Products & Lifestyle</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Product Photographers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Food Photographers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Lifestyle & Fashion Photographers</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>People & Scenes</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Portrait Photographers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Event Photographers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Real Estate Photographers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Aerial Photographers</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-3">
                                <span className='text-[17px] font-medium text-gray-700'>Miscellaneous</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Photography Classes</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Image Editing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Modeling & Acting</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Styling & Beauty</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Other</span>                 
                            </div>
                        </div>
                    </div>
                    {/* Business */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>Business</span>
                        <div className="hidden absolute top-[38px] right-0 w-[1280px] group-hover:grid grid-cols-4 bg-white p-5 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Logo & Brand Identity</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Brand Style Guides</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Business Cards & Stationery</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Fonts & Typography</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Logo Maker Tool</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Art & Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>AI Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Children's Book Illustration</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Portraits & Caricatures</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Cartoons & Comics</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Pattern Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Tattoo Design</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Web & App Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Website Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>App Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>UX Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Landing Page Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Icon Design</span>                 
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Product & Gaming</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Industrial & Product Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Character Modeling</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Game Art</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Graphics for Streamers</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Print Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Flyer Design</span>
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Visual Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Image Editing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Presentation Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Background Removal</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Infographic Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Vector Tracing</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Resume Design</span>               
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Marketing Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Media Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Social Posts & Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Email Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Web Banners</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Signage Design</span>
                                </div>
                            </div>
                            {/* Column 4 */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Architecture & Building Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Architecture & Interior Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Landscape Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Building Engineering</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>Fashion & Merchandise</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>T-Shirts & Merchandise</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Fashion Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Jewelry Design</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>3D Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Architecture</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Industrial Design</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Fashion & Garment</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Printing Characters</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>3D Landscape</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* AI Services */}
                    <div className="group">
                        <span className='cursor-pointer text-gray-600 font-IBM text-[17px] pb-1 border-b-[3px] border-opacity-0 hover:border-opacity-100 border-[#1dbf73]'>AI Services</span>
                        <div className="hidden absolute top-[38px] right-0 w-[540px] group-hover:grid grid-cols-2 bg-white px-8 pt-5 pb-10 border">
                            {/* Column 1 */}
                            <div className='flex flex-col gap-5'>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>AI Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Midjourney Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>DALL-E Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>Stable Diffusion Artists</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-[17px] font-medium text-gray-700'>AI Applications</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>ChatGPT Applications</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>AI Artists</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>AI Web Applications</span>
                                    <span className='cursor-pointer font-medium text-gray-500'>AI Chatbots</span>
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-3">
                                <span className='text-[17px] font-medium text-gray-700'>Other Services</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Data Science & AI</span>
                                <span className='cursor-pointer font-medium text-gray-500'>AI Music Videos</span>
                                <span className='cursor-pointer font-medium text-gray-500'>AI Content Editing</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Fact Checking</span>
                                <span className='cursor-pointer font-medium text-gray-500'>Voice Synthesis & AI</span>                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={`border-gray-200 ${appear ? 'opacity-100' : 'hidden'}`} />
        </header>
    </div>
  )
}

export default Navbar