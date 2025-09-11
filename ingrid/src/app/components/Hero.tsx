import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function useFadeInOnScroll(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("opacity-100", "translate-y-0");
      }
    };

    setTimeout(onScroll, delay);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [delay]);

  return ref;
}

function Hero() {
  const ref = useFadeInOnScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/imgs/shop-from-the-outside.jpg"
        alt="Ingrid's Mediterranean café exterior"
        fill
        priority
        className="object-cover object-center brightness-[0.65] z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1B3A57]/50 via-[#D4AF37]/10 to-white/0" />
      <div
        ref={ref}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white drop-shadow-xl mb-4">
          Ingrid Bakes
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-xl mx-auto mb-8 font-sans">
          Luxurious cakes & pastries, crafted with Mediterranean soul. Cozy interiors, golden moments.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/menu"
            className="rounded-full px-7 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C79C2C] text-[#1B3A57] font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            Explore Menu
          </Link>
        </div>
        <div className="mt-8 text-sm text-white/80 font-sans">
          Free tastings every Friday · Walk-ins welcome
        </div>
      </div>
    </section>
  );
}

export default Hero;