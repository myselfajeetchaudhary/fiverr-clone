import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Hero() {
  const heroL = [];
  heroL[0] = "/bg-hero-6-1792-x2.webp";
  heroL[1] = "/bg-hero-1-1792-x2.webp";
  heroL[2] = "/bg-hero-2-1792-x2.webp";
  heroL[3] = "/bg-hero-3-1792-x2.webp";
  heroL[4] = "/bg-hero-4-1792-x2.webp";
  heroL[5] = "/bg-hero-5-1792-x2.webp";

  const heroS = [];
  heroS[0] = "/bg-hero-6-900-x2.webp";
  heroS[1] = "/bg-hero-1-900-x2.webp";
  heroS[2] = "/bg-hero-2-900-x2.webp";
  heroS[3] = "/bg-hero-3-900-x2.webp";
  heroS[4] = "/bg-hero-4-900-x2.webp";
  heroS[5] = "/bg-hero-5-900-x2.webp";

  const heroBg = [
    {artist: "Valentina", service: "AI Artist", rank: "⭐⭐⭐⭐⭐"},
    {artist: "Andrea", service: "Fashion Designer", rank: ""},
    {artist: "Moon", service: "Marketing Expert", rank: "⭐⭐⭐⭐⭐"},
    {artist: "Ritika", service: "Shoemaker and Designer", rank: ""},
    {artist: "Zach", service: "Bar Owner", rank: ""},
    {artist: "Gabrielle", service: "Video Editor", rank: "⭐⭐⭐⭐⭐"},
  ]
  const colors = ['#1a1b1d', '#023a15', '#b64762', '#540e1f', '#023a15', '#7d1a00']
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const change = () => {
      index > 4 ? setIndex(0) : setIndex(index + 1);
    };
    const intervalId = setInterval(change, 7000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      {/* Hero Section */}
      <section className={`flex justify-center -mt-[40px] sm:-mt-[80px]`} style={{backgroundColor: `${colors[index]}`, }}>
        {/* Hero Section */}
        <div className="w-[1400px] h-[330px] sm:h-[420px] md:h-auto bg-[#1a1b1d] md:bg-inherit relative flex justify-between">
          {/* Text Part */}
          <div className="absolute z-20 flex flex-col gap-5 md:items-start px-20 md:px-0 md:pl-8 pt-16 sm:pt-24 md:pt-56">
            <h1
              className="text-white text-3xl sm:text-4xl lg:text-5xl sm:leading-[60px] font-IBM font-extrabold md:max-w-xl"
              style={{ wordSpacing: "3px" }}
            >
              Find the right{" "}
              <span className="font-Playfair tracking-wide font-medium">
                freelance service
              </span>
              , right away
            </h1>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0">
              <input
                type="search"
                placeholder="Search for any service..."
                className="py-3 outline-none rounded-[4px] md:rounded-none md:rounded-l-[4px] md:w-[600px] h-auto pl-5 placeholder:text-lg"
              />
              <button type="button" className="flex items-center justify-center bg-[#1dbf73] py-[14px] px-5 rounded-[4px] md:rounded-none md:rounded-r-[4px]">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-[15px] text-white font-semibold">
                Popular:
              </span>
              <button
                type="button"
                className="px-3 pb-[2px] border rounded-full outline-none text-white font-semibold hover:bg-white hover:text-gray-900"
              >
                Website Design
              </button>
              <button
                type="button"
                className="px-3 pb-[2px] border rounded-full outline-none text-white font-semibold hover:bg-white hover:text-gray-900"
              >
                Wordpress
              </button>
              <button
                type="button"
                className="px-3 pb-[2px] border rounded-full outline-none text-white font-semibold hover:bg-white hover:text-gray-900"
              >
                Logo Design
              </button>
              <button
                type="button"
                className="px-3 pb-[2px] border rounded-full outline-none text-white font-semibold hover:bg-white hover:text-gray-900"
              >
                AI Services
              </button>
            </div>
          </div>
          {/* Image Part */}
          <div key={heroL[index]}>
            {/* Image */}
            <div>
              <div className={`${index === 0 ? 'fade' : 'opacity-0'} relative z-[6]`}>
                <img src={heroL[0]} alt="" className="hidden lg:block object-cover w-screen h-[680px] overflow-visible" />
                <img src={heroS[0]} alt="" className="hidden md:block lg:hidden object-cover w-screen h-[680px] overflow-visible" />
              </div>
              <div className={`${index === 1 ? 'fade' : 'opacity-0'} absolute top-0 z-[5]`}>
                <img src={heroL[1]} alt="" className="hidden lg:block object-cover w-screen h-[680px] overflow-visible" />
                <img src={heroS[1]} alt="" className="hidden md:block lg:hidden object-cover w-screen h-[680px] overflow-visible" />
              </div>
              <div className={`${index === 2 ? 'fade' : 'opacity-0'} absolute top-0 z-[4]`}>
                <img src={heroL[2]} alt="" className="hidden lg:block object-cover w-screen h-[680px] overflow-visible" />
                <img src={heroS[2]} alt="" className="hidden md:block lg:hidden object-cover w-screen h-[680px] overflow-visible" />
              </div>
              <div className={`${index === 3 ? 'fade' : 'opacity-0'} absolute top-0 z-[3]`}>
                <img src={heroL[3]} alt="" className="hidden lg:block object-cover w-screen h-[680px] overflow-visible" />
                <img src={heroS[3]} alt="" className="hidden md:block lg:hidden object-cover w-screen h-[680px] overflow-visible" />
              </div>
              <div className={`${index === 4 ? 'fade' : 'opacity-0'} absolute top-0 z-[2]`}>
                <img src={heroL[4]} alt="" className="hidden lg:block object-cover w-screen h-[680px] overflow-visible" />
                <img src={heroS[4]} alt="" className="hidden md:block lg:hidden object-cover w-screen h-[680px] overflow-visible" />
              </div>
              <div className={`${index === 5 ? 'fade' : 'opacity-0'} absolute top-0 z-[1]`}>
                <img src={heroL[5]} alt="" className="hidden lg:block object-cover w-screen h-[680px] overflow-visible" />
                <img src={heroS[5]} alt="" className="hidden md:block lg:hidden object-cover w-screen h-[680px] overflow-visible" />
              </div>
            </div>
            {/* Artist Name */}
            <div className="hidden md:flex flex-col absolute bottom-12 lg:bottom-8 right-8 z-[10]">
              <p>{heroBg[index].rank}</p>
              <p className="text-lg text-white">{heroBg[index].artist}, <span className="font-semibold">{heroBg[index].service}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-gray-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-5 md:gap-[60px] py-2 md:py-4">
          <span className="hidden md:block font-semibold text-gray-400 text-[17px] -mr-3">
            Trusted by:
          </span>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png"
            alt=""
            className="w-auto h-[50px] md:h-[60px]"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png"
            alt=""
            className="w-auto h-[50px] md:h-[60px]"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png"
            alt=""
            className="w-auto h-[50px] md:h-[60px]"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.0d06f7b.png"
            alt=""
            className="w-auto h-[50px] md:h-[60px]"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.d2fa54d.png"
            alt=""
            className="w-auto h-[50px] md:h-[60px]"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
