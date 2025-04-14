import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="">
      <footer className=" bg-gray-100 w-full shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex  space-x-3">
              <div className='imglogo flex justify-center m-auto items-center  ' >
                <img className='h-[81px]' src="/logo.png" alt="" />
                {/* <p className='text-sm font-bold '> Gental Cure Homeopathic Clinic</p> */}
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Call Us</h3>
              <div className="space-y-3">
                <a href="tel:+91 9351414903" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  +91 9351414903
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Reach Us</h3>
              <div className="flex items-start space-x-2 text-gray-600">
                <p>Gentle Cure Homeopathic Clinic
                  Shop no. 37, Opposite MDM Hospital Rd, Shastri Nagar, Jodhpur</p>
              </div>
            </div>

            {/* <div className="space-y-3 flex-col">
              <h3 className="text-gray-900 font-semibold mb-4">Open Hours</h3>

              <div className="flex items-center text-gray-600">
                <div>
                  <p>Mon-Fri 10:00am - 7:00pm</p>
                  <p>Sat-Sun 10:00am – 2:00pm</p>
                </div>
              </div>
            </div> */}
            <div className="space-y-3 font-semibold">
              Follow Us
              <div className="flex items-center text-gray-600">
                <div className='flex items-center mt-3 gap-1 mb-4'>
                  <Link to="https://www.facebook.com/share/16TJU8L29J/"><img className='h-[23px] mr-2' src="/facebook.png" alt="facebook"title='facebook icon' /></Link>

                  <Link to="https://www.youtube.com/channel/UChKJNJ1GCLX_zN393Jg6voA"><img className='h-[23px] mr-2' src="/youtube.png" alt=" youtube icon" title='youtube icon' /></Link>
                  <Link to="https://www.instagram.com/dr.kshitejbhati/?hl=en"><img className='h-[23px] mr-2' src="/instagram.png" alt="instagram icon" title='instagram icon'/></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                Copyright © 2025 Gental Cure Homeopathic Clinic
              </p>

              <p className="text-gray-500 text-sm mt-4 md:mt-0">
                Powered by Gental Cure Homeopathic Clinic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
