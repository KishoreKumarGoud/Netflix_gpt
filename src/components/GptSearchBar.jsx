/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
// import openai from '../utils/openAI'; 
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, Gemini_API } from '../utils/constatnts';
import MovieSuggestions from './MovieSuggestions';
import { useDispatch, useSelector } from 'react-redux';
import { addsearchResults } from '../utils/movieslice';

 const   GptSearchBar = () => {
    
    const dispatch=useDispatch();
    const inpref=useRef(null);
     const searchmovieTMDB=async (movie)=>{
        // console.log(movie,"-------");

const gptmovie=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,API_OPTIONS);
const jsonData= await gptmovie.json();
console.log("rocky data",jsonData);

return jsonData;

    }


    async function handleGPTSearch(){
        const query="Act as movie recommandation system for the given query :"+ inpref.current.value + ",only give top 6 movies 'names only' comma-seperated array like in given result example:War,OG,Gana gana Mana,RRR,Ganga";
 
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:Gemini_API,
});
console.log("searched team",query); 
const gemini_response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: query,})
    // console.log(gemini_response,"gemini resssss");
    
//         const gptresults = await openai.chat.completions.create({
//   messages: [{ role: 'user', content: query }],
//   model: 'gpt-3.5-turbo',
// });
console.log("from gpt search function",gemini_response.candidates[0].content.parts[0].text);
const gptMovies=gemini_response.candidates[0].content.parts[0].text.split(",").map(m=>m.trim());
console.log("gpt moviesssssss",gptMovies);
const movieData=gptMovies.map((movie)=>searchmovieTMDB(movie))
const tmdbResults=await Promise.all(movieData);
dispatch(addsearchResults(tmdbResults))



// console.log("resolved promises array",tmdbResults);

// {
//             tmdbResults.map((ele)=>{
//                 <MovieSuggestions text="called"/>
//             })
//         }

    }
//     useEffect(()=>{
// console.log("from reduxxxxxx",moviesfromredux);

    
// },[moviesfromredux])
  return (
    <>
    <div className='pt-[10%] mx-[30%] '>
        <form className='bg-black p-4 flex justify-center items-center gap-4 ' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="what's on your mind..." className='bg-white py-2 px-2.5 rounded-md w-lg 'ref={inpref}/>
            <button className='bg-red-600 px-2.5 rounded-lg py-2 font-semibold text-white' onClick={handleGPTSearch}>Search</button>
        </form>

        
    </div>
    </>
    
  )
}

export default GptSearchBar