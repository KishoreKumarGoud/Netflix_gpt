import React from 'react'
import GptSearchBar from './GptSearchBar'
import MovieSuggestions from './MovieSuggestions'
import { login_bg } from '../utils/constatnts'

const GPTSearch = () => {
  return (
    <div className="relative h-screen w-full">

      {/* ✅ BACKGROUND IMAGE */}
      <img 
        src={login_bg}
        className="absolute top-0 left-0 h-full w-full object-cover "
        alt="background"
      />

      {/* ✅ CONTENT ON TOP OF IMAGE */}
      <div className="relative z-5 flex flex-col items-center pt-24 px-4">
        <GptSearchBar />
        <MovieSuggestions />
      </div>

    </div>
  )
}

export default GPTSearch
