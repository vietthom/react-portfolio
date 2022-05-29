import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-amber-600 text-600'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Thom Le</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a software engineer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I specialize in full-stack web development creating exceptional digital experiences. 
            I'm focused on building responsive full-stack web applications. Let's work together!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-cener hover:bg-amber-600 hover:border-amber-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home