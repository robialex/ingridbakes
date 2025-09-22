import React from "react";

function CTASection() {
  return (
    <section className="relative py-4 sm:py-10 md:py-16 flex items-center justify-center bg-[#fff8e1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold mb-2 text-[#1B3A57] tracking-wide">
          Order a Cake or Pastry
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-[#1B3A57]/90 mb-4 sm:mb-8 font-sans">
          Experience the warmth and luxury of Ingrid Bakes.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 w-full">
          <a
            href="https://wa.me/35799127455"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold px-8 py-3 text-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] w-full sm:w-auto"
          >
            Order Now
          </a>
          <a
            href="/menu"
            className="rounded-full bg-[#001F3F] hover:bg-[#334155] text-white font-semibold px-8 py-3 text-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#001F3F] w-full sm:w-auto"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
