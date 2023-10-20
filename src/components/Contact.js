import React from 'react'
import Skills from './Skills'
import Phone from '../assets/img/call_icon.png'
import Email from '../assets/img/email.png'
import Location from '../assets/img/locate.png'
import Facebook from '../assets/img/facebook.png'
import Linkedin from '../assets/img/linkedin.png'
import Twitter from '../assets/img/twitter.png'
import Github from '../assets/img/github.png'
import add_message from '../../serverfile/controller/messagecontroller'

const Contact = () => {
    return (
        <>
            <Skills></Skills>

            <section id='contact'>

                <div className='ml-20 mr-20 mb-10'>
                    <div className='flex'>
                        <h3 className='font-secondary font-medium text-2xl mt-10'>Contact</h3>
                        <hr className='mt-14 ml-5 border border-shadeGreen w-1/2' />
                    </div>

                    <div className='w-full flex ml-10 gap-20'>
                        {/* Side bar */}
                        <div className=' mt-10 shadow-lg rounded-md bg-green-100'>
                            <div>
                                <div className='p-5 flex gap-5'>
                                    <img src={Phone} alt="Call icon" className='w-1/12' />
                                    <h6>+2348182882010</h6>
                                </div>

                                <div className='p-5 flex gap-5'>
                                    <img src={Email} alt="Message icon" className='w-1/12' />
                                    <h6 className='pr-5'>isinwadeborah@gmail.com</h6>
                                </div>

                                <div className='p-5 flex gap-5'>
                                    <img src={Location} alt="Location icon" className='w-1/12 h-1/6' />
                                    <h6 className='mt-2'>Benin-city, Nigeria</h6>
                                </div>

                                <div className='p-5 flex gap-5'>
                                    <img src={Facebook} alt="Facebook icon" className='w-1/12' />
                                    <a href="https://www.facebook.com/isinwaiheme.deborah" className='mt-1'>Deborah Isinwa-Iheme</a>
                                </div>

                                <div className='p-5 flex gap-5'>
                                    <img src={Linkedin} alt="Linkedin icon" className='w-1/12' />
                                    <a href='https://www.linkedin.com/in/deborah-isinwa-iheme-ab037923a/' className='mt-1'>Benin-city, Nigeria</a>
                                </div>

                                <div className='p-5 flex gap-5'>
                                    <img src={Twitter} alt="Twitter Icon" className='w-1/12' />
                                    <a href="https://twitter.com/IsinwaDeborah?t=nQA686gt-P1iQ7mnLGp1Aw&s=08" className='mt-1'>@Isinwa-Deborah</a>
                                </div>

                                <div className='p-5 flex gap-5'>
                                    <img src={Github} alt="Github icon" className='w-1/12' />
                                    <a href='https://github.com/Isinwa-Deborah' className='mt-1'>Isinwa-Deborah</a>
                                </div>
                            </div>
                        </div>


                        <div className='mt-10 bg-gray-100 p-10 rounded-md mr-20 shadow-lg'>
                            <p>I am always open to <span className='font-bold'>discussing new projects, opportunities in tech world, partnerships</span>,
                                and more so <span className='font-bold'>mentorship</span>. </p>

                            <form action='/sendmessage' method='POST'>
                                <div className='flex gap-9 mt-10'>
                                    <label>Name:</label>
                                    <input type="text" name="sendername" id="" className='border rounded-md border-green-400 py-2 px-6' />
                                </div>

                                <div className='flex gap-10 mt-5'>
                                    <label>Email:</label>
                                    <input type="text" name="email" id="" className='border rounded-md border-green-400 px-6 py-2' />
                                </div>

                                <div className='flex gap-4 mt-5'>
                                    <label>Message:</label>
                                    <textarea name="messagebody" id="" className='border rounded-md border-green-400 px-8 py-5 resize-none'></textarea>
                                </div>

                                <button className='mt-10 font-tertiary font-semibold py-2 rounded-md px-5 text-lg bg-shadeGreen text-white hover:bg-gray-600' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact