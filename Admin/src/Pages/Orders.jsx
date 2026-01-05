import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import { authdatacontext } from '../Context/AuthContext'
import axios from 'axios'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const { serverurl } = useContext(authdatacontext)
  
  const getOrders = async () => {
    try {
      const result = await axios.get(
        `${serverurl}/api/order/getallorders`,
        { withCredentials: true }
      )
      console.log(result.data)
      setOrders(result.data)
    } catch (err) {
      console.log(err)
    }
  }
  const updatestatus=async(id,val)=>{
    try{
      const result =  await axios.post(
        `${serverurl}/api/order/updateorders/${id}`,{status:val},
        { withCredentials: true }
      )
      console.log(result.data);
      getOrders()
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className='w-full min-h-[100vh] overflow-hidden bg-[#000000cb] text-black'>
      <Nav />
      <Sidebar />

      <div className='w-[80%] lg:ml-[320px] py-[50px] md:ml-[250px] sm:ml-[200px] flex flex-col gap-[30px] overflow-x-hidden  ml-[125px] xl:ml-[450px]'>
        <h1 className='text-white text-[30px] mt-[60px] mb-[30px]'>
          All Orders 
        </h1>

        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className='mb-[40px]'>

              <h2 className='text-white text-xl mb-3'>
                Order ID: {order.user?._id}
              </h2>
               <h2 className='text-white text-xl mb-3'>
                Customer Name: {order.user?.name}
              </h2>
              <div className="flex flex-col gap-4">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className='w-[75%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-between gap-[20px] p-[10px] '
                >
                  <img
                    src={item.image}
                    alt=""
                    className='w-[200px] h-[100%] rounded-lg'
                  />

                  <div className='text-white'>
                    <div className='text-lg'>{item.name}</div>
                    <div>{item.category}</div>
                    <div>{item.price} Rs</div>
                  </div>
                  <div className='flex'>
                    <select name="" id="Pending" className='px-[2px] py-[2px] border bg-[#c32828] text-white font-semibold rounded-lg' onChange={(e)=>updatestatus(order._id,e.target.value)} value={order.status}>
                      <option value="Pending">Pending</option>
                      <option value="arriving" >arriving</option>
                      <option value="arrived">arrived</option>
                    </select>
                  </div>
                </div>
              ))}
                </div>
            </div>
          ))
        ) : (
          <div className='text-white text-lg'>NO products available</div>
        )}
      </div>
    </div>
  )
}

export default Orders
