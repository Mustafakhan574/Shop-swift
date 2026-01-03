import React, { useContext } from 'react'
import Slider from '../Components/Slider'
import { userdatacontext } from '../../Context/User'
import Product from './Product'
import Ourpolicy from '../Components/Ourpolicy'

const Home = () => {
  let {curuser} = useContext(userdatacontext)
  return (
    <div className='w-[100vw] h-[100vh]  pt-[68px] overflow-x-hidden'>
      {curuser && <Slider/>}
      <Product />
      <Ourpolicy/>
    </div>
  )
}

export default Home