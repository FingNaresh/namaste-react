import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import React, { useDeferredValue } from 'react'


const appStore = configureStore({
    reducer :{
        cart: cartReducer,
    },
});

export default appStore
