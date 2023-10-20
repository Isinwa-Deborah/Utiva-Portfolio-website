import React from 'react'
import Header from './Header'
import greenImg from "../assets/img/Frame 2.svg"
import DebbieImg from '../assets/img/Deborah_Image.png'
import frame from '../assets/img/frame_1.png'

const Hero = () => {
    return (
        <>
            <Header></Header>
            <section id='home'>
                <div className="flex">
                    <div className='mt-16 ml-20 font-tertiary w-1/2'>
                        <h2 className='text-4xl'>Passionate <br />
                            <span className='text-shadeGreen mt-10'>FullStack Developer</span></h2>

                        <div className='mt-5'>
                            <h6 className='font-bold text-2xl'>Innovative Developer Building Web Dreams</h6>
                        </div>

                        <div className='mt-5'>
                            <p className='font-light text-xl'>The world is in need of Tech enthusiast who can bring design
                                ideas to life without compromising on standard, quality and responsiveness while adapting to
                                current reality. I am passionate about what I do and so let's get started with your product.</p>
                        </div>

                        <div className='mt-5 mb-6'>
                            <a href="#contact"><button className='font-tertiary font-bold py-2 rounded-md px-5 text-2xl bg-shadeGreen text-white hover:bg-gray-600'>Hire me</button></a>
                        </div>

                        <div className='-ml-20'>
                            <img src={greenImg} alt="green boxes" />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='translate-x-24 mt-16 ml-10' >
                            <img src={DebbieImg} alt="Deborah" className='bg-shadeGreen items-center justify-center rounded-full' />

                        </div>
                        <img src={frame} alt="Green border" className='mt-12 ml-60' />

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero