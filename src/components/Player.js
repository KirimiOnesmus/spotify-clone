import React from 'react'
import{MdOutlineFavoriteBorder} from 'react-icons/md'
import Media from './Player/Media'
import Tools from './Player/Tools'


function Player() {
  return (
    <div className='flex justify-between absolute bottom-0 w-screen bg-neutral-800  p-4'>
        <div className='flex text-white'>
            <img src="https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952" alt="Music banner" className='w-16 h-16'/>
            <div className='px-4 self-center grid gap-y-0'>
              <a href="" className='font-bold hover:underline'>Positions</a>
              <a href="" className='text-gray-300 hover:underline hover:text-white'>Ariana Grande</a>
            </div>
            <div className='text-gray-300 mx-6 self-center hover:text-white cursor-pointer'>
              <MdOutlineFavoriteBorder className=''/>
             </div>

        </div>

        <div>
           <Media/>
        </div>
        <div>
            <Tools/>
        </div>
    </div>
  )
}

export default Player