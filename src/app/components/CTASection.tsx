import React, { useRef } from "react";
import Hero from "./components/Hero";
import CTASection from "./components/CTASection";

// If you use a fade-in hook, import it here
// import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

function App() {
  // If you use a fade-in hook, uncomment and use it here
  // const ref = useFadeInOnScroll(600);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Hero />
      <CTASection ref={ref} />
      {/* Other sections/components */}
    </div>
  );
}

export default App;

// src/app/components/Hero.tsx
import React from "react";
function Hero() {
  // ...Hero JSX...
}
export default Hero;