import React, { createContext, useContext, useEffect } from 'react'
import { Authdatacontext } from './Authcontext'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setcartitems, setorders } from '../Redux/CartSlice'
export const cartdata = createContext()
const Cartcontext = ({children}) => {
  let dispatch = useDispatch()
let {serverurl} = useContext(Authdatacontext)
let {orders} = useSelector(state=>state.cart)
const getorders=async()=>{
      try{
    const result = await axios.get(`${serverurl}/api/order/getorders`,{withCredentials:true})
    console.log(result.data)
    dispatch(setorders(result.data))
      }catch(err){
        console.log(err)
      }
    }
    const getcartitems=async()=>{
          try{
     const result = await axios.get(`${serverurl}/api/cart/cartitems`,{withCredentials:true})
     console.log(result.data)
     dispatch(setcartitems(result.data))
          }catch(err){
                    console.log(err)
          }
    }
    
          let value={
          getcartitems,
          getorders
          }
          useEffect(()=>{
                    getcartitems()
          },[])
          useEffect(()=>{
                    getorders()
          },[])
  return (
    <div>
          <cartdata.Provider value={value}>
            {children}
          </cartdata.Provider>
    </div>
  )
}

export default Cartcontext
