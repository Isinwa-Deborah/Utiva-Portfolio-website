import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <nav className='bg-shadeGray'>

          {/* <!-- Menu Items --> */}

          <div className="bg-white shadow-md border border-green-600 py-2 ">
            <div className="flex items-center space-x-20 pr-10 font-bold">
              <h3 className='ml-20 font-primary text-3xl'>Deborah Isinwa</h3>
              <a href="#home" className='pl-40 font-tertiary font-normal text-lg hover:text-green-600'>Home</a>
              <a href="#about" className='font-tertiary font-normal text-lg hover:text-green-600'>About</a>
              <a href="#resume" className='font-tertiary font-normal text-lg hover:text-green-600'>Resume</a>
              <a href="#skills" className='font-tertiary font-normal text-lg hover:text-green-600'>Skills</a>

              <a href="#contact"><button className='font-tertiary font-bold py-2 rounded-md px-5 text-2xl bg-shadeGreen text-white hover:bg-gray-600'>Contact</button></a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header