import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 h-[8vh]">
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
                <img className="h-15 w-auto " src="images/logo.png" alt="Your Company" />
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
