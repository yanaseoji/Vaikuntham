import React from "react";
import Homesecondary from "./Homesecondary";
import CallusSection from "./CallusSection";
import Procedures from "./Procedures";
import Addapoinment from "./Addapoinment";



const homepage = () => {
  return (
    <div>
      <div className="min-h-[90vh] bg-[linear-gradient(to_right,#01578c_70%,#e7b5b5_70%),url('/public/mainimg.jpeg')] bg-cover bg-right bg-blend-multiply">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col  md:flex-row items-center justify-between min-h-[92vh]">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h2 className="text-xl mb-4">Your Health Matters to Us</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Homeopathy is supposed
              to work miracles.
            </h1>
          </div>
          <div className="md:w-1/2 max-w-lg w-full">
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg shadow-xl p-8 md:p-10">
              <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-center transform transition-all duration-500 hover:-translate-y-2 hover:text-indigo-600">
                Book a Free Consultation
              </h3>
              <form className="space-y-6">
                <div className="flex gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 px-6 py-3 border-2 border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 px-6 py-3 border-2 border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-200"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-3 border-2 border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-3 border-2 border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-200"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-3 border-2 border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-200"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r border-2 border-teal-300 from-teal-100 to-blue-100 text-gray-700 py-3 px-6 rounded-md focus:outline-none transition duration-300 transform hover:scale-105 hover:bg-opacity-90 shadow-lg hover:shadow-2xl"
                >
                  Book Now
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
      <Homesecondary />
      <CallusSection />
      <Procedures />
      <Addapoinment />
    </div>
  );
};
export default homepage;
