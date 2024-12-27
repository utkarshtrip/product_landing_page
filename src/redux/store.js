import { configureStore } from "@reduxjs/toolkit";
import userDetailsModalReducer from './slices/userDetailsModalSlice'
export const store=configureStore({
    reducer:{
        userDetailsModal:userDetailsModalReducer
    }
})