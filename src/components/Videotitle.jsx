import React from 'react'
const Videotitle = ({title,overview}) => {
  return (
    <div  className='pt-[13%] px-12 absolute top-0 left-0 z-10 bg-gradient-to-r from-black/70 w-full h-full text-gray-300'
> 
        <h1 className='text-5xl font-semibold z-5'>{title}</h1>
        <p className='py-6 w-1/4 text-md z-200'>{overview}</p>
        <div className='flex gap-4'>
            <button className='bg-gray-200 text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-400'>
                Play</button>
        <button className='bg-gray-500 bg-opacity-90 rounded-lg px-6 py-2 text-white'>More info</button>
        </div>
    
    </div>
  )
}

export default Videotitle