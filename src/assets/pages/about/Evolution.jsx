import React from 'react'

function Evolution() {
    return (
        <div id='evolution' className='w-[95vw] container grid grid-cols-1 md:grid-cols-2 mx-auto my-5 py-8 lg:py-10'>
            <div className='px-0 sm:px-8 py-0 md:py-10'>
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
                <div className='h-full w-full'>
                    <img src="/images/about-page-images/evolution.jpg" alt="evolution" className='relative rounded-2xl h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default Evolution
