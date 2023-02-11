import React from 'react'

const Navbar = () => {
  return (
    // <div className='w-1/2 h-28 mx-auto bg-[#000000]'>
    //     <h1 className='text-3xl text-gray-300'>Header Logo</h1>
    //     <ul className='text-gray-300'>
    //       <li>header link one</li>
    //       <li>header link two</li>
    //       <li>header link three</li>
    //     </ul>
    // </div>
    <nav className='w-1/2 mx-auto bg-gray-800 py-2'>
     <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-3xl mx-20">Your Logo</div>
        <div className="flex mx-20">
          <a href="#" className="text-white mr-4 hover:text-gray-400">Home</a>
          <a href="#" className="text-white mr-4 hover:text-gray-400">About</a>
          <a href="#" className="text-white mr-4 hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar