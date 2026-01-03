import React from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import upload from "../assets/upload.jpg"
import { useState } from 'react'
import { useContext } from 'react'
import { authdatacontext } from '../Context/AuthContext'
import axios from 'axios'
const Add = () => {
  const [image1,setimage1] = useState(false)
  const [image2,setimage2] = useState(false)
  const [image3,setimage3] = useState(false)
  const [image4,setimage4] = useState(false)
  const [name,setname] = useState("")
  const [description,setdescription] = useState("")
  const [category,setcategory] = useState("Men")
  const [price,setprice] = useState("")
  const [subcategory,setsubcategory] = useState("Topwear")
  const [bestseller,setbestseller] = useState(false)
  const [sizes,setsizes] = useState([])
  let {serverurl} = useContext(authdatacontext)
  const handleaddproduct=async(e)=>{
    e.preventDefault()
    try{
      let formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subcategory",subcategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)
      let result = await axios.post(`${serverurl}/api/product/addproduct`,formData,{withCredentials:true})
      console.log(result.data)
      if(result.data){
        setname("")
        setimage1(false)
        setimage2(false)
        setimage3(false)
        setimage4(false)
        setprice("")
        setbestseller(false)
        setcategory("Men")
        setdescription("");
        setsubcategory("Topwear")
      }
      
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-[#000000d2] texttext-[black] overflow-x-hidden relative '>
   <Nav/>
   <Sidebar/>
   <div className='w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-[15px] bottom-[3%] '>
    <form action="" onSubmit={handleaddproduct} className='w-[100%] md:w-[90%] h-[100%] mt-[90px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px] ml-[70px]'>
      <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-white'>
        Add Product Page
      </div>
      <div className='w-[80%] h-[130px] flex items-center flex flex-col mt-[20px] gap-[10px] text-white'>
        <p className='text-[20px] md:text-[25px] font-semibold'>Upload Images</p>
        <div className='w-[100%] h-[100%] flex items-center justify-start'>
    <label htmlFor="image1" className=' md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
      <img src={!image1 ? upload : URL.createObjectURL(image1)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[black] border-[2px]'/>
      <input type="file" id='image1' hidden onChange={(e)=>setimage1(e.target.files[0])}/>
    </label>
    <label htmlFor="image2" className=' md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
      <img src={!image2 ? upload : URL.createObjectURL(image2)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[black] border-[2px]'/>
      <input type="file" id='image2' hidden onChange={(e)=>setimage2(e.target.files[0])}/>
    </label>
    <label htmlFor="image3" className=' md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
      <img src={!image3 ? upload : URL.createObjectURL(image3)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[black] border-[2px]'/>
      <input type="file" id='image3' hidden onChange={(e)=>setimage3(e.target.files[0])}/>
    </label>
    <label htmlFor="image4" className=' md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
      <img src={!image4 ? upload : URL.createObjectURL(image4)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[black] border-[2px]'/>
      <input type="file" id='image4' hidden onChange={(e)=>setimage4(e.target.files[0])}/>
    </label>
        </div>
        </div>
        <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] '>
           <p className='text-[20px] md:text-[25px] font-semibold text-white'>Product Name</p>
           <input type="text" placeholder='Type here...'className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]' onChange={(e)=>setname(e.target.value)} value={name} required/>
        </div>
        <div className='w-[80%] h-[200px] flex items-start justify-center flex-col gap-[10px] '>
           <p className='text-[20px] md:text-[25px] font-semibold text-white'>Product Description</p>
           <textarea type="text" placeholder='Type here...'className='w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] py-[10px] placeholder:text-[#ffffffc2]' onChange={(e)=>setdescription(e.target.value)} value={description} required/>
        </div>
        <div className='w-[80%] flex items-center gap-[10px] flex-wrap text-white'>
             <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold text-white'>Product Category</p>
            <select name="" id="" className='bg-slate-600 w-[60%] p-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]'onChange={(e)=>setcategory(e.target.value)} value={category} >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
             </div>
             <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold text-white'>Sub-Category</p>
            <select name="" id="" className='bg-slate-600 w-[60%] p-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]'onChange={(e)=>setsubcategory(e.target.value)} value={subcategory}>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
             </div>
        </div>
        <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] text-white'>
           <p className='text-[20px] md:text-[25px] font-semibold text-white'>Product Price</p>
           <input type="number" placeholder='Type here...'className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]' onChange={(e)=>setprice(e.target.value)} value={price} required/>
        </div>
        <div className='w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px]md:py-[0px] text-white '>
           <p className='text-[20px] md:text-[25px] font-semibold text-white'>Product Size</p>
           <div className='flex items-center justify-start gap-[15px] flex-wrap'>
            <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("S")?"bg-green-300 text-black border-[aqua]":""}`}onClick={()=>setsizes(prev=>prev.includes("S")?prev.filter(item=>item!=="S"):[...prev,"S"])}>
            S
            </div>
            <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("M")?"bg-green-700 text-black border-[aqua]":""}`}onClick={()=>setsizes(prev=>prev.includes("M")?prev.filter(item=>item!=="M"):[...prev,"M"])}>
            M
            </div>
            <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("L")?"bg-green-300 text-black border-[aqua]":""}`}onClick={()=>setsizes(prev=>prev.includes("L")?prev.filter(item=>item!=="L"):[...prev,"L"])}>
            L
            </div>
            <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("XL")?"bg-green-300 text-black border-[aqua]":""}`}onClick={()=>setsizes(prev=>prev.includes("XL")?prev.filter(item=>item!=="XL"):[...prev,"XL"])}>
            XL
            </div>
            <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("XXL")?"bg-green-300 text-black border-[aqua]":""}`}onClick={()=>setsizes(prev=>prev.includes("XXL")?prev.filter(item=>item!=="XXL"):[...prev,"XXL"])}>
            XXL
            </div>
           </div>
        </div>
        <div className='w-[80%] flex items-center justify-start gap-[10px] mt-[20px] text-white'>
         <input type="checkbox" id="checkbox" className='w-[25px] h-[25px] cursor-pointer' onChange={()=>setbestseller(prev=>!prev)}/>
         <label htmlFor="checkbox" className='text-[18px] md:text-[22px] font-semibold'>Add to bestseller</label>
        </div>
        <button className='w-[140px] px-[20px] py-[20px] rounded-xl bg-[aqua] flex items-center justify-center gap-[10px] text-black active:bg-slate-700 active:text-white active:border-[2px]'>Add Product</button>
    </form>
   </div>
    </div>
  )
}

export default Add