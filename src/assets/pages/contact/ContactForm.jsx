import React from 'react'

function Evolution() {
    return (
        <div id='contactForm' className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 mx-auto my-5 lg:my-30 py-15 lg:py-20'>

            <div className='px-5 sm:px-10 py-5 md:py-10 border border-gray-300'>
                <div className='cpitalize text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-5'>Feel free to get in touch</div>
                <form className='grid grid-cols-1 lg:grid-cols-2 my-5 gap-5'>
                    <input type="text" placeholder='Full Name' className='border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary' required />
                    <input type="text" placeholder='Email' className='border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary' required />
                    <input type="text" placeholder='Phone number' className='border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary' required />
                    <select className='border-b border-gray-400 py-2 text-secondary outline-none focus:border-black focus:border-b-[1px] duration-100 cursor-pointer' defaultValue='Choose'>
                        <option value="Choose">Choose an option</option>
                        <option value="IT consulting">IT consulting</option>
                        <option value="Digital marketing">Digital marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Software development">Software development</option>
                    </select>
                    <textarea rows='10' placeholder='Write something...' className='md:h-auto col-span-1 lg:col-span-2 border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary'></textarea>
                </form>
            </div>

            <div className='px-0 md:px-10 py-10 md:py-0'>
                <div className='relative h-full shadow-xl'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6470369853596!2d73.00767527520121!3d26.273116577034273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b75cd995b9b%3A0x42d9a1d41d1ef37b!2sYana%20Technology!5e0!3m2!1sen!2sin!4v1746793116322!5m2!1sen!2sin" className='h-[300px] md:h-full w-full'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Evolution
