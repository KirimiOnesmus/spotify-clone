import React,{useEffect, useState} from 'react'
import './dropdown.css'
import { shuffle } from 'lodash'
import {MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos,MdMoreHoriz,MdVerified} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {MdSettings} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import{GiPauseButton} from 'react-icons/gi'
import DropDown from './DropDown';

const colors=[
    "from-indigo-900",
    "from-blue-900",
    "from-green-900",
    "from-red-900",
    "from-purple-900",
    "from-yellow-900"
]

function Center() {
     //nav bar
     const[show,handleShow]=useState(false);
     const transitionNavBar=()=>{
        if(window.screenY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
     }
     //changing colors
     const [color,setColor]=useState(null);

     useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return()=>window.removeEventListener("scroll",transitionNavBar);
    
     },[])
     useEffect(()=>{
        setColor(shuffle(colors).pop())
     },[])

    //drop down
    const [open,setOpen]=useState(false)
  return (
    // className={`nav ${show && "bg-black"}`}>
  
    <div className={`absolute  bg-gradient-to-b to-black ${color} h-screen inset-y-0 right-0 w-4/5 flex-grow overflow-hidden `}>

        <header className='flex justify-between p-1 '>
            <div className='flex justify-around align-center mt-4 gap-x-4 '>
                <a href='' className='text-white bg-black w-8 h-8 p-2 rounded-full'>
                    <MdOutlineArrowBackIosNew />
                </a>
                <a href="" className='text-white bg-black w-8 h-8 p-2 rounded-full'>
                    <MdOutlineArrowForwardIos/>
                </a>
            </div>

            <div className='flex'>
                <div className='mx-4 gap-x-4 text-black'>
                    <button className='border cursor-auto px-4 my-4 py-1 rounded-full font-bold border-gray-400 hover:border-black hover:text-sm duration-500 '>
                        upgrade
                    </button>

                </div>
                <div className='mt-3 mx-2'>
                    <div onClick={()=>{setOpen(!open)}} className="flex content-center cursor-pointer mr-6 hover:bg-neutral-700 px-2 py-1 duration-500 rounded-lg">
                        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg " alt="user-profile picture" 
                        className='rounded-full w-10 h-10'/>
                        <h4 className='my-2 px-2 font-bold text-black'>Joe Doe</h4>
                    </div>
                    <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
                        <ul> 
                            <DropDown text={"Account"} icon={<FaRegUser  />} />
                            <DropDown text={"Profile"} icon={<CgProfile />} />
                            <DropDown text={"Upgrade to premium"} icon={<FaExternalLinkAlt />} />
                            <DropDown text={"Settings"} icon={<MdSettings />} />
                            <DropDown text ={"Log out"} icon={<FiLogOut/>} />
                        </ul>
                    </div>
                </div>
            </div>
         </header>
         <section className=''>
            <div className={`h-80 `}>
                <img src='https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952' className='absolute w-full h-full object-cover mix-blend-overlay'/> 
                <div className='px-8'>
                    <div className='flex space-x-2 items-center font-light text-md pt-20'>
                        <MdVerified className='text-blue-500'/>
                        <h5 className='text-white'>Verified Artist</h5>
                    </div>
                    <h3 className='text-white text-7xl font-semibold pb-6 pt-2'>Ariana Grande</h3>
                    <h4 className='text-white'>60,600,000<span>Monthly Listiners</span></h4>
                </div>
              
            </div>
            <div className='px-6 bg-gradient-to-b from-neutral-900 to-black h-max'>
                <div className='flex flex-shirnk items-center space-x-6'>
                    <GiPauseButton className='w-12 h-12 bg-pink-500 p-2 rounded-full'/>
                    <button className='border px-2 py-1 rounded-md text-white'>FOLLOW</button>
                    <MdMoreHoriz className='w-8 h-8 text-slate-300'/>
                </div>
                <div className='pt-4 text-white '>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h4 className='font-bold text-xl'>Popular</h4>
                        </div>
                        <div className='content-start'>
                            <h4 className='font-bold text-xl'>Artist pick</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                        </div>
                    </div>
                    
                
                </div>
             
            </div>
         </section>
        </div>

 
  
  )
}

export default Center