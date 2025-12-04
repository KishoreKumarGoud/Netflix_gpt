/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
   return action.payload
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

export default userslice.reducer;
export const {addUser,removeUser}=userslice.actions;