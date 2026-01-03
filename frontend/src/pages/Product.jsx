import React from 'react'
import Latestcol from '../Components/Latestcol'
import Bestseller from '../Components/Bestseller'

const Product = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-start flex-col py-[20px] bg-[#000000ad] '>
     <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col '>
    <Latestcol/>
     </div>
     <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col'>
    <Bestseller/>
     </div>
    </div>
  )
}

export default Product