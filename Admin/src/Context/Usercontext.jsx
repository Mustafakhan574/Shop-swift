import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { authdatacontext } from './AuthContext'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const admindatacontext = createContext()
const Usercontext = ({children}) => {
const [admindata,setadmindata] = useState(null)
          const {serverurl} = useContext(authdatacontext);
          
        const getadmin=async()=>{
          try{
   const result = await axios.get(`${serverurl}/api/user/getadmin`,{withCredentials:true})
   setadmindata(result.data)
   console.log(result.data)
          }catch(err){
                    console.log(err)
          }
        }  
        useEffect(()=>{
          getadmin()
        },[])
        let value={
          serverurl,admindata,setadmindata,getadmin
          }
  return (
    <div>
          <admindatacontext.Provider value={value}>
 {children}
          </admindatacontext.Provider>
</div>
  )
}

export default Usercontext