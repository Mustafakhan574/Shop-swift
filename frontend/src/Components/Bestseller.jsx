import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Shopdata } from '../../Context/Shopcontext'
import Cart from './Cart'

const Bestseller = () => {
          const {products} = useContext(Shopdata)
          const [bestseller,setbestseller] = useState([]);
          useEffect(()=>{
           let filterproduct = products.filter((item)=>item.bestseller)
           setbestseller(filterproduct.slice(0,2))
          },[products])
  return (
          <div className='mb-[80px] md:mb-[20px]'>

    <div className='h-[8%] w-[100%] text-center mt-[50px] mb-[50px]'>
     <Title text1={"BEST"} text2={"SELLER"} />
     <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-400'>Tried, Tested, Loved Discover Our All Time Best Sellers.</p>
    </div>
    <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
  {
  bestseller.map((item,index)=>(
          <Cart key={index} name={item.name} price={item.price} image={item.image1} id={item._id}/>
  ))
  }
    </div>
    </div>
  )
}

export default Bestseller