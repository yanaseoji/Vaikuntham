import React from 'react'

const Procedures = () => {

  return (
    <div id='features' className='container flex justify-center mx-auto my-5 lg:my-30 py-15 lg:py-20'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="h-full">
          <div className="text-center mb-16">
            <span className='text-lg text-secondary font-semibold'>Features</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 capitalize">Our Core features</h2>
            <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto">
              Our mission is to empower visionary organizations by delivering bespoke, innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="/images/home-images/feature-icon1.svg" className="img-fluid" alt="Homeopathy 1" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                  Quick Solutions
                </h3>
                <p className="text-secondary">
                We deliver rapid, effective solutions tailored to your business needs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="/images/home-images/feature-icon2.svg" className="img-fluid " alt="Homeopathy 2" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                  Expert advice
                </h3>
                <p className="text-secondary">
                Our seasoned consultants provide trusted, industry-leading guidance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="/images/home-images/feature-icon3.svg" className="img-fluid" alt="Homeopathy 3" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                  Strategic planning
                </h3>
                <p className="text-secondary">
                We craft comprehensive strategies to drive sustainable growth.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="/images/home-images/feature-icon4.svg" className="img-fluid" alt="Homeopathy 4" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                  Efficient operations
                </h3>
                <p className="text-secondary">
                We streamline your processes for maximum productivity and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Procedures
