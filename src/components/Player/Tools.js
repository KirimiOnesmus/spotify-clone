import React from 'react'
import {TbMicrophone2,TbDevices2} from 'react-icons/tb'
import{HiOutlineQueueList,HiOutlineSpeakerWave} from'react-icons/hi2'


function Tools() {
  return (
    <div className='mt-4 mx-4 text-gray-300 '>
      <div className='flex gap-x-4 text-xl'>
        <TbMicrophone2 className='w-6 h-6'/>
        <HiOutlineQueueList className='w-6 h-6'/>
        <TbDevices2 className='w-6 h-6'/>
        <HiOutlineSpeakerWave className='w-6 h-6'/>
      </div>
    </div>
  )
}

export default Tools