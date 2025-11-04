import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-screen px-13 py-4 bg-gray-400 flex items-center justify-between'>
       <h2 className='font-bold text-xl'>Music</h2>
       <div className='flex bg-amber-700 px-3 py-1 rounded-full font-semibold text-md items-center gap-2'>
        <button className='cursor-pointer'>Favorites</button>
        <h3 className='text-md'>{data.filter(item => item.friend).length}</h3>
       </div>
    </div>
  )
}

export default Navbar
