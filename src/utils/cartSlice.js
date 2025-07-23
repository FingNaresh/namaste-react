import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action)=>{
            //mutating the state here
            // Redux ToolKit uses immer BTS
            state.items.push(action.payload);
        },
        removeItem:(state , action)=>{
            state.items.pop()
        },
        // originalState ={items:["pizza"]}
        clearCart : (state , action)=>{
            //RTK - either Mutate the existing state or return a new state
           // state.items.length =0; // originalstate =[]

           return {items:[]}; // this new  object[] will be replaced inside originalState ={items:[]}
        },
    },
 });



 export const{addItem , removeItem,clearCart}=cartSlice.actions;

 export default cartSlice.reducer;