import React from 'react'
import logo from '../assets/react.svg'

const Main = () => {
  return (
    <div className='w-1/2 mx-auto bg-gray-800 p-20 flex'>
        <div className='text-white'>
            <h1 className='text-3xl'>This website is awesome</h1>
            <p>This website has some subtext that goes here under the main title. It's smaller font and the color is lower contrast.</p>
            <button className='text-center rounded-lg px-4 py-3 my-2 bg-blue-500 text-gray-300 font-bold text-lg'>Sign Up</button>
        </div>
        <div className='p-2'>
            <img src={logo} alt="image" />
        </div>
    </div>
  )
}

export default Main