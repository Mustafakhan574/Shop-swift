import { createContext, useContext, useEffect, useState } from "react";
import { authdatacontext } from "../../Admin/src/Context/AuthContext";
import axios from 'axios'
import { Authdatacontext } from "./Authcontext";
export const Shopdata = createContext() 
          const Shopcontext = ({children}) => {
const {serverurl} = useContext(Authdatacontext) 
let [products,setproducts] = useState([])
let [search,setsearch] = useState('');
let [showsearch,setshowsearch] = useState(false);
let currency = "Rs"
let delivery_fees  = 30; 
const getproducts=async()=>{
          try{
       const result = await axios.get(`${serverurl}/api/product/list`,{withCredentials:true})
       console.log(result.data)
       setproducts(result.data)
          }catch(err){
                    console.log(err)
          }
}  
useEffect(()=>{
          getproducts()
},[]) 
                    let value={
                    products,
                    setproducts,
                    currency,
                    delivery_fees,
                    getproducts,
                    search,
                    setsearch,
                    showsearch,
                    setshowsearch
                    }
            return (
                    <div>
              <Shopdata.Provider value={value}>
                 {children}
              </Shopdata.Provider>
              </div>
            )
          } 
          
          

export default Shopcontext
