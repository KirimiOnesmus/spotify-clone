import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Player from '../components/Player'
import Sidebar from '../components/sidebar'

function HomeScreen() {
  return (
    <>
    <div className='max-h-screen overflow-y-hidden'>
      {/* menubar/headerbar */}
      <HeaderBar />
      {/* sidebar */}
      <Sidebar/>
      {/* rows */}
      {/* player */}
      <Player />
    </div>

    </>
  )
}

export default HomeScreen