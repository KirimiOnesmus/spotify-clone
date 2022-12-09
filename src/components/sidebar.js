import React from 'react'
import  {AiFillHome,AiOutlineSearch}from 'react-icons/ai';
import{BiLibrary} from 'react-icons/bi'
import {RiPlayListFill} from 'react-icons/ri'
import{MdOutlineFavorite} from 'react-icons/md'
import {RiInstallFill} from 'react-icons/ri'

function sidebar() {
  return (
    <div className=''>
      <div className="relative p-6 bg-black w-1/5 h-screen">
      <div className='flex cursor-pointer'>
        <img 
        className='w-12 h-12'
        src='http://www.citypng.com/public/uploads/small/11661570438wwwxh72ctcthod9qxh9sm8jz2466gdeum3utinaylmihdx46p9lqw3hu2f5cm9zb1yo48l7g5ktwfsqfxbgct1vb9i66d3llz33s.png'
        alt='Spotify_ICON'/>
        <h4 className='text-2xl font-mono font-extrabold text-pink-500 px-2 my-2'>Spotify</h4>
      </div>
      <div className="py-4 text-white">
        <a href='' className='flex gap-x-2 py-2 transition duration-1000 hover:text-pink-500'>
          <AiFillHome className='text-2xl'/>
          <h4 className='text-xl'>Home</h4>
        </a>
        <a href='' className='flex gap-x-2 py-2 transition duration-1000 hover:text-pink-500'>
          <AiOutlineSearch className='text-2xl'/> 
          <h4 className='text-xl'>Search</h4>
        </a>
        <a href='' className='flex gap-x-2 py-2 transition duration-1000 hover:text-pink-500'>
          <BiLibrary className='text-2xl'/>
          <h4 className='text-xl'>Your Library</h4>
        </a>
      </div>
      <div className=' text-white border-b-2 border-gray-300'>
        <a href='' className='flex gap-x-2 py-2 transition duration-1000 hover:text-pink-500'>
          <RiPlayListFill className='text-2xl'/>
          <h4 className='text-xl'>Create Playlist</h4>
        </a>
        <a href='' className='flex gap-x-2 py-2 mb-4 transition duration-1000 hover:text-pink-500 '>
          <MdOutlineFavorite className='text-2xl'/>
          <h4 className='text-xl'>Liked Songs</h4>
        </a>
      </div>
      
      <a href='#' className='text-gray-400 flex absolute inset-x-6 bottom-24 transition duration-1000 hover:text-white'>
        <RiInstallFill className='text-gray-300 text-2xl' />
        <h4 className='text-xl px-2'>Install App</h4>
      </a>
      </div>
    </div>
    
    
  )
}

export default sidebar