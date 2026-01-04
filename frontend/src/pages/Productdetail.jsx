import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopdata } from '../../Context/Shopcontext'
import axios from 'axios'
import { Authdatacontext } from '../../Context/Authcontext'
import { useSelector } from 'react-redux'
import { cartdata } from '../../Context/Cartcontext'

const Productdetail = () => {
          let {productid} = useParams()
          let {products} = useContext(Shopdata)
          let {getcartitems} = useContext(cartdata)
          let [productdata,setproductdata] = useState(false)
          let {serverurl} = useContext(Authdatacontext)
          let {qty} = useSelector(state=>state.cart)
          const [image,setimage] = useState('')
          const [image1,setimage1] = useState('')
          const [image2,setimage2] = useState('')
          const [image3,setimage3] = useState('')
          const [image4,setimage4] = useState('')
          
          const [size,setsize] = useState('')
          const fetchproductdata=async()=>{
                    products.map((item)=>{
  if(item._id === productid){
              setproductdata(item)
      console.log(productdata)
        setimage(item.image1)
              setimage1(item.image1)
                setimage2(item.image2)
           setimage3(item.image3)
          setimage4(item.image4)
             return null
                              }
                    })
          }
      
  const handleaddcart=async()=>{
    try{
  const result = await axios.post(`${serverurl}/api/cart/addcart`,{
     name:productdata.name,price:productdata.price,image:productdata.image1,
     size:JSON.stringify(size),
     qty:1,
  },{withCredentials:true})
  console.log(result.data)
    getcartitems()
    }catch(err){
      console.log(err)
    }
  }        
          useEffect(()=>{
                    fetchproductdata()
          },[productid,products])
  return productdata ? (
    <div >
    <div className='w-[100vw] h-[130vh] md:h-[115vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-[20px]  '>
          <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row'>
                    <div className='lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap'>
                              <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
<img src={image1} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md'onClick={()=>setimage(image1)}/>
                              </div>
<div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
<img src={image2} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md'onClick={()=>setimage(image2)}/>
                              </div>
                              <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
<img src={image3} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md'onClick={()=>setimage(image3)}/>
                              </div>
                              <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
<img src={image4} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md'onClick={()=>setimage(image4)}/>
                              </div>
                    </div>
<div className='lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px] border-[#80808049] rounded-md overflow-hidden'>
                  <img src={image} alt="" className='w-[100%] lg:h-[100%] h-[100%] text-[30px] text-white text-center rounded-md object-fill'/>
                    </div>
          </div>
          <div className='lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-0 gap-[10px]'>
<h1 className='text-[40px] font-semibold text-[aliceblue]'>
          {productdata.name.toUpperCase()}
</h1>
          <p className='text-[30px] font-semibold pl-[5px] text-white '>{productdata.price} Rs</p>
          <p className='text-[20px] font-semibold pl-[5px] text-white '>{productdata.description} </p>
          <div className='flex flex-col gap-[10px] my-[10px]'>
                    <p className='text-[25px] font-semibold pl-[5px] text-white'>Select Size :</p>
                    <div className='flex gap-2'>
                   {
                    productdata.sizes.map((item,index)=>(
<button key={index} className={`border py-2 px-4 bg-slate-300 rounded-md ${item === size ? 'text-red-500':''}`
                              } onClick={()=>setsize(item)}>{item}</button>
                    ))
                   }
                    </div>
                    <button className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shodow-black' onClick={handleaddcart}>
                     Add to Cart
                    </button>
          </div>
          </div>  
    </div>
    </div>
  ): <div className='opacity-0'></div>
}

export default Productdetail
