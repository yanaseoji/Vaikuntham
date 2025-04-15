import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryName, setSelectedCategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");

    const settings = {
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

    useEffect(() => {
        // Fetch all products by default (when no category is selected)
        handleCategorySelect(""); 
    }, []);

    // Handle category selection
    const handleCategorySelect = (categoryId = "", categoryName = "") => {
        setSelectedCategoryId(categoryId);
        setSelectedCategoryName(categoryName);
        axios
            .get(`https://rajpurohitastro.com/shipshop/api/f6d7a19a22e01bb25cb7b28b2b5a1de4/get-products/${categoryId}`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    };

    // Clear filter and show all products
    const clearFilter = () => {
        setSelectedCategoryId(""); // Clear category ID
        setSelectedCategoryName(""); // Reset category name
        handleCategorySelect(""); // Fetch all products
    };

    useEffect(() => {
        fetch("https://rajpurohitastro.com/shipshop/api/f6d7a19a22e01bb25cb7b28b2b5a1de4/get-categories/")
            .then((response) => response.json())
            .then((data) => {
                // Set categories but exclude "All Products"
                setCategories(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <>
            {/* Banner Section */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[754px] overflow-hidden">
                {/* Slider Background */}
                <div className="absolute inset-0 z-0">
                    <Slider {...settings}>
                        <div className="h-full">
                            <img className="w-full h-full object-cover " src="/img8.jpg"  alt="Product 1"/>
                        </div>
                    </Slider>
                </div>
        
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-10"></div>
        
                {/* Hero Text */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
                    <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
                        Shop Natural, Feel Better — The Homeopathic Way 🌿
                    </h2>
                    <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
                        Natural remedies, lasting wellness — curated with homeopathic care.
                    </p>
                    <a  
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight * 1,
                                behavior: "smooth",
                            });
                        }}
                        href="#"
                        className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
                    >
                        Start Exploring
                    </a>
                </div>
            </div>
        
            {/* Filter and Products Section */}
            <div className="max-w-full mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Filter Section */}
                    <div className="w-full lg:w-1/4">
                        <div className="p-6 bg-white rounded-2xl shadow-lg sticky top-15 border border-gray-200">
                            <h3 className="text-xl font-bold mb-6 text-red-700 border-b pb-2">Filter by Category</h3>
                            <div className="space-y-4">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 border ${selectedCategoryId === category.categoryId
                                                ? "bg-red-50 border-red-300 shadow-inner"
                                                : "hover:bg-gray-50 border-gray-200"
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCategoryId === category.categoryId}
                                            onChange={() => handleCategorySelect(category.categoryId, category.heading)}
                                            className="form-checkbox h-5 w-5 text-red-600 rounded-md mr-3"
                                        />
                                        <label className="text-gray-800 text-sm font-medium cursor-pointer">
                                            {category.heading}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={clearFilter}
                                className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition duration-300"
                            >
                                Clear Filter
                            </button>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="w-full lg:w-3/4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(255,0,100,0.25)] rounded-3xl overflow-hidden transition-transform transform hover:-translate-y-2 duration-300"
      >
        {/* Image Section */}
        <div className="relative group overflow-hidden">
          <img
            src={`https://rajpurohitastro.com/shipshop/${product.image}`}
            alt={product.heading}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-red-500 p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
            ❤️
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">
            {product.heading}
          </h3>
         
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold text-rose-600">₹{product.price}</span>
           
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


                </div>
            </div>
        </>
    );
};

export default Products;





// git add .                       
// git commit -m "Initial commit"
// git push origin main