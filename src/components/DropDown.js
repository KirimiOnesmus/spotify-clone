import React from 'react'


function DropDown(props) {
  return (
    <div>
       <li className='flex py-2 gap-x-2 px-2 hover:text-pink-500 duration-1000'>
            <icon className="text-xl" >{props.icon}</icon>
            <a href="" className=''>{props.text}</a>
        </li> 
    </div>
  )
}

export default DropDown