import React from 'react'
import WeatherApp from '../assets/weather-app.png';
import NoteTakerApp from '../assets/note-taker-app.png'
import TeamProfile from '../assets/team-profile-app.png'
import PasswordGeneratorApp from '../assets/password-generator-app.png'
import DaySchedulerApp from '../assets/day-scheduler-app.png'
import Github from '../assets/github.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-amber-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl bg-black font-bold text-white tracking-wider'>
                Weather App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://vietthom.github.io/weather-dashboard/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/vietthom/weather-dashboard' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${NoteTakerApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold bg-black text-white tracking-wider'>
                Note Taker App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://note-up-app.herokuapp.com/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/vietthom/Note_taker' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TeamProfile})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl bg-black font-bold text-white tracking-wider'>
                Team Profile Generator App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://youtu.be/YG6fI2XAZbc' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/vietthom/team-profile-generator' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PasswordGeneratorApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl bg-black font-bold text-white tracking-wider'>
                Random Password Generator App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/vietthom/password_generator' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${DaySchedulerApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl bg-black font-bold text-white tracking-wider'>
                Day Scheduler App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://vietthom.github.io/day_scheduler/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/vietthom/day_scheduler' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Github})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl bg-black font-bold text-white tracking-wider'>
                Github ReadMe Generator App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://youtu.be/B_LIgnOV97M' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/vietthom/README_Generator' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work