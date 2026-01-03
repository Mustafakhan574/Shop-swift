import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Authdatacontext } from './Authcontext';
export const userdatacontext = createContext();
const User = ({children}) => {
          const [curuser,setcuruser] = useState("");
          const {serverurl} = useContext(Authdatacontext)
          
          const getcuruser=async()=>{
                    try{
           const result = await axios.get(`${serverurl}/api/user/curuser`,{withCredentials:true})
           console.log(result.data);
           setcuruser(result.data)
                    }catch(err){
                              setcuruser(null)
           console.log(err)
                    }
          }
         const value={
       curuser,setcuruser,getcuruser
          }
          useEffect(()=>{
                    getcuruser();
          },[])
  return (
    <div>
          <userdatacontext.Provider value={value}>
           {children}
          </userdatacontext.Provider>
    </div>
  )
}

export default User
