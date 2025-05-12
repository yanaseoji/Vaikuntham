import React from 'react'

function Evolution() {
    return (
        <div id='contactForm' className='px-5 md:px-10 mx-auto my-10 py-5 lg:py-10'>
            <div className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 capitalize text-center'>Book Appointment now</div>
            <form className='w-4/5 grid grid-cols-1 md:grid-cols-2 mt-15 gap-5 border border-gray-400 rounded-2xl p-5 mx-auto'>
                <input type="text" placeholder='Full Name' className='text-sm sm:text-base border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary' required />
                <input type="text" placeholder='Email' className='text-sm sm:text-base border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary' required />
                <input type="text" placeholder='Phone number' className='text-sm sm:text-base border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary' required />
                <select className='text-sm sm:text-base border-b border-gray-400 py-2 text-secondary outline-none focus:border-black focus:border-b-[1px] duration-100 cursor-pointer' defaultValue='Choose'>
                    <option value="Choose">Choose an option</option>
                    <option value="IT consulting">IT consulting</option>
                    <option value="Digital marketing">Digital marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Software development">Software development</option>
                </select>
                <textarea rows='10' placeholder='Write something...' className='text-sm sm:text-base md:h-auto col-span-1 md:col-span-2 border-b border-gray-400 py-2 outline-none focus:border-black focus:border-b-[1px] duration-100 text-secondary'></textarea>
                <button className='w-fit border duration-200 cursor-pointer hover:bg-primary hover:text-white py-2 px-8 text-primary text-xl rounded-xl mt-5 font-semibold'>Submit</button>
            </form>
        </div>
    )
}

export default Evolution
