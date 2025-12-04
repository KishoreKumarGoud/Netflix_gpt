/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const gptslice=createSlice(
    {
        name:"gpt",
        initialState:{
            showsearch:false,
        },
        reducers:{
            toggleview:(state,action)=>{
state.showsearch=!state.showsearch;
            }
        }
    }
)
export default gptslice.reducer;
export const {toggleview}=gptslice.actions;