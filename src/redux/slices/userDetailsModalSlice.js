import { createSlice } from "@reduxjs/toolkit";
const initialState={
    open:false,
    interest:null,
    redirectUrl:null
}
const userDetailsModalSlice=createSlice({
    name:"userDetailsModal",
    initialState:initialState,
    reducers:{
        toggleModal:(state,action)=>{
            state.open=!state.open
            state.interest=action.payload.interest
            state.redirectUrl=action.payload.redirectUrl
        }
    }
})
export const {toggleModal}=userDetailsModalSlice.actions
export default userDetailsModalSlice.reducer