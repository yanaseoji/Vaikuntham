import React from 'react'

const Addapoinment = () => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center  opacity-5" />
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            <h1 className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Experience Natural Wellness at an Affordable Price
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 leading-relaxed">
              "Experience top-quality homeopathic care at affordable prices. Our expert team uses holistic, natural remedies to restore your health and well-being.
               Book your consultation today and take the first step toward a healthier, happier you."
            </p>

            {/* <div className="mt-10">
            <butto"Experience Natural Wellness at an Affordable Price"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                         bg-gradient-to-r from-red-300 to-blue-400 rounded-full shadow-lg 
                         hover:from-red-300 hover:to-blue-300 transition-all duration-200 
                         transform hover:scale-105 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 focus:ring-offset-2"
              onClick={() => alert('Appointment scheduling would go here!')}
            >
              Get Appointment
            </button>
          </div> */}

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 text-red-300">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-red-300">15+</span>
                <span className="mt-2 text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold ">20k+</span>
                <span className="mt-2 text-sm text-gray-600">Happy Patients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold ">15+</span>
                <span className="mt-2 text-sm text-gray-600">Awards Wins</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold ">4.5</span>
                <span className="mt-2 text-sm text-gray-600">Patient Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addapoinment
