import React, { useRef } from "react";

function CTASection() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-4 sm:py-10 md:py-16 flex items-center justify-center"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#fff8e1] via-[#f7e7b2] to-[#ecd98a]" />
      {/* Border overlay */}
      <div className="absolute inset-0 z-10 rounded-2xl border border-[#D4AF37] pointer-events-none" />
      {/* Decorative SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
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
        />
        <path
          d="M35 70 Q50 40 65 70"
          stroke="#C79C2C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-30">
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
          </a>
        </div>
      </div>
      {/* All shimmer/button styles and keyframes in one block */}
      <style jsx>{`
        .luxury-btn span {
          position: relative;
          z-index: 10;
        }
        .luxury-btn::after {
          content: '';
          position: absolute;
          left: -60%;
          top: 0;
          width: 220%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          opacity: 0;
          border-radius: 9999px;
          transition: opacity 0.3s;
        }
        .luxury-btn:hover::after {
          opacity: 1;
          animation: shimmer 1.2s linear forwards;
        }
        @keyframes shimmer {
          0% { transform: translateX(-60%); opacity: 0.4; }
          40% { opacity: 0.8; }
          100% { transform: translateX(60%); opacity: 0; }
        }
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
    </section>
  );
}

export default CTASection;

// Simple placeholder GallerySection as a named export
export function GallerySection() {
  return (
    <section className="py-12 bg-[#fff8e1] text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B3A57]">
        Our Gallery
      </h2>
      <p className="text-[#1B3A57]/80 max-w-xl mx-auto mb-8">
        Beautiful creations from Ingrid Bakery.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 sm:px-6">
        <div className="bg-[#f7e7b2] h-40 rounded-lg" />
        <div className="bg-[#f7e7b2] h-40 rounded-lg" />
        <div className="bg-[#f7e7b2] h-40 rounded-lg" />
        <div className="bg-[#f7e7b2] h-40 rounded-lg" />
      </div>
    </section>
  );
}
