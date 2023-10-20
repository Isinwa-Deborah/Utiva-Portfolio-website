import React from 'react'
import Hero from './Hero'

const About = () => {
  return (
    <>

      <Hero></Hero>
      <section id='about' className='shadow-lg p-5'>
        <div className='ml-20 mr-20'>
          <div className='flex'>
            <h3 className='font-secondary font-medium text-2xl mt-10'>About Me</h3>
            <hr className='mt-14 ml-5 border border-shadeGreen w-1/2' />
          </div>

          <div className='mt-5'>
            <p>Hello there! I'm thrilled to welcome you to my portfolio. I am a skilled Software Developer
              and Computer Engineer with a passion for creating robust and innovative software solutions
              with expertise in multiple programming languages, frameworks and technologies. I have a sound understanding of software development lifecycle, architecture design,
              cutting-edge technologies, methodologies and best practices to ensure high-quality code
              and seamless integration across different platforms.
            </p>

            <p className='mt-3'>I continously strive to enhance my skills and contribute to the growth and advancement
              of project development within specified timelines for exceptional user experiences.
            </p>
          </div>

          <div>
            <h3 className='font-secondary font-medium text-2xl mt-10'>What I do!</h3>
          </div>

          <div className='mt-5 grid grid-cols-2 gap-10 mb-10'>
            <div className='bg-green-100 rounded-lg'>
              <h3 className='mt-3 font-semibold font-secondary text-xl text-center'>Web Development</h3>
              <p className='py-3 px-5 font-secondary text-sm'>As a developer, I find myself most captivated by the power and flexibility
                to craft web applications where businesses thrive, information flows and creativity knows no bounds. I am always eager to dive into new projects that leverage MERN frameworks and
                discover innovative ways to create fast,scalable, and user-friendly applications.
              </p>
            </div>

            <div className='bg-gray-100 rounded-lg'>
              <h3 className='mt-3 font-semibold font-secondary text-xl text-center'>Data Science and Machine Learning</h3>
              <p className='py-3 px-5 font-secondary text-sm'>As a Data and Machine Learning Scientist, I harness the power of information and algorithms to unlock the
                hidden patterns, insights and trends. With this, digital businesses are shaped to make better decisions
                in order to thrive and automate processes.
              </p>
            </div>

            <div className='bg-gray-100 rounded-lg'>
              <h3 className=' mt-3 font-semibold font-secondary text-xl text-center'>Professional Writer and Content Development</h3>
              <p className='py-3 px-5 font-secondary text-sm'>As a Writer, I use my literary prowess to shape the  digital world
                with insightful articles, enchanting narratives and persuasive prose that seize the hearts and minds of readers to lead
                their lives in the most profitable way. I communicate to connect people, ideas and dreams thus, leaving an enduring
                imprint on the digital tapestry of our time.
              </p>
            </div>

            <div className='bg-green-100 rounded-lg'>
              <h3 className='mt-3 font-semibold font-secondary text-xl text-center'>Public Speaking</h3>
              <p className='py-3 px-5 font-secondary text-sm'>As a public speaker, I have the voice that carries power to enlighten
                , motivate and provoke change. I tell stories that bring a beacon of wisdom in a sea of information
                , guiding others to a brighter future with eloquence and passion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default About;