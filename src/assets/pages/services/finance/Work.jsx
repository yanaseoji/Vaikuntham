import React from 'react'

function Evolution() {
    return (
        <div id='work' className='grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 mx-auto my-10 py-5 lg:py-10'>
            <div className='px-0 sm:px-10 py-0 md:py-10'>
                <div className='capitalize text-3xl lg:text-4xl font-bold text-primary mb-5'>What we do</div>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-secondary font-semibold leading-8 tracking-wider'>At <span className='text-primary font-bold'>Vaikuntham</span>, we empower individuals and businesses to achieve financial clarity and <span className='italic font-bold'>success</span> through expert guidance and tailored strategies. Our dedicated team combines deep market insight with personalized solutions to help you grow <span className='font-bold italic'>wealth</span>, manage risks, and optimize your financial future.</p>
                <div className='text-primary text-xl font-bold my-5'>Our key features:</div>
                <div className='relative my-5 capitalize'>
                    <div className='grid grid-cols-1 gap-5'>
                        <div className='text-secondary font-semibold text-base md:text-lg flex items-center gap-4'>
                            <img src="/images/finance-page-images/planning.png" alt="plan" className='w-[20px]' />
                            <span>Comprehensive Financial Planning</span>
                        </div>
                        <div className='text-secondary font-semibold text-base md:text-lg flex items-center gap-4'>
                            <img src="/images/finance-page-images/advice.png" alt="advice" className='w-[20px]' />
                            <span>Investment Advisory</span>
                        </div>
                        <div className='text-secondary font-semibold text-base md:text-lg flex items-center gap-4'>
                            <img src="/images/finance-page-images/risk.png" alt="risk" className='w-[20px]' />
                            <span>Risk Management</span>
                        </div>
                        <div className='text-secondary font-semibold text-base md:text-lg flex items-center gap-4'>
                            <img src="/images/finance-page-images/tax.png" alt="tax" className='w-[20px]' />
                            <span>Tax Optimization</span>
                        </div>
                    </div>
                    <div className='hidden sm:block lg:hidden absolute -bottom-1/2 -right-15'>
                        <img src="/images/finance-page-images/Consultative sales-bro.png" alt="consultation" className='h-[330px] md:h-[400px] w-[330px] md:w-[400px] object-fill rounded-full' />
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img src="/images/finance-page-images/Consultative sales-bro.png" alt="consultation" className='h-full max-h-[800px]' />
            </div>
        </div>
    )
}

export default Evolution
