import React from 'react'

const Procedures = () => {


  return (
    <div className='container  from-gray-50 to-gray-100  flex justify-center m-auto pt-5'>
      <div className="  min-h-screen  bg-gradient-to-bpy-16 px-4 sm:px-6 lg:px-8">
        <div className="h-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Homeopathy Procedures</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer holistic homeopathic treatments tailored to your individual needs, focusing on natural healing methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="images/detox.png" className="img-fluid" alt="Homeopathy 1" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Homeopathic Detox
                </h3>
                <p className="text-gray-600">
                  Our Homeopathic Detox treatments help cleanse the body of toxins and restore balance to your health.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img  src="images/stress-relief.png" className="img-fluid " alt="Homeopathy 2" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Stress Relief
                </h3>
                <p className="text-gray-600">
                  Natural remedies for stress relief using homeopathic methods that promote mental clarity and emotional well-being.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="images/insomnia.png" className="img-fluid" alt="Homeopathy 3" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sleep Disorders
                </h3>
                <p className="text-gray-600">
                  Homeopathic treatments designed to help with insomnia, sleep apnea, and other sleep-related issues.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="images/immune.png" className="img-fluid" alt="Homeopathy 4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Immune System Boost
                </h3>
                <p className="text-gray-600">
                  Strengthen your immune system naturally with homeopathic remedies that support overall health.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="images/products.png" className="img-fluid" alt="Homeopathy 5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Skin Care & Rejuvenation
                </h3>
                <p className="text-gray-600">
                  Improve your skin health with homeopathic remedies that target acne, eczema, and other skin issues.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                  <img src="images/antihistamines.png" className="img-fluid" alt="Homeopathy 6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Allergy Relief
                </h3>
                <p className="text-gray-600">
                  Our homeopathic allergy treatments help alleviate symptoms like sneezing, congestion, and itchy eyes.
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
