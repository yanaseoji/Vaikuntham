import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const baseClasses = "rounded-md w-fit text-nowrap px-2 md:px-3 py-2 text-sm font-medium transition mx-5";

  return (
    <nav className="bg-gray-50 py-1 fixed top-0 w-full z-80 capitalize">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
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
          <div className="flex flex-1 items-center justify-center m-auto sm:justify-between">
            <div className="flex shrink-0 items-center">
              <Link to={'/'}
              >
                <img className="h-10 w-auto " src="/images/logo/Vaikuntham-Logo.png" alt="Your Company" />
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center my-3">
                <Link
                  to='/'
                  className={`${baseClasses} ${currentPath === '/'
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  Home
                </Link>
                <span className={`${baseClasses} group relative text-secondary cursor-pointer`}>
                  <span onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='w-full flex justify-center items-center gap-2'>
                    <span>Services</span>
                    <img src="/images/common/down.png" alt="down-arrow" className='w-[18px] group-hover:rotate-x-180 duration-200' />
                  </span>
                  <ul className={`group-hover:flex hidden w-fit absolute top-full left-0 px-5 py-5 flex-col gap-5 rounded-sm bg-gray-200`}>
                    <li className='py-1 border-b border-b-gray-400 cursor-pointer'><Link to='/finance'>Finance</Link></li>
                    <li className='py-1 border-b border-b-gray-400 cursor-pointer'><Link>Marketing & Software</Link></li>
                    <li className='py-1 border-b border-b-gray-400 cursor-pointer'><Link>Healthcare</Link></li>
                  </ul>
                </span>
                <Link
                  to='/about'
                  className={`${baseClasses} ${currentPath === '/about'
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  About
                </Link>
                <Link
                  to='/contact'
                  className={`${baseClasses} ${currentPath === '/contact'
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="bg-white space-y-4 px-2 pt-2 pb-3 z-50 relative text-xl">
          <Link
            to={'/'}
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-2 font-medium text-primary hover:border"
          >
            Home
          </Link>
          <div className='font-medium text-primary'>
            <span onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='hover:border rounded-md  px-3 py-2 cursor-pointer flex items-center gap-2'>
              <span>services</span>
              <img src="/images/common/down.png" alt="down-arrow" className={`w-[15px] h-[18px] group-hover:rotate-x-180 duration-200 pt-1 ${isDropDownOpen ? 'rotate-x-180' : 'rotate-0'}`} />
            </span>
            <ul className={`px-1 text-secondary  flex flex-col gap-6 text-base overflow-hidden ${isDropDownOpen ? 'h-fit py-5 border border-gray-300' : 'h-0 py-0'}`}>
              <li className='p-2 cursor-pointer hover:bg-secondary hover:text-white'>
                <Link onClick={() => {
                  setIsDropDownOpen(false);
                  setIsMenuOpen(false)
                }} to='/finance'>Finance</Link>
              </li>
              <li className='p-2 cursor-pointer hover:bg-secondary hover:text-white'>Digital</li>
              <li className='p-2 cursor-pointer hover:bg-secondary hover:text-white'>Software</li>
              <li className='p-2 cursor-pointer hover:bg-secondary hover:text-white'>Healtcare</li>
            </ul>
          </div>
          <Link
            to={"/about"}
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-2 font-medium text-primary hover:border"
          >
            About
          </Link>
          <Link
            to={'/contact'}
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-2 font-medium text-primary hover:border"
          >
            Contact
          </Link>
        </div>
      </div>



    </nav>
  );
};

export default Navbar;
