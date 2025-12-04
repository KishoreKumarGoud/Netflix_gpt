import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/movieslice'
import gptreducer from "../utils/gptslice";

const appstore=configureStore(
    {
        reducer:{
user:userReducer,
movies:moviesReducer,
gpt:gptreducer,
        }
    }
);
export default appstore;