import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';

const Products = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [Products, setProducts] = useState([])
    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        handlesubmit("")
    }, [])

    const handlesubmit = (data) => {
        console.log("id", data);
        axios.get(`https://rajpurohitastro.com/shipshop/api/f6d7a19a22e01bb25cb7b28b2b5a1de4/get-products/${data}`)
            .then(response => {
                console.log("data", response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }


    useEffect(() => {
        fetch("https://rajpurohitastro.com/shipshop/api/f6d7a19a22e01bb25cb7b28b2b5a1de4/get-categories/")
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                setCategories(data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    //   if (loading) {
    //     return <div>Loading products...</div>;
    //   }

    return (
        <>
            <div className="relative object-cover w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Slider {...settings}>
                        <div className="h-full">
                            <img className="w-full h-[600px] object-cover" src="/img8.jpg" alt="Product 1" />
                        </div>
                    </Slider>
                </div>

                <div className="absolute inset-0 bg-black/50 bg-opacity-40 z-10"></div>

                <div className="relative z-20 flex items-center justify-center h-full">
                    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center px-4">
                        WELCOME TO OUR STORE
                    </h1>
                </div>
            </div>

            <h2 className="flex justify-center text-red-900 items-center mb-8 font-bold text-4xl mt-52 sm:mt-4 md:mt-12 ">Shop by Category</h2>

           
            <div className="flex  max-w-7xl mx-auto">
                {
                    Categories.map((categories, item) => (
                        <div onClick={() =>
                            handlesubmit(categories.categoryId)} key={item}
                            className="rounded-2xl w-1/4 overflow-hidden shadow-2xl mt-4 m-auto my-8 transform hover:scale-[1.10] transition-transform duration-300 ">
                            <div className="py-2 text-center  h-40  flex flex-col items-center justify-center  bg-red-950 text-white" >
                                <div className="font-bold text-xl  ">{categories.heading}</div>
                            </div>
                        </div>

                    ))
                }
            </div>  

            <h2 className="flex justify-center text-red-900 items-center mb-8 font-bold text-4xl mt-52 sm:mt-8 md:mt-12">Our Products</h2>



            <div className="px-14 md:px-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6  text-center">
                {
                    Products.map((product) => (
                        <div className="max-w-xs  rounded-2xl overflow-hidden shadow-2xl mt-4 m-auto my-8 transform hover:scale-[1.10] transition-transform duration-300 ">
                            <img className="w-full h-48 object-cover" src={`https://rajpurohitastro.com/shipshop/${product.image}`} alt="" />
                            <div className="px-4 py-3">
                                <div className="font-bold text-xl mb-2">{product.heading}</div>
                                <p>price:{product.price}</p>
                                <p className="text-gray-700 mb-2 text-sm">
                                    {product.shopName}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Products;






