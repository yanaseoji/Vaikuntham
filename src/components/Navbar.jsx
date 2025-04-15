import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    


    <nav className="bg-gray-50 h-[8vh]">
      {/* <a
  href="https://wa.me/91 9351414903" 
  className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 animate-bounce"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.938 11.938 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.19 1.59 6.01L0 24l6.25-1.64A11.938 11.938 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.72 0-3.41-.44-4.91-1.27l-.35-.19-3.7.97.99-3.61-.22-.37A9.926 9.926 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.19-7.27l-2.69-.77a1 1 0 00-.96.26l-.6.61a8.08 8.08 0 01-3.7-3.7l.61-.6a1 1 0 00.26-.96l-.77-2.69a1 1 0 00-1.19-.71c-1.04.23-2.13 1.1-2.13 2.25 0 4.42 3.58 8 8 8 1.15 0 2.02-1.09 2.25-2.13a1 1 0 00-.71-1.19z" />
  </svg>
</a> */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch m-auto sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to={'/'}
              >
                <img className="h-15 w-auto " src="/logo.png" alt="Your Company" />
              </Link>           
               </div>


            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 justify-center items-center my-3">
                <Link to={'/'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Dashboard</Link>
                <Link to="/Labroatry" className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Laboratory</Link>
                <Link to={'/Products'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Products</Link>
                <Link to="/AboutUs" className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">AboutUs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
  <div className="bg-white space-y-1 px-2 pt-2 pb-3 z-50 relative">
    <Link 
      to={'/'} 
      onClick={() => setIsMenuOpen(false)} 
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
    >
      Dashboard
    </Link>
    <Link 
      to={"/Labroatry"} 
      onClick={() => setIsMenuOpen(false)} 
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
    >
      Laboratory
    </Link>
    <Link 
      to={'/Products'} 
      onClick={() => setIsMenuOpen(false)} 
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
    >
      Products
    </Link>
    <Link 
      to={"/AboutUs"} 
      onClick={() => setIsMenuOpen(false)} 
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
    >
      About us
    </Link>
  </div>
</div>



    </nav>
  );
};

export default Navbar;
