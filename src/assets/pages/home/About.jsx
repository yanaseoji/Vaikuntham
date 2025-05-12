import React from 'react'
import { Link } from 'react-router-dom';
const homesecondary = () => {
  return (
    <div id='about' className="w-[95vw] container mx-auto my-5 py-8 lg:py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Section - Images */}
        <div className="md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 ">
            <img
              src="/images/home-images/about-image.jpeg"
              alt="about"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 mt-5 sm:mt-16 md:mt-0">
          <h3 className='font-semibold text-secondary'>About us</h3>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Empowering your vision, guiding your growth
          </h2>
          <div className="space-y-4 text-primary">
            <p>
              At <span className='uppercase font-bold'>Vaikuntham</span>, we are dedicated to helping businesses and individuals unlock their full potential through expert advice and tailored solutions. With a team of seasoned professionals, we combine industry insight with innovative strategies to drive sustainable success. Partner with us to turn your challenges into opportunities and achieve lasting results.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='my-2 flex items-center gap-2 '>
                <img src="/images/home-images/experience.png" alt="" className='w-[50px] h-[50px] rounded-full p-2 bg-secondary' />
                <span>Expertise delivered</span>
              </div>
              <div className='my-2 flex items-center gap-2 '>
                <img src="/images/home-images/idea.png" alt="" className='w-[50px] h-[50px] rounded-full p-2 bg-secondary' />
                <span>Solutions crafted for success</span>
              </div>
              <div className='my-2 flex items-center gap-2 '>
                <img src="/images/home-images/achievement.png" alt="" className='w-[50px] h-[50px] rounded-full p-2 bg-secondary' />
                <span>Turning insights into achievements</span>
              </div>
              <div className='my-2 flex items-center gap-2 '>
                <img src="/images/home-images/success.png" alt="" className='w-[50px] h-[50px] rounded-full p-2 bg-secondary' />
                <span>Strategic solutions for your success</span>
              </div>
            </div>
            <Link to="/about">
              <button className="text-sm sm:text-lg font-semibold mt-4 border border-secondary hover:bg-secondary cursor-pointer text-black px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 ">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homesecondary