import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Shopdata } from '../../Context/Shopcontext'
import Cart from './Cart'

const Latestcol = () => {
          let {products} = useContext(Shopdata)
          let [latestp,setlatestp] = useState([])
          useEffect(()=>{
         setlatestp(products.slice(0,8))
          },[products])
  return (
    <div>
  <div className='h-[8%] w-[100%] text-center md:mt-[50px]'>
   <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
   <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-400'>Step into style ! New Collection Dropping Into This Season</p>
  </div>
  <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
   {latestp.map((item,index)=>(
          <Cart key={index} name={item.name} image={item.image1} id={item._id} price={item.price}/>
   ))}
  </div>
    </div>
  )
}

export default Latestcol