import React from 'react'

import Player from '../components/Player'
import Sidebar from '../components/sidebar'
import Center from '../components/Center'

function HomeScreen() {
  return (
    <>
    <div className='max-h-screen overflow-y-hidden'>
      {/* menubar/headerbar */}
   
      {/* sidebar */}
     
      <Sidebar/>
      <Center />
      
 
  
      {/* player */}
      <Player />
    </div>

    </>
  )
}

export default HomeScreen