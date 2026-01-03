import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import { Authdatacontext } from '../../Context/Authcontext';
import axios from 'axios';
import { setorders } from '../../Redux/CartSlice';
const Orders = () => {
  let {serverurl} = useContext(Authdatacontext)
  const { orders } = useSelector(state => state.cart);
   let dispatch = useDispatch()
  if (!orders || orders.length === 0) {
    return <p className="text-center text-2xl mt-10">No orders found</p>;
  }
   const handlecancelorder=async(id)=>{
    try{
  const result = await axios.get(`${serverurl}/api/order/cancelorder/${id}`,{withCredentials:true})
  console.log(result.data)
   dispatch(setorders(result.data))
    }catch(err){
      console.log(err)
    }
   }
  return (
    <div className="space-y-6 p-6 mt-[100px] min-h-[100vh]">
      {orders.length>0 && orders?.map(order => (
        <div
          key={order._id}
          className="border rounded-xl shadow p-4 mb-[80px] sm:mb-[20px]"
        >
          <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold mb-3">
            Order ID: {order._id}
          </h2>
          {order.status !== "arrived" && <button
              className="p-3 bg-red-100 text-red-500 rounded-full hover:bg-red-200"
            onClick={()=>handlecancelorder(order._id)}><FaRegTrashAlt size={22} /></button>}
            
          </div>
          <h2 className="text-xl font-bold mb-3">
            Status : {order.status}
          </h2>
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h1 className="font-medium">{item.name}</h1>
                <p className="text-sm">
                  Rs {item.price} × {item.qty}
                </p>
                <p className="font-bold">
                  Rs {item.price * item.qty}
                </p>
                
              </div>
            </div>
          ))}
          

          <div className="text-right font-bold text-lg">
            Total: Rs {order.totalAmount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
