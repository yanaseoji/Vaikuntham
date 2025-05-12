import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div id="top" style={{ '--image-url': `url(/images/home-images/top-banner.jpg)` }}   className="relative min-h-[60vh] sm:min-h-[95vh] max-h-[30vh] bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/70 before:z-10">
      <div className="container mx-auto px-4 py-50 md:py-24 flex flex-col  md:flex-row items-center justify-center min-h-[60vh] z-20">
        <div className="w-3/4 text-white flex flex-col gap-2 sm:gap-5 justify-center items-center text-center">
          <h2 className="text-base sm:text-xl text-center">Your Partner in Progress</h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Your Vision, Elevating Your <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/10 after:bg-red-500">Success</span>
          </h1>
          <button className="border-2 rounded-sm px-2 py-2 sm:px-4 border-secondary font-bold text-base sm:text-lg cursor-pointer tracking-[2px] hover:bg-black duration-200 capitalize">
            <Link to='/contact'>Book Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
