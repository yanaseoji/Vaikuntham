import React from 'react'

const Procedures = () => {

    return (
        <div id='services' className='container flex justify-center mx-auto my-10 py-5 lg:py-10'>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="h-full">
                    <div className="text-center mb-16">
                        <span className='text-lg text-secondary font-semibold'>services</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 capitalize">Our exclusive services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/home-images/feature-icon1.svg" className="img-fluid" alt="Homeopathy 1" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Personal Financial Consulting
                                </h3>
                                <p className="text-secondary">
                                    We help individuals manage their finances by offering tailored advice on budgeting, debt management, investment planning, retirement strategies, and estate planning. Our consultants work closely with clients to understand their unique goals and create actionable financial plans for a secure future.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/home-images/feature-icon2.svg" className="img-fluid " alt="Homeopathy 2" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Corporate Financial Consulting
                                </h3>
                                <p className="text-secondary">
                                    Our firm advises businesses of all sizes on financial strategies to achieve objectives such as expansion, improved cash flow, and risk minimization. Services include financial planning and analysis, mergers and acquisitions advisory, and risk management, all aimed at enhancing overall financial performance.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/home-images/feature-icon3.svg" className="img-fluid" alt="Homeopathy 3" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Investment Consultancy
                                </h3>
                                <p className="text-secondary">
                                    We guide clients-both individuals and institutions-on constructing and managing investment portfolios aligned with their risk tolerance, goals, and time horizons. Our ongoing portfolio management ensures that investments adapt to changing market conditions and remain in sync with client objectives.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-secondary px-5 py-8 transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center mb-4 p-4">
                                    <img src="/images/home-images/feature-icon4.svg" className="img-fluid" alt="Homeopathy 4" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                                    Tax Consultancy
                                </h3>
                                <p className="text-secondary">
                                    Our tax consultants offer expert guidance on tax planning and compliance, helping clients navigate complex tax laws, reduce liabilities, and ensure full legal compliance. We advise on tax-efficient investments, retirement, estate planning, and corporate tax strategies for optimal financial outcomes.
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
