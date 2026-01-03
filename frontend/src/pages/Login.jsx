import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import google from "../assets/google.jpg"
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Authdatacontext } from '../../Context/authcontext';
import axios from "axios"
import { auth, provider } from '../../utils/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { userdatacontext } from '../../Context/User';
const Login = () => {
  let navigate = useNavigate();
          const [isclick,setisclick] = useState(false);
      const {serverurl} = useContext(Authdatacontext);
      let {getcuruser} = useContext(userdatacontext)
      let [email,setemail] = useState("")
       let [password,setpassword] = useState("")
       const handlelogin=async(e)=>{
            e.preventDefault()
            try{
         const result = await axios.post(`${serverurl}/api/auth/login`,{
          email,password
         },{withCredentials:true})
         console.log(result.data)
         getcuruser()
         navigate("/")
            }catch(err){
              console.log(err)
            }
       }
       const googlelogin=async()=>{
                   try{
                  const response = await signInWithPopup(auth,provider)
                  let user = response.user
                  let name = user.displayName;
                  let email = user.email
                  const result = await axios.post(`${serverurl}/api/auth/googlelogin`,{
                   name,email
                  },{withCredentials:true}) 
                  console.log(result.data)
                  navigate("/")
                   }catch(err){
         console.log(err)
                   }
                 }

  return (
    <div className='w-[100vw] h-[100vh] text-white flex flex-col items-center justify-start bg-[#000000aa]'>
         <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'onClick={()=>navigate("/")}>
           <h1 className='text-[22px] font-sans'>ShopSwift</h1>
         </div>
         <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] mb-[15px]'>
            <span className='text-[25px] font-semibold'>Login Page</span>
            <span className='text-[25px]'>Welcome to ShopSwift, Place your order</span>
         </div>
         <div className='max-w-[700px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] rounded-lg flex items-center justify-center'>
                 <form action="" onSubmit={handlelogin} className='w-[90%] h-[90%] flex flex-col justify-start items-center gap-[20px]'>
                    <div className='w-[90%] h-[50px] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer bg-[#00ffffb6]'onClick={googlelogin}>
                              <img src={google} alt="" className='w-[20px] '/>
                              <p className=' font-bold'>Login with Google</p>
                    </div>
                    <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px] '>
                     <div className='w-[40%] h-[1px] bg-[green]'></div> 
                     or   
                     <div className='w-[40%] h-[1px] bg-[green]'></div>    
                    </div>
                    <div className='w-[90%] h-[400px] flex items-center justify-center gap-[15px] flex-col relative'>
                   <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent px-[20px] font-semibold placeholder-[#ffffffc7]'placeholder='Email' required onChange={(e)=>setemail(e.target.value)} value={email}/>
                   <input type={isclick?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent px-[20px] font-semibold placeholder-[#ffffffc7]'placeholder='Password' required onChange={(e)=>setpassword(e.target.value)} value={password}/>
                   {isclick?<LuEyeClosed className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]'onClick={(e)=>setisclick(!e)}/>:<FaEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]'onClick={()=>setisclick(prev => !prev)}/>}
                   <button className='w-[100%] h-[50px] bg-[aqua] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-medium'>Login</button>
                    </div>
                 </form>

         </div>
    </div>
  )
}

export default Login