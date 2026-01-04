import React from 'react'
import { useState } from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setcartitems, updateqty } from '../../Redux/CartSlice';
import axios from 'axios';
import { useContext } from 'react';

import { cartdata } from '../../Context/Cartcontext';
import { Authdatacontext } from '../../Context/Authcontext';
const Cartitems = ({item}) => {
          const dispatch = useDispatch()
          const {cartitems} = useSelector((state)=>state.cart)
          const {serverurl} = useContext(Authdatacontext)
          
          const increaseqty=()=>{
           dispatch(updateqty({id:item._id,qty:item.qty+1}))
          }  
          const decreaseqty=()=>{
           if(item.qty>1){
                    dispatch(updateqty({ id: item._id, qty: item.qty - 1 }))
                  }  
          }  
          const handlecartdelete=async(id)=>{
                    try{
          const result = await axios.get(`${serverurl}/api/cart/cartdelete/${id}`,{
                withCredentials:true    
          })
          console.log(result.data)
          dispatch(setcartitems(result.data))
                    }catch(err){
                              console.log(err)
                    }
          }
  return (
    <>
    <div className='flex items-center justify-between p-4 rounded-xl shadow border '>
         <div className='flex items-center gap-4'>
          <img src={item.image} alt="" className='w-20 object-cover rounded-lg'/>
          <div>
                    <h1 className='font-medium'>{item.name}</h1>
                    <p className='text-sm'>Rs{item.price} x {item.qty}</p>
                    <p className='font-bold'>Rs{item.price*item.qty}</p>
          </div>
         </div>
         <div className='flex items-center gap-3'>
<button className='px-2 py-1 rounded-xl hover:bg-[grey] transition' onClick={decreaseqty}>
           <FaMinus />
                   </button>
                   <span>{item.qty}</span>
                   <button className='px-2 py-1 rounded-xl hover:bg-[grey] transition' onClick={increaseqty}>
           <FaPlus />
                   </button>
                   <button className='p-3 bg-red-100 text-red-500 rounded-full hover:bg-red-200'onClick={()=>handlecartdelete(item._id)}>
                    <FaRegTrashAlt size={22}/>
                   </button>
         </div>  
    </div>
    </>
  )
}

export default Cartitems