import React from 'react'

const Procedures = () => {


    return (
        <div id='contactInfo' className='container flex justify-center my-5 lg:my-30 py-15 lg:py-20'>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="h-full">
                    <div className="text-center mb-16">
                        <span className='text-lg text-secondary font-semibold'>Contact</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 capitalize">Our contact information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/contact-page-images/phone.png" className="img-fluid" alt="call" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Call us
                                </h3>
                                <p className="text-secondary">
                                    9876543210
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/contact-page-images/email.png" className="img-fluid " alt="email" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Email us
                                </h3>
                                <p className="text-secondary">
                                    example@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/contact-page-images/road.png" className="img-fluid" alt="location" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Our location
                                </h3>
                                <p className="text-secondary">
                                    993 Renner Burg, West Rond, MT 94251-030
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/contact-page-images/network.png" className="img-fluid" alt="network" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Connect on
                                </h3>
                                <p className="text-secondary">
                                    instagram
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Procedures
