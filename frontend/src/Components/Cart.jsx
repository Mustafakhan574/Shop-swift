import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({name,image,id,price}) => {
  let navigate = useNavigate();
  return (
    <div className='w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[black]'onClick={()=>navigate(`/productdetail/${id}`)}>
      <img src={image} alt="" className='w-[100%] h-[80%] rounded-sm object-cover'/>
      <div className='text-[aqua] text-[18px] py-[10px] '>{name}</div>
       <div className='text-[aqua] text-[14px] '>{price}Rs</div>
    </div>
  )
}

export default Cart