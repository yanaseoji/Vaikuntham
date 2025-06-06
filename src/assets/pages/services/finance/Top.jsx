import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
    return (
        <div id="top" style={{ '--image-url': `url(/images/finance-page-images/top-banner.jpg)` }} className="relative min-h-[60vh] sm:min-h-[100vh] max-h-[30vh] bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/70 before:z-10">
            <div className="container mx-auto px-4 py-50 md:py-24 flex flex-col  md:flex-row items-center justify-center min-h-[60vh] z-20">
                <div className="w-3/4 text-white flex flex-col gap-2 sm:gap-5 justify-center items-center text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5">Finance</h2>
                    <button className="border-2 rounded-sm px-2 py-2 sm:px-4 border-secondary font-bold text-base sm:text-lg cursor-pointer tracking-[2px] hover:bg-black duration-200">
                         <Link to='/contact'>Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Top;
