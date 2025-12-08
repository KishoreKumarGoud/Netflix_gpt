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

       
      </div>
    </div>
  );
};

export default Videotitle;
