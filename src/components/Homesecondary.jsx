import React from 'react'
import { Link } from 'react-router-dom';
const homesecondary = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24 ">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-5">
          {/* Left Section - Images */}
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 ">
              <img
                src="/homeo.jpg"
                alt="homeopathy medicine"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden shadow-xl ">
              <img
                src="/doctor.jpg"
                alt="homeopathic Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="md:w-1/2 mt-16 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Committed To Homeopathy Excellence
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
              At our clinic, we are dedicated to delivering the highest standards of Homeopathic care. 
              Our experienced team blends tradition with innovation to offer natural, personalized treatments. 
              Your health and well-being are our top priority — trust us to guide you on your journey to lasting wellness.
              </p>
             <p>We strive to set the gold standard in Homeopathic care — offering expert treatments, compassionate service, and genuine results you can trust.</p>
              <Link to="/AboutUs">
              <button className="mt-4 bg-blue-300 hover:bg-blue-500 text-white px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 ">
                Know More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homesecondary