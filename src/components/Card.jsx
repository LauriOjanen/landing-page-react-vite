import React from 'react'
import pic from '../assets/possibility.png'

const Card = () => {
  return (
    <div className='w-1/2 mx-auto py-10 flex flex-col items-center justify-center'>
        <div>
        <h1 className='text-xl'>Some random information</h1> 
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div>
                <img className='w-36 mx-auto' src={pic} alt="pic" />
                <p>This is some subtext under an illustration of image</p>
            </div>
            <div>
                <img className='w-36 mx-auto' src={pic} alt="pic" />
                <p>This is some subtext under an illustration of image</p>
            </div>
            <div>
                <img className='w-36 mx-auto' src={pic} alt="pic" />
                <p>This is some subtext under an illustration of image</p>
            </div>
            <div>
                <img className='w-36 mx-auto' src={pic} alt="pic" />
                <p>This is some subtext under an illustration of image</p>
            </div>
        </div>
        
    </div>
  )
}

export default Card