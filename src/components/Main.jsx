import React from 'react'
import logo from '../assets/ai.png'

const Main = () => {
  return (

    <div className='w-1/2 mx-auto bg-gray-800 p-20 flex'>
        <div className='container mx-auto flex items-center justify-between'>
            <div className='text-left text-white'>
                <h1 className='text-2xl'>This website is awesome</h1>
                <p>This website has some subtext that goes here under the main title. <br></br> It's smaller font and the color is lower contrast.</p>
                <button className='text-center rounded-lg px-4 py-3 my-2 bg-blue-500 text-white font-bold text-lg'>Sign Up</button>
            </div>
            <img className='w-40' src={logo} alt="image" />
        </div>
    </div>
  )
}

export default Main