import React from 'react'

function Counter() {
    return (
        <div id='counter' className='container mx-auto px-4 my-5 lg:my-30 py-15 lg:py-20'>
            <div className='text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary font-bold'>
                Some Numbers
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 my-10 gap-2 md:gap-0">
                <div className="flex flex-col items-center border md:border-0 md:border-r border-gray-400 px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                    <span className="text-lg md:text-xl lg:text-3xl font-bold text-secondary">15+</span>
                    <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Years Experience</span>
                </div>
                <div className="flex flex-col items-center border md:border-0 md:border-r border-gray-400 px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                    <span className="text-lg md:text-xl lg:text-3xl font-bold text-secondary">20k+</span>
                    <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Happy Clients</span>
                </div>
                <div className="flex flex-col items-center border md:border-0 md:border-r border-gray-400 px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                    <span className="text-lg md:text-xl lg:text-3xl font-bold text-secondary">15+</span>
                    <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Awards Wins</span>
                </div>
                <div className="flex flex-col items-center border border-gray-400 md:border-0 px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                    <span className="text-lg md:text-xl lg:text-3xl font-bold text-secondary">4.5</span>
                    <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Client Rating</span>
                </div>
            </div>
        </div>
    )
}

export default Counter
