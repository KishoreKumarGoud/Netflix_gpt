/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
// import openai from '../utils/openAI'; 
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, Gemini_API } from '../utils/constatnts';
import MovieSuggestions from './MovieSuggestions';
import { useDispatch, useSelector } from 'react-redux';
import { addsearchResults } from '../utils/movieslice';

 const   GptSearchBar = () => {
  const [isLoading,setLoading]=useState(false);
    
    const dispatch=useDispatch();
    const inpref=useRef(null);
    console.log("Gemini key:", import.meta.env.VITE_GEMINI_API_KEY);

     const searchmovieTMDB=async (movie)=>{
        // console.log(movie,"-------");

const gptmovie=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,API_OPTIONS);
const jsonData= await gptmovie.json();
console.log("rocky data",jsonData);

return jsonData;

    }


    async function handleGPTSearch(){
      setLoading(true);
        const query="Act as movie recommandation system for the given query :"+ inpref.current.value + ",only give top 6 movies 'names only' comma-seperated array like in given result example:War,OG,Gana gana Mana,RRR,Ganga";
 
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:Gemini_API,
});
console.log("searched team",query); 
const gemini_response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
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
 const finalResults = tmdbResults.map((data) =>
      data.results.map((movie) => ({
        id: movie.id,
        poster_path: movie.poster_path,
      }))
    );
    console.log("movename",gptMovies,"final results",finalResults);

dispatch(
  addsearchResults({
    movieNames: gptMovies,
    movieResults: finalResults,
  })

);
            setLoading(false);




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
     {isLoading && (
  <div className="fixed inset-0 bg-black/80 z-50 flex flex-col justify-center items-center gap-4">
    <div className="w-12 h-12 border-4 border-white border-t-red-600 rounded-full animate-spin"></div>
    <h1 className="text-white text-xl tracking-wider animate-pulse">
      Finding movies for you...
    </h1>
  </div>
)}

        <form className='bg-black p-4 flex justify-center items-center gap-4 ' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="what's on your mind..." className='bg-white py-2 px-2.5 rounded-md w-lg 'ref={inpref}/>
            <button className='bg-red-600 px-2.5 rounded-lg py-2 font-semibold cursor-pointer text-white' disabled={isLoading} onClick={handleGPTSearch}>Search</button>
        </form>

         {/* <div>
           <h1 className='bg-white  text-red-400 font-bold mb-4 pl-4 hover:text-black transition-all duration-400 '>hello</h1>
        <h1 className='z-200 bg-red-800 w-fit '>
         
          <img src="https://tse3.mm.bing.net/th/id/OIP.25DfxcKL3bZRmRHo5I0pDgHaI3?pid=Api&P=0&h=180"></img>
          <img src="https://www.pngplay.com/wp-content/uploads/1/8-Number-PNG-Royalty-Free.png"></img>
        </h1>
      </div> */}
    </div>
    </>
    
  )
}

export default GptSearchBar