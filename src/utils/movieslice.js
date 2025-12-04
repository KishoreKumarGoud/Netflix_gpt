import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice(
    {
        name: "movies",
        initialState:{
            nowplayingmovies:null,
            movieTrailer:null,
            popularMovies:null,
            topRatedMovies:null,
            upComing:null,
            gptSearchesults:null
        },
        reducers:{
            addNowplayingmovies:(state,action)=>{
state.nowplayingmovies=action.payload
            },
            addtoprated:(state,action)=>{
state.topRatedMovies=action.payload
            },
              addpopularMovies:(state,action)=>{
state.popularMovies=action.payload
            },
            addUpcoming:(state,action)=>{ 
                 state.upComing=action.payload;
            },
            addtrailervideo:(state,action)=>{
state.movieTrailer=action.payload;

            },
            addsearchResults:(state,action)=>{
state.gptSearchesults=action.payload;
            }
        }
    }
)
export const {addNowplayingmovies,addtoprated,addtrailervideo,addUpcoming,addpopularMovies,addsearchResults}=movieslice.actions;
export default movieslice.reducer;
