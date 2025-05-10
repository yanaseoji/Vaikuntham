import React, { useState } from 'react'
import Slider from "react-slick";

function CustomSlides({ review }) {
    let reviews = Object.values(review)
    return (
        <div className='w-full md:w-[350px] lg:w-[300px] xl:w-[400px] grid grid-rows-1 bg-gray-100 rounded-xl py-5 md:py-4 px-5 md:px-2 xl:px-5 cursor-pointer hover:bg-gray-200'>
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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id='reviews' className='container mx-auto px-4 my-5 lg:my-30 py-15 lg:py-20'>
            <div className='text-center'>
                <div className='text-sm sm:text-base md:text-xl text-secondary font-semibold'>Reviews</div>
                <div className='capitalize text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary font-bold'>Listening to our clients</div>
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
    )
}

export default Reviews
