import React, { useState } from 'react'
import Slider from "react-slick";

function CustomSlides({ review }) {
    let reviews = Object.values(review)

    return (
        <div style={{ '--image-url': `url(${reviews[1]})` }} className={`relative flex justify-end sm:block w-full sm:w-[250px] md:w-[200px] lg:w-[300px] h-[300px] sm:h-[350px] md:h-[300px] lg:h-[400px] rounded-xl py-5 md:py-4 px-5 md:px-2 xl:px-5 cursor-pointer bg-[image:var(--image-url)] sm:bg-bottom bg-cover sm:bg-contain bg-no-repeat after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-linear-to-t after:from-black/75 after:from-25% after:to-transparent after:rounded-xl after:z-10`}>
            <div className='px-8 md:px-5 flex flex-col sm:flex-row items-center sm:items-end justify-end sm:justify-center gap-5 h-full w-full'>
                <div className='flex flex-col items-center gap-2 px-0 xl:px-5 z-20'>
                    <span className='text-3xl sm:text-xl xl:text-2xl text-white font-bold'>{reviews[0]}</span>
                    <span className='h-fit text-xl sm:text-lg md:text-sm xl:text-base text-gray-300 tracking-[1px]'>{reviews[2]}</span>
                </div>
            </div>
        </div>
    )
}

function Reviews() {
    const reviews = [
        {
            team: "name1",
            image: '/images/about-page-images/member1.jpg',
            post: 'Lorem'
        },
        {
            team: "name2",
            image: '/images/about-page-images/member1.jpg',
            post: 'Lorem'
        },
        {
            team: "name3",
            image: '/images/about-page-images/member1.jpg',
            post: 'Lorem'
        },
        {
            team: "name4",
            image: '/images/about-page-images/member1.jpg',
            post: 'Lorem'
        },
    ]

    const [slides, setSlides] = useState(reviews.map((review, index) => (index)));
    console.log(slides.length)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            ,
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id='team' className='container mx-auto px-4 my-5 lg:my-30 py-15 lg:py-20'>
            <div className='text-center'>
                <div className='text-sm sm:text-base md:text-xl text-secondary font-semibold'>Teams</div>
                <div className='capitalize text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary font-bold'>Expert team members</div>
            </div>

            {/* Reviews box start here */}
            <div className='py-5 md:py-10 w-full'>
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
