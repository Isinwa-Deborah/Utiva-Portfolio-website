import React from 'react'
import Resume from './Resume'

const Skills = () => {
  return (
    <>
      <Resume></Resume>

      <section id='skills'>
        <div className='mt-20 ml-20 mr-20 grid grid-cols-2 gap-10 mb-10'>
          <div>
            <div className='flex'>
              <h3 className='font-medium text-xl'>Work Skills</h3>
              <hr className='mt-4 ml-5 border border-shadeGreen w-1/2' />
            </div>

            <div className='mt-10'>
              <div className='grid grid-cols-3 gap-5'>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>HTML 5</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>CSS 3</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>JavaScript</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Bootstrap</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Tailwind CSS</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>React.js</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Express.js</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Mongo DB</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Node.js</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Python</h6></div>
                <div className='bg-gray-200 py-2 rounded-md text-center'><h6>Java</h6></div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex'>
              <h3 className='font-medium text-xl'>Soft Skills</h3>
              <hr className='mt-4 ml-5 border border-shadeGreen w-1/2' />
            </div>

            <div className='mt-10'>
              <div className='grid grid-cols-3 gap-5'>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6 className='mt-3'>Team Spirit</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6 className='mt-3'>Time Management</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Effective Communication</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Content Development</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Research Writing</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Ghostwriting</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Public Speaking</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Detailed Presentation</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Emotional Intelligence</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Resourceful Collaboration</h6></div>
                <div className='bg-green-100 py-2 rounded-md text-center'><h6>Critical and Analytical Thinking</h6></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills