import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import Title from '../Components/Title';
import { Shopdata } from '../../Context/Shopcontext';
import Cart from '../Components/Cart';
const Collections = () => {
  let [showfilter,setshowfilter] = useState(false)
  let {products,search,showsearch} = useContext(Shopdata)
  let [filterp,setfilterp] = useState([])
  let [category,setcategory] = useState([])
  let [subcategory,setsubcategory] = useState([])
  let [sorttype,setsorttype] = useState("relavent")
  
  const togglecate=(e)=>{
     if(category.includes(e.target.value)){
        setcategory(prev=>prev.filter(item=>item!==e.target.value))
     }else{
      setcategory(prev=>[...prev,e.target.value])
     }
  }
  const togglesubcate=(e)=>{
    if(subcategory.includes(e.target.value)){
        setsubcategory(prev=>prev.filter(item=>item!==e.target.value))
     }else{
      setsubcategory(prev=>[...prev,e.target.value])
     }
  }
  const applyfilter=()=>{
    let productcopy = products;
    if(showsearch && search){
         productcopy = productcopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productcopy = productcopy.filter(item=>category.includes(item.category))
    }
    if(subcategory.length > 0){
      productcopy = productcopy.filter(item=>subcategory.includes(item.subcategory))
    }
    setfilterp(productcopy)
  }
  const sortproduct=(e)=>{
    let filterpcopy = filterp;
    switch(sorttype){
       case 'low-high':
        setfilterp(filterpcopy.sort((a,b)=>(b.price-a.price)))
        break;
        case 'high-low':
        setfilterp(filterpcopy.sort((a,b)=>(a.price-b.price)))
        break;
        default:
          applyfilter()
          break;
    }
  }
  useEffect(()=>{
    sortproduct()
  },[sorttype])
  useEffect(()=>{
    setfilterp(products)
  },[products])
  useEffect(()=>{
    applyfilter()
  },[category,subcategory,search,showsearch])
  return (
    <div className='w-full min-h-[100vh] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2px] bg-gradient-to-l from-[#141414bb] to-[#0c2025] pb-[110px]'>
    <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r-[1px] border-gray-400 text-white lg:fixed ${showfilter}? "h-[45vh]":"h-[8vh]"`}>
  <p className='text-[25px] font-semibold flex gap-[5px] items-center justify-start'onClick={()=>setshowfilter(prev=>!prev)}>FILTERS 
    {!showfilter && <FaArrowRight className='text-[18px] md:hidden '/>} 
    {showfilter && <FaArrowDown className='text-[18px] md:hidden '/>}</p>
  <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showfilter?"":"hidden"} md:block`}>
    <p className='text-[18px] text-white'>CATEGORIES</p>
    <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light '><input type="checkbox" value={"Men"} className='w-3'onChange={togglecate}/>Men</p> 
     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light '><input type="checkbox" value={"Women"} className='w-3'onChange={togglecate}/>Women</p> 
     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light '><input type="checkbox" value={"Kids"} className='w-3'onChange={togglecate}/>Kids</p> 
    </div>
  </div>
  {/* sub category */}
  <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showfilter?"":"hidden"} md:block`}>
    <p className='text-[18px] text-white'>SUB CATEGORIES</p>
    <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light '><input type="checkbox" value={"Topwear"} className='w-3' onChange={togglesubcate}/>Topwear</p> 
     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light '><input type="checkbox" value={"Bottomwear"} className='w-3'onChange={togglesubcate}/>Bottomwear</p> 
     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light '><input type="checkbox" value={"Winterwear"} className='w-3'onChange={togglesubcate}/>Winterwear</p> 
    </div>
  </div>
    </div>
    <div className='lg:pl-[20%] md:py-[10px] '>
      <div className='md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px] '>
        <Title text1={"ALL"} text2={"COLLECTIONS"}/>
        <select name='' id='' className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-white rounded-lg hover:border-[#46d1f7] border-[2px]'onChange={(e)=>setsorttype(e.target.value)}>
          <option value="relavent" className='w-[100%] h-[100%]' >Sort by Relavent</option>
          <option value="low-high" className='w-[100%] h-[100%]'>Sort By : low to high</option>
          <option value="high-low" className='w-[100%] h-[100%]'>Sort By : high to low</option>
        </select>
      </div>
      <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
        {
          filterp.map((item,index)=>(
            <Cart key={index} id={item._id} name={item.name} price={item.price} image={item.image1}/>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Collections