import React, { useState } from 'react'
import Slider from "react-slick";

function CustomSlides({ review }) {
    let reviews = Object.values(review)
    console.log(reviews)

    return (
        <div className='w-full grid grid-rows-1 bg-gray-100 rounded-xl py-5 md:py-4 px-5 cursor-pointer hover:bg-gray-200'>
            <div className='flex gap-2 px-0 xl:px-5'>
                <div className='min-w-[30px] w-1/3 md:w-1/2'>
                    <img src="/images/home-images/quotes.png" alt="quotes-icon" />
                </div>
                <p className='pb-5 h-fit text-lg md:text-sm xl:text-base text-secondary tracking-[1px] border-b border-b-gray-300'>{reviews[2]}</p>
            </div>
            <div className='px-8 md:px-5 flex items-center gap-5 mt-10'>
                <img src={reviews[1]} alt="profile" className='w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] shadow-[0px_0px_10px_rgba(2,2,2,2.25)] rounded-full' />
                <span className='text-xl xl:text-2xl text-primary font-bold'>{reviews[0]}</span>
            </div>
        </div>
    )
}

function Reviews() {
    const reviews = [
        {
            clients: "name1",
            image: '/images/home-images/profile.png',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum alias quod exercitationem at voluptatum similique voluptates, magnam sunt, animi modi incidunt quos cumque eius pariatur optio distinctio corporis error laborum.'
        },
        {
            clients: "name2",
            image: '/images/home-images/profile.png',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum alias quod exercitationem at voluptatum similique voluptates, magnam sunt, animi modi incidunt quos cumque eius pariatur optio distinctio corporis error laborum.'
        },
        {
            clients: "name3",
            image: '/images/home-images/profile.png',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum alias quod exercitationem at voluptatum similique voluptates, magnam sunt, animi modi incidunt quos cumque eius pariatur optio distinctio corporis error laborum.'
        },
        {
            clients: "name4",
            image: '/images/home-images/profile.png',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum alias quod exercitationem at voluptatum similique voluptates, magnam sunt, animi modi incidunt quos cumque eius pariatur optio distinctio corporis error laborum.'
        },
        {
            clients: "name5",
            image: '/images/home-images/profile.png',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum alias quod exercitationem at voluptatum similique voluptates, magnam sunt, animi modi incidunt quos cumque eius pariatur optio distinctio corporis error laborum.'
        },
    ]

    const [slides, setSlides] = useState(reviews.map((review, index) => (index)));
    console.log(slides.length)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div id='testimonial' className='container mx-auto px-4 my-5 lg:my-30 py-15 lg:py-20'>
            <div className='flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 px-0 sm:px-5'>
                <div className='w-full md:w-1/2'>
                    <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 ">
                        <img
                            src="/images/about-page-images/testimonials.jpg"
                            alt="about"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="flex flex-row sm:flex-col gap-5 absolute w-full sm:w-2/5 md:w-1/2 lg:w-2/5 h-1/2 sm:h-4/5 md:h-2/3 lg:h-4/5 top-3/4 sm:top-1/12 right-0 sm:right-5 px-2 pb-5">
                            <div className='h-1/2 w-1/2 sm:w-auto rounded-xl backdrop-blur-[10px] flex flex-col justify-center items-center capitalize bg-white/30'>
                                <span className='text-base sm:text-xl text-black font-bold'>20k+</span>
                                <span className='text-[10px] sm:text-sm xl:text-base font-semibold text-gray-700'>Happpy Clients</span>
                            </div>
                            <div className="h-1/2 w-1/2 sm:w-auto rounded-xl backdrop-blur-[10px] flex flex-col justify-center items-center capitalize bg-white/30">
                                <span className='text-base sm:text-xl text-black font-bold'>15+</span>
                                <span className='text-[10px] sm:text-sm xl:text-base font-semibold text-gray-700'>Client Rating</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-5 sm:mt-16 md:mt-0'>
                    <div>
                        <div className='font-semibold text-secondary'>Testimonials</div>
                        <div className='capitalize text-xl md:text-2xl lg:text-4xl font-bold text-primary'>Our clients testimonials</div>
                    </div>

                    {/* Reviews box start here */}
                    <div className='py-10 w-full'>
                        <Slider {...settings}>
                            {
                                slides.map((slide) => (
                                    <CustomSlides key={slide} review={reviews[slide]} />
                                ))
                            }
                        </Slider>
                    </div>
                    {/* Reviews box end here */}
                </div>
            </div>

        </div>
    )
}

export default Reviews
