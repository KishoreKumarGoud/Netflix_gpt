import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute top-0 left-0 z-10 
        w-full h-full 
        bg-gradient-to-r from-black/70
        text-gray-300

        flex flex-col justify-center
        px-5 md:px-12
      "
    >
      <div className="max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          {title}
        </h1>

        <p className="py-3 md:py-6 text-sm sm:text-base md:text-md leading-relaxed">
          {overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-gray-200 text-black font-semibold px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-gray-400">
            Play
          </button>

          <button className="bg-gray-500 bg-opacity-90 rounded-lg px-4 py-2 md:px-6 md:py-2 text-white">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videotitle;
