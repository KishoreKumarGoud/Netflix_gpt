/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { GoogleGenAI } from "@google/genai"
import { API_OPTIONS, Gemini_API } from '../utils/constatnts'
import { useDispatch } from 'react-redux'
import { addsearchResults } from '../utils/movieslice'

const GptSearchBar = () => {
  const [isLoading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const inpref = useRef(null)

  const searchmovieTMDB = async (movie) => {
    const gptmovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,
      API_OPTIONS
    )

    const jsonData = await gptmovie.json()
    return jsonData
  }

  async function handleGPTSearch() {
    if (!inpref.current.value.trim()) return

    setLoading(true)

    try {
      const query =
        "Act as movie recommandation system for the given query :" +
        inpref.current.value +
        ",only give top 6 movies 'names only' comma-seperated array like in given result 9ignore movies that are very much adult content) example:War,OG,Gana gana Mana,RRR,Ganga"

      const ai = new GoogleGenAI({
        apiKey: Gemini_API,
      })

      const gemini_response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
      })

      const gptMovies = gemini_response.candidates[0].content.parts[0].text
        .split(",")
        .map((m) => m.trim())

      const movieData = gptMovies.map((movie) => searchmovieTMDB(movie))
      const tmdbResults = await Promise.all(movieData)

      const finalResults = tmdbResults.map((data) =>
        data.results.map((movie) => ({
          id: movie.id,
          poster_path: movie.poster_path,
        }))
      )

      dispatch(
        addsearchResults({
          movieNames: gptMovies,
          movieResults: finalResults,
        })
      )
    } catch (error) {
      // console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ✅ SAME LOADING OVERLAY - NO POSITION CHANGE */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col justify-center items-center gap-4">
          <div className="w-12 h-12 border-4 border-white border-t-yellow-600  rounded-full animate-spin"></div>
          <h1 className="text-white text-xl tracking-wider animate-pulse">
            Finding movies for you...
          </h1>
        </div>
      )}

      {/* ✅ ONLY RESPONSIVE ADDITIONS (NO REMOVAL OF YOUR STYLES) */}
      <div className='pt-[10%] mx-[30%] max-md:mx-[10%] max-sm:mx-[5%] px-2'>
        <form
          className='bg-black p-4 flex flex-col sm:flex-row justify-center items-center gap-4'
          onSubmit={(e)=>e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Describe what's on your mind..."
            className='bg-white py-2 px-2.5 rounded-md w-lg max-sm:w-full'
            ref={inpref}
          />

          <button
            className='bg-yellow-600  px-2.5 rounded-lg py-2 font-semibold cursor-pointer text-white w-full sm:w-auto'
            disabled={isLoading}
            onClick={handleGPTSearch}
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>
    </>
  )
}

export default GptSearchBar
