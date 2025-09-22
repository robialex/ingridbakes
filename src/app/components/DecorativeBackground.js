import React from "react";

export default function DecorativeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none">
      {/* Cream background */}
      <div className="absolute inset-0 bg-[#FFFBEA]" />
      {/* Subtle navy accent circle, bottom right */}
      <svg
        className="absolute bottom-[-40px] right-[-40px] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] opacity-15"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="100" fill="#001F3F" />
      </svg>
      {/* Subtle navy ellipse, top left */}
      <svg
        className="absolute top-[-32px] left-[-48px] w-[90px] h-[60px] sm:w-[140px] sm:h-[90px] opacity-10"
        viewBox="0 0 140 90"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="70" cy="45" rx="70" ry="45" fill="#001F3F" />
      </svg>
    </div>
  );
}