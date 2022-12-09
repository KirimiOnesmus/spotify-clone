import React from 'react'
import{ImShuffle,ImPrevious,ImPause,ImNext} from 'react-icons/im'
import {FiRepeat} from 'react-icons/fi'

function Media() {
  return (
    <div className=''>
      <div className='flex gap-x-8 mt-4 text-gray-300 text-xl'>
        <ImShuffle className='w-6 h-6'/>
        <ImPrevious className='w-6 h-6'/>
        <ImPause className='w-6 h-6'/>
        <ImNext className='w-6 h-6'/>
        <FiRepeat className='w-6 h-6'/>
      </div>

    </div>
  )
}

export default Media