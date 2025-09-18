import React, { useRef } from "react";

// If you use a fade-in hook, import it here
// import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

function CTASection() {
  // If you use a fade-in hook, uncomment and use it here
  // const ref = useFadeInOnScroll(600);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative py-4 sm:py-10 md:py-16 flex items-center justify-center"
    >
      {/* Decorative gradient/pattern overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#fff8e1] via-[#f7e7b2] to-[#ecd98a]" />
      <div className="absolute inset-0 z-10 rounded-2xl border border-[#D4AF37] pointer-events-none" />
      <svg
        className="absolute left-4 bottom-4 w-16 sm:w-24 h-16 sm:h-24 opacity-20 z-20 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 80 Q50 20 80 80"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M35 70 Q50 40 65 70"
          stroke="#C79C2C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-30">
        <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold mb-2 text-[#1B3A57] tracking-wide animate-fade-in">
          Order a Cake or Pastry
        </h2>
        <p
          className="mt-2 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-[#1B3A57]/90 mb-4 sm:mb-8 font-sans animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Experience the warmth and luxury of Ingrid Bakes.
        </p>
        {/* Buttons stack vertically on mobile, inline on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 w-full">
          <a
            href="https://wa.me/35799127455"
            target="_blank"
            rel="noreferrer"
            className="luxury-btn relative rounded-full px-4 py-2 sm:px-7 sm:py-3 font-bold text-[#2d210a] text-sm sm:text-lg shadow-[0_2px_12px_rgba(212,175,55,0.10)] bg-gradient-to-br from-[#f7e7b2] via-[#e6c76e] to-[#bfa14b] border-2 border-[#e6c76e] hover:scale-105 hover:shadow-[0_4px_24px_rgba(212,175,55,0.18)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] overflow-hidden group tracking-wider w-full sm:w-auto min-h-[40px]"
          >
            <span className="relative z-10 font-bold tracking-wider font-[Playfair_Display,serif]">
              Order Now
            </span>
            <span
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                background:
                  "repeating-linear-gradient(135deg,rgba(255,255,220,0.10) 0px,rgba(212,175,55,0.12) 8px,rgba(255,255,220,0.10) 16px)",
                mixBlendMode: "soft-light",
              }}
            />
            <span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
              <span className="block absolute left-[-60%] top-0 w-[220%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-80 animate-shimmer rounded-full" />
            </span>
            <style jsx>{`
              .animate-shimmer {
                animation: shimmerLuxuryBtn 1.2s linear forwards;
              }
              @keyframes shimmerLuxuryBtn {
                0% {
                  transform: translateX(-60%);
                  opacity: 0.4;
                }
                40% {
                  opacity: 0.8;
                }
                100% {
                  transform: translateX(60%);
                  opacity: 0;
                }
              }
            `}</style>
          </a>
          <a
            href="/menu"
            className="luxury-btn relative rounded-full px-4 py-2 sm:px-7 sm:py-3 font-bold text-[#2d210a] text-sm sm:text-lg shadow-[0_2px_12px_rgba(212,175,55,0.10)] bg-gradient-to-br from-[#f7e7b2] via-[#e6c76e] to-[#bfa14b] border-2 border-[#e6c76e] hover:scale-105 hover:shadow-[0_4px_24px_rgba(212,175,55,0.18)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] overflow-hidden group tracking-wider w-full sm:w-auto min-h-[40px]"
          >
            <span className="relative z-10 font-bold tracking-wider font-[Playfair_Display,serif]">
              View Menu
            </span>
            <span
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                background:
                  "repeating-linear-gradient(135deg,rgba(255,255,220,0.10) 0px,rgba(212,175,55,0.12) 8px,rgba(255,255,220,0.10) 16px)",
                mixBlendMode: "soft-light",
              }}
            />
            <span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
              <span className="block absolute left-[-60%] top-0 w-[220%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-80 animate-shimmer rounded-full" />
            </span>
            <style jsx>{`
              .animate-shimmer {
                animation: shimmerLuxuryBtn 1.2s linear forwards;
              }
              @keyframes shimmerLuxuryBtn {
                0% {
                  transform: translateX(-60%);
                  opacity: 0.4;
                }
                40% {
                  opacity: 0.8;
                }
                100% {
                  transform: translateX(60%);
                  opacity: 0;
                }
              }
            `}</style>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;