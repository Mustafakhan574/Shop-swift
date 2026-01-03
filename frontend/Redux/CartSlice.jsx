import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
          name:"cart",
          initialState:{
                 cartitems:[],
                 orders:[], 
                 qty:1,  
          },
          reducers:{
              setcartitems:(state,action)=>{
                    state.cartitems = action.payload 
              } ,
              updateqty:(state,action)=>{
                const {id,qty} = action.payload;
const item = state.cartitems.find(i=>i._id==id);
if(item){
          item.qty = qty
}
              } ,
              setorders:(state,action)=>{
              state.orders = action.payload
              }    
          }
})
export const {setcartitems,updateqty,setorders} = cartSlice.actions;
export default cartSlice.reducer;