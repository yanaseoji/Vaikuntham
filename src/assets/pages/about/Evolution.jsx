import React from 'react'

function Evolution() {
    return (
        <div id='evolution' className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 mx-auto my-5 lg:my-30 py-15 lg:py-20'>
            <div className='px-0 sm:px-10 py-0 md:py-10'>
                <div className='capitalize text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-5'>Our Evolution</div>
                <p className='text-sm sm:text-base text-secondary font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est inventore in totam nobis reiciendis sunt assumenda facere, a libero, distinctio incidunt cum iure sequi veritatis tenetur repellendus pariatur quia?</p>
                <div className='grid grid-cols-2 md:grid-cols-2 my-10 gap-2 md:gap-0'>
                    <div className="flex flex-col items-center border md:border-0 md:border-r border-gray-400 px-1 md:px-2 lg:px-5 py-2 md:py-5 lg:py-10 capitalize">
                        <span className="text-base md:text-lg lg:text-xl font-bold text-secondary">15+</span>
                        <span className="mt-2 text-sm sm:text-base lg:text-lg font-semibold text-primary">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center border md:border-0 border-gray-400 px-1 md:px-2 lg:px-5 py-2 md:py-5 lg:py-10 capitalize">
                        <span className="text-base md:text-lg lg:text-xl font-bold text-secondary">15+</span>
                        <span className="mt-2 text-sm sm:text-base lg:text-lg font-semibold text-primary">Awards Wins</span>
                    </div>
                </div>
            </div>
            <div className='px-0 sm:px-10 py-0 sm:py-10'>
                <div className='relative h-full before:content-[] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/15 before:rounded-2xl shadow-xl'>
                    <img src="/images/about-page-images/evolution.jpg" alt="evolution"  className='rounded-2xl h-full z-20'/>
                </div>
            </div>
        </div>
    )
}

export default Evolution
