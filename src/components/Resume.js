import React from 'react'
import About from './About'

const Resume = () => {
    return (
        <>

            <About></About>

            <section id='resume'>
                <div className='ml-20 mr-20 font-secondary'>
                    <div className='flex'>
                        <h3 className='font-secondary font-medium text-2xl mt-10'>Resume</h3>
                        <hr className='mt-14 ml-5 border border-shadeGreen w-1/2' />
                    </div>

                    <div className='mt-10 grid grid-cols-2 gap-10 mb-10'>
                        <div className='ml-20 shadow-lg rounded-lg pl-10 py-5 border border-green-400'>
                            <div className=''>
                                <h3 className='font-medium text-xl'>Education</h3>
                                <h6 className='mt-5'>2017 - 2023</h6>
                                <h6>Computer Engineering (B.Eng)</h6>
                                <h6>University of Benin, Nigeria</h6>
                            </div>

                            <div className='mt-10'>
                                <h6>2013 - 2016</h6>
                                <h6>Computer Engineering (OND)</h6>
                                <h6>Yaba College of Technology, Lagos, Nigeria</h6>
                            </div>
                        </div>

                        <div className='mr-20 rounded-lg pl-10 py-5 border border-gray-600'>
                            <div>
                                <h3 className='font-medium text-xl'>Experience</h3>
                                <h6 className='mt-5'>July, 2023 - present</h6>
                                <h6>Front-End Developer Intern</h6>
                                <h6>Yolad Global Services</h6>
                            </div>

                            <div className='mt-10'>
                                <h6>February - July, 2022</h6>
                                <h6>Industrial Training</h6>
                                <h6>University of Benin, Nigeria</h6>
                            </div>

                            <div className='mt-10'>
                                <h6>2015</h6>
                                <h6>Student Intern</h6>
                                <h6>Hectos Computer Institute, Lagos, Nigeria</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume