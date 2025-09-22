import React from "react";
import DecorativeBackground from "./DecorativeBackground";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <DecorativeBackground />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-[#001F3F] mb-4">
          Ingrid Bakes
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          Luxurious cakes &amp; pastries, crafted with Mediterranean soul. Cozy interiors, golden moments.
        </p>
        <button className="rounded-full bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold px-8 py-3 text-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]">
          Explore Menu
        </button>
      </div>
    </section>
  );
}