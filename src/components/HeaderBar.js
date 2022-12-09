import React,{useEffect, useState} from 'react'
import './dropdown.css'
import {MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {MdSettings} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import DropDown from './DropDown';



function HeaderBar() {
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
     useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return()=>window.removeEventListener("scroll",transitionNavBar);
     },[])

    //drop down
    const [open,setOpen]=useState(false)
  return (
    // className={`nav ${show && "bg-black"}`}>
    <div  className=''>
          <div className="fixed top-0 right-0 w-4/5 h-20  flex justify-between  z-10 bg-black">
        <div className='flex mt-4 px-4 gap-x-4'>
            <a href='' className='text-white bg-black w-8 h-8 p-2 rounded-full'>
                <MdOutlineArrowBackIosNew />
            </a>
            <a href="" className='text-white bg-black w-8 h-8 p-2 rounded-full'>
                <MdOutlineArrowForwardIos/>
            </a>
        </div>

         <div className='flex'>
            <div className='mx-4 gap-x-4 text-white'>
                <button className='border cursor-auto px-4 my-6 py-1 rounded-full font-bold border-gray-400 hover:border-white hover:text-sm duration-500 '>
                    upgrade
                </button>

            </div>
            <div className='mt-5 mx-2'>
                <div onClick={()=>{setOpen(!open)}} className="flex content-center cursor-pointer mr-6 hover:bg-neutral-700 px-2 py-1 duration-500 rounded-lg">
                    <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg " alt="user-profile picture" 
                    className='rounded-full w-10 h-10'/>
                    <h4 className='my-2 px-2 font-bold text-white'>Joe Doe</h4>
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


       
 
        </div>
    </div>
  
  )
}

export default HeaderBar