import React from 'react'

function Services() {
    const services = [
        {
            title: "Finance",
            icon: "/images/home-images/finance-icon.png",
            description: 'Unlock your financial potential with expert consultancy services tailored to your unique goals. Our seasoned advisors provide strategic guidance, helping you navigate investments, tax planning, and wealth management with confidence. Trust us to turn complex financial decisions into clear, actionable steps for lasting success. Partner with us and secure your financial future today!',
            image: '/images/home-images/finance.jpg',
        },
        {
            title: "Digital Marketing",
            icon: "/images/home-images/digital-icon.png",
            description: 'Unlock your financial potential with expert consultancy services tailored to your unique goals. Our seasoned advisors provide strategic guidance, helping you navigate investments, tax planning, and wealth management with confidence. Trust us to turn complex financial decisions into clear, actionable steps for lasting success. Partner with us and secure your financial future today!',
            image: '/images/home-images/digital.jpeg',
        },
        {
            title: "Healthcare",
            icon: "/images/home-images/healthcare-icon.png",
            description: 'Unlock your financial potential with expert consultancy services tailored to your unique goals. Our seasoned advisors provide strategic guidance, helping you navigate investments, tax planning, and wealth management with confidence. Trust us to turn complex financial decisions into clear, actionable steps for lasting success. Partner with us and secure your financial future today!',
            image: '/images/home-images/healthcare.jpg',
        },
        {
            title: "Softaware development",
            icon: "/images/home-images/software-icon.png",
            description: 'Unlock your financial potential with expert consultancy services tailored to your unique goals. Our seasoned advisors provide strategic guidance, helping you navigate investments, tax planning, and wealth management with confidence. Trust us to turn complex financial decisions into clear, actionable steps for lasting success. Partner with us and secure your financial future today!',
            image: '/images/home-images/software.jpeg',
        },
    ]

    return (
        <div id='services' className='container mx-auto px-4 my-5 lg:my-30 py-15 lg:py-20'>
            <div className='text-center'>
                <span className='text-sm sm:text-base md:text-xl text-secondary font-semibold'>Services</span>
                <div className='capitalize text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary font-bold'>Get our exclusive services</div>
            </div>
            <div className='p-0 sm:p-10 flex flex-col justify-center gap-5'>
                {/* service card start here */}

                {
                    services.map((service) => (
                        <div key={service.title} className='min-w-[250px] grid grid-cols-1 lg:grid-cols-2 bg-primary rounded-sm p-5 lg:p-5'>
                            <div className='text-white py-5 px-0 lg:px-10'>
                                <div className='capitalize text-lg sm:text-2xl md:text-2xl xl:text-4xl font-bold flex gap-2 items-center'>
                                    <img src={service.icon} alt={service.title + '-icon'} className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]' />
                                    <span>{service.title}</span>
                                </div>
                                <p className='text-start sm:text-justify tracking-[1px] sm:tracking-normal my-5 sm:my-8 text-sm md:text-base'>
                                    {service.description}
                                </p>
                                <button className='capitalize border-2 duration-150 hover:bg-secondary cursor-pointer border-secondary text-sm sm:text-base py-2 px-4 rounded-lg font-normal sm:font-semibold flex justify-center items-center gap-1 hover:gap-2'>
                                    <span>Get started</span>
                                    <img src="/images/home-images/arrow.png" alt="arrow" className='w-[25px] sm:w-[35px] h-[20px] sm:h-[30px]'/>
                                </button>
                            </div>
                            <div className='rounded-sm'>
                                <img src={service.image} alt={service.title} className='h-full w-full rounded-sm' />
                            </div>
                        </div>
                    ))
                }

                {/* service card end here */}
            </div>
        </div>
    )
}

export default Services
