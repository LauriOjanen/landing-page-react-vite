import React from 'react'

const Contact = () => {
  return (
    <div className='w-1/3 mx-auto bg-blue-500 p-12 flex my-20'>
        <div className='container mx-auto flex items-center justify-between text-white'>
            <div>
                <p className='text-2xl'>Call to action! It's time!</p>
                <p>Sign up for our product by clicking that button right over there!</p>
            </div>
            <button className='border border-white p-2 rounded-lg px-10'>Sign Up</button>
        </div>
    </div>
  )
}

export default Contact