import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <>
           <Navbar/>
            <div className='  pt-20 max-w-screen-2xl container md:px-20  dark:bg-slate-900 dark:text-white '>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-bold text-[25px] mt-3'>Contact Us</h3>
                    <div className=' mt-4'>
                        <span>Name</span>
                        <br />
                        <input type="text" placeholder='Enter your name' className='w-80 px-3 border rounded outline-none  dark:bg-slate-900 dark:text-white ' />
                    </div>
                    <div className=' mt-4'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded outline-none  dark:bg-slate-900 dark:text-white '/>
                    </div>
                    <div className=' mt-4'>
                        <span>  Message</span>
                        <br />
                       <textarea name="message" placeholder='Type your message'  rows="4" className='w-80 px-3 border rounded outline-none  dark:bg-slate-900 dark:text-white '/>
                    </div>
                    <div>
                        <button className='border bg-blue-700 text-white rounded px-2 py-1 mt-4'>Submit</button>
                    </div>
                </div>
            </div>
            <br />
            <Footer/>
        </>
    )
}

export default Contact;