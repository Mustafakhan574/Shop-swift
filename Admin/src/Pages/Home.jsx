import React from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#000000d2] text-black relative'>
     <Nav/>
     <Sidebar/>
    </div>
  )
}

export default Home