import React from "react";

export default function Welcome() {
  return (
    <div className="w-full bg-center bg-cover bg-no-repeat bg-[url('/image/dall_e_tilepattern.png')] flex flex-col items-center justify-center flex-1  text-center">
    <div className="bg-black bg-opacity-40 w-full py-2">
      <h1 className="text-6xl font-bold text-white pt-16">KoboBot</h1>

      <h2 className="mt-3 text-2xl font-bold text-orange-200">
        A chat interface for the KoboToolbox support pages
      </h2>
    </div>
    </div>
  );
}
