import React from 'react'
import { Link } from 'react-router-dom'

const CallusSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-14 p-24 md:p-4 md:mx-14 m-24 md:m-4 h-auto flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
      {/* Call Us Today Card */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 flex flex-col items-center">
        <div className="text-center text-white">
          <div className="font-semibold text-2xl mb-3 transition-transform duration-300 hover:scale-105">
            Call Us Today
          </div>
          <p className="text-base text-gray-100 mb-6">
          "Connect with our expert homeopathic consultants today. Personalized, natural solutions tailored just for you — your journey to wellness starts here!"
          </p>
          <button className="mt-auto cursor-pointer bg-white text-pink-600 font-semibold py-2 px-6 rounded-full hover:bg-pink-100 transition-all duration-300">
          <a href="tel:+919351414903">
          Call Now

                </a> 
          </button>
        </div>
      </div>
  
      {/* Laboratory Card */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-teal-400 to-blue-500 p-6 flex flex-col items-center">
        <div className="text-center text-white">
         
            <div className="font-semibold text-2xl mb-3 transition-transform duration-300 hover:scale-105">
              Laboratory
            </div>
        
          <p className="text-base text-gray-100 mb-6">
            Discover our comprehensive range of laboratory services designed to ensure the highest quality in homeopathic medicine.
          </p>
          <Link to="/Labroatry">
            <button className="mt-auto cursor-pointer bg-white text-teal-600 font-semibold py-2 px-6 rounded-full hover:bg-teal-100 transition-all duration-300">
              Explore Lab
            </button>
          </Link>
        </div>
      </div>
  
      {/* Products Card */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 flex flex-col items-center">
        <div className="text-center text-white">
            <div className="font-semibold text-2xl mb-3 transition-transform duration-300 hover:scale-105">
              Products
            </div>
          <p className="text-base text-gray-100 mb-6">
            Discover our comprehensive range of products with the highest quality in homeopathic medicines.
          </p>
          <Link to="/Products">
            <button className="mt-auto bg-white cursor-pointer text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition-all duration-300">
              View Products
            </button>
          </Link>
        </div>
      </div>
  
    </div>
  </div>
  )
}
export default CallusSection