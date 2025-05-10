import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
    return (
        <div id="top" style={{ '--image-url': `url(/images/about-page-images/top-banner.jpg)` }} className="relative min-h-[60vh] sm:min-h-[95vh] max-h-[30vh] bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/70 before:z-10">
            <div className="container mx-auto px-4 py-50 md:py-24 flex flex-col  md:flex-row items-center justify-center min-h-[60vh]">
                <div className="w-3/4 text-white mb-8 md:mb-0 flex flex-col gap-5 justify-center items-center text-center z-20">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                        About
                    </h1>
                    <div className='capitalize flex gap-3 py-1 px-5 rounded-4xl bg-gray-500/75'>
                        <span className='hover:text-blue-400'>
                            <Link to={'/'}>Home</Link>
                        </span>
                        <span>/</span>
                        <span>About</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top
