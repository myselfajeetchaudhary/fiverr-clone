import React from 'react'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Slide from '../components/Slide'
import CatCard from '../components/CatCard'
import { cards } from '../data'
import Features from '../components/Features'

function Home() {
  const [slidesToShow, setSlidesToShow] = useState(5);

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 640) {
            return setSlidesToShow(1);
          } else if (window.innerWidth < 768) {
            return setSlidesToShow(2);
          } else if (window.innerWidth < 1024) {
            return setSlidesToShow(3);
          } else if (window.innerWidth < 1280) {
            return setSlidesToShow(4);
          }else {
            return setSlidesToShow(5);
          }
        }
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        };
    })
  return (
    <>
      <Hero />
      <section className='flex justify-center'>
        <div className='w-[1400px] pl-8 py-20'>
          <h3 className='text-[32px] text-gray-700 font-bold mb-5'>Popular services</h3>
          <Slide slidesToShow={slidesToShow} arrowsScroll={5}>
            {cards.map((card) => <CatCard key={card.id} item={card} />)}
          </Slide>
        </div>
      </section>
      <Features />
    </>
  )
}

export default Home