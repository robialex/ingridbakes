'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// ====== Animation Hook ======
function useFadeInOnScroll(delay = 0, direction: 'left' | 'right' | 'up' = 'up') {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const translateClass =
      direction === 'left'
        ? 'translate-x-12'
        : direction === 'right'
        ? '-translate-x-12'
        : 'translate-y-8';
    el.classList.add("opacity-0", translateClass, "transition-all", "duration-700");
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("opacity-100");
        el.classList.remove(translateClass);
        el.classList.add("translate-x-0", "translate-y-0");
      }
    };
    setTimeout(onScroll, delay);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [delay, direction]);
  return ref;
}

// ====== Featured Desserts Data ======
const featuredDesserts = [
  {
    name: "Basque Cheesecake",
    image: "/imgs/basque-cheesecake.jpg",
    desc: "Caramelized, creamy, unforgettable.",
  },
  {
    name: "Pistachio Cake",
    image: "/imgs/pistachio-cake.jpg",
    desc: "Nutty, rich, Mediterranean classic.",
  },
  {
    name: "Raspberry-Pistachio Cake",
    image: "/imgs/raspberry-pistachio.jpg",
    desc: "Tangy, vibrant, seasonal favorite.",
  },
  {
    name: "Lemon-Mint Honey Cake",
    image: "/imgs/lemon-mint-honey.jpg",
    desc: "Bright, floral, honey-sweetened.",
  },
];

// ====== Gallery Images ======
const galleryImages = [
  "/imgs/gallery-1.jpg",
  "/imgs/gallery-2.jpg",
  "/imgs/gallery-3.jpg",
  "/imgs/gallery-4.jpg",
  "/imgs/gallery-5.jpg",
  "/imgs/gallery-6.jpg",
];

// ====== Navigation Bar ======
function Navbar() {
  return (
    <nav
      style={{ height: 'var(--nav-h)' }}
      className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-br from-[#102233] via-[#153445] to-[#0f2433] border-b border-white/5 bg-opacity-95 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-[#D4AF37] tracking-wide">Ingrid Bakes</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {["Menu", "Gallery", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white font-medium transition-all duration-200 hover:text-[#D4AF37] hover:scale-105 hover:underline underline-offset-4"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ====== Hero Section ======
function Hero() {
  const ref = useFadeInOnScroll(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image (fill will be absolutely positioned) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/from-the-outside.jpg"
          alt="Ingrid Bakes exterior"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Decorative gold pattern overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-10 mix-blend-soft-light" />
      </div>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />
      {/* Content */}
      <div
        ref={ref}
        className="relative z-20 px-6 text-center max-w-3xl flex flex-col items-center"
      >
        {/* Creamy rectangle with gold border */}
        <div className="bg-[#fff8e1]/80 rounded-xl px-8 py-10 shadow-2xl border-2 border-[#D4AF37] relative backdrop-blur-0"
          style={{
            boxShadow: "0 8px 32px 0 rgba(212,175,55,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)",
          }}
        >
          {/* Decorative gold shine top left */}
          <span className="absolute top-0 left-0 w-12 h-2 bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-t-xl" />
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3A57] drop-shadow-[0_10px_25px_rgba(212,175,55,0.25)] mb-4">
            Ingrid Bakes
          </h1>
          <p className="text-lg md:text-2xl text-[#1B3A57]/90 max-w-2xl mx-auto mb-8 drop-shadow font-sans">
            Luxurious cakes &amp; pastries, crafted with Mediterranean soul. Cozy interiors, golden moments.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <PrimaryButton href="/menu">Explore Menu</PrimaryButton>
            <PrimaryButton href="https://wa.me/35799127455" external>Order Now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== Primary Button Component ======
function PrimaryButton({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const base =
    "rounded-full px-7 py-3 font-semibold shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#C79C2C] text-[#1B3A57] border border-[#D4AF37]/40 hover:scale-105 hover:shadow-2xl hover:from-[#C79C2C] hover:to-[#D4AF37] relative overflow-hidden";
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={base}
    >
      <span className="relative z-10">{children}</span>
      {/* Shine effect */}
      <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
        <span className="block w-1/2 h-full bg-gradient-to-r from-white/30 to-transparent blur-sm opacity-0 group-hover:opacity-60 transition duration-300" />
      </span>
    </a>
  ) : (
    <Link href={href} className={base}>
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
        <span className="block w-1/2 h-full bg-gradient-to-r from-white/30 to-transparent blur-sm opacity-0 group-hover:opacity-60 transition duration-300" />
      </span>
    </Link>
  );
}

// ====== Quick Intro Section ======
function QuickIntro() {
  const ref = useFadeInOnScroll(200);
  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] relative overflow-hidden">
      {/* Subtle gold pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      {/* Abstract Mediterranean lines/shapes */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute top-0 left-0 w-full h-32 md:h-48">
          <path fill="#D4AF37" fillOpacity="0.08" d="M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,117.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute bottom-0 left-0 w-full h-24 md:h-32">
          <path fill="#C79C2C" fillOpacity="0.07" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B3A57] mb-4 drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)] animate-fade-in">
          Authentic &amp; Artisanal
        </h2>
        <p className="text-lg md:text-xl text-[#5A6B7C] leading-relaxed mb-2 font-sans drop-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
          At Ingrid Bakes, every dessert is a celebration of Mediterranean tradition and luxury. We use only the finest ingredients—no artificial colors, ever—for a cozy, unforgettable café experience.
        </p>
      </div>
    </section>
  );
}

// ====== Gallery Image Card (Refactored for hook) ======
function GalleryImageCard({ src, direction, rotate, delay, alt }: { src: string; direction: 'left' | 'right'; rotate: string; delay: number; alt: string }) {
  const ref = useFadeInOnScroll(delay, direction);
  return (
    <div
      ref={ref}
      className={`relative w-full h-64 rounded-2xl overflow-hidden shadow-lg opacity-0 transition-all duration-700 group ${rotate}`}
      style={{
        background: "linear-gradient(135deg,#fff8e1 0%, #f7f5f2 100%)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-[#D4AF37]/10 pointer-events-none rounded-2xl" />
    </div>
  );
}

// ====== Gallery Section ======
function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-10 mix-blend-soft-light" />
      {/* Abstract Mediterranean lines/shapes for integration */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute top-0 left-0 w-full h-24 md:h-32">
          <path fill="#D4AF37" fillOpacity="0.07" d="M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,117.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B3A57] drop-shadow-sm mb-2 animate-fade-in">
            Bakery Gallery
          </h2>
          <p className="text-[#5A6B7C] text-lg md:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A glimpse inside our Mediterranean-inspired bakery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((src, i) => {
            const direction: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
            const rotate = i % 2 === 0 ? "-rotate-2" : "rotate-2";
            return (
              <GalleryImageCard
                key={src}
                src={src}
                direction={direction}
                rotate={rotate}
                delay={i * 120}
                alt={`Bakery gallery image ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ====== Dessert Card (Refactored for hook) ======
function DessertCard({ dessert, delay }: { dessert: typeof featuredDesserts[0]; delay: number }) {
  const ref = useFadeInOnScroll(delay, 'up');
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-5 bg-white/80 border border-[#D4AF37]/30 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-[1.04] flex flex-col items-center opacity-0 translate-y-8"
      style={{
        background: "linear-gradient(135deg, #fff8e1 0%, #f7f5f2 100%)",
      }}
    >
      <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden mb-4">
        <Image
          src={dessert.image}
          alt={dessert.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-[#D4AF37]/10 pointer-events-none rounded-xl" />
      </div>
      <h3 className="font-serif text-lg md:text-xl text-[#1B3A57] font-semibold mb-1 text-center drop-shadow-sm animate-fade-in">
        {dessert.name}
      </h3>
      <p className="text-sm text-[#5A6B7C] mb-2 text-center font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>{dessert.desc}</p>
      <div className="mt-auto flex justify-center">
        <PrimaryButton href="/menu">View details</PrimaryButton>
      </div>
    </div>
  );
}

// ====== Featured Desserts Section ======
function FeaturedDesserts() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] relative">
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      {/* Abstract Mediterranean lines/shapes */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute bottom-0 left-0 w-full h-24 md:h-32">
          <path fill="#D4AF37" fillOpacity="0.07" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-12 text-[#1B3A57] drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)] animate-fade-in">
          Our Featured Desserts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredDesserts.map((dessert, idx) => (
            <DessertCard key={dessert.name} dessert={dessert} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== Map Section ======
function MapSection() {
  const ref = useFadeInOnScroll(200);
  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-[#f7f5f2] via-[#fff8e1] to-[#f7f5f2] relative">
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B3A57] mb-4 drop-shadow-sm animate-fade-in">
          Visit Us
        </h2>
        <p className="text-lg text-[#5A6B7C] mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Find Ingrid Bakes in Limassol, Cyprus. Tap the map for directions!
        </p>
        <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-[#D4AF37] hover:scale-105 transition-transform bg-[#fff8e1]/80">
          <iframe
            title="Bakery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.045154963579!2d33.0457!3d34.6847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e770e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sLimassol%2C%20Cyprus!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://goo.gl/maps/2nQ2wQvJQwqF6QbJ8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ingrid Bakes on Google Maps"
            className="absolute inset-0"
            tabIndex={-1}
          />
        </div>
      </div>
    </section>
  );
}

// ====== CTA Section ======
function CTASection() {
  const ref = useFadeInOnScroll(600);
  return (
    <section
      ref={ref}
      className="py-16 md:py-24 text-center bg-gradient-to-r from-[#D4AF37] via-[#C79C2C] to-[#fff8e1] relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      {/* Decorative shine */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-white/40 to-transparent rounded-t-xl" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#1B3A57] drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)] animate-fade-in">
          Order a Cake or Pastry
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg md:text-xl text-[#1B3A57]/90 mb-8 font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Experience the warmth and luxury of Ingrid Bakes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton href="https://wa.me/35799127455" external>Order Now</PrimaryButton>
          <PrimaryButton href="/menu">View Menu</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

// ====== Footer ======
function Footer() {
  return (
    <footer className="bg-[#1B3A57] text-white py-10 px-6 mt-0 relative">
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-10 mix-blend-soft-light" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-xl font-bold text-[#D4AF37] mb-2">Ingrid Bakes</span>
          <span className="text-sm font-sans">Mediterranean Café &amp; Bakery</span>
          <span className="text-sm font-sans mt-2">Limassol, Cyprus</span>
          <span className="text-sm font-sans mt-1">357 99127455</span>
          <span className="text-sm font-sans mt-1">info@ingridbakes.com</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <Link href="/menu" className="text-white/80 hover:text-[#D4AF37] transition-colors hover:underline underline-offset-4">Menu</Link>
          <Link href="/gallery" className="text-white/80 hover:text-[#D4AF37] transition-colors hover:underline underline-offset-4">Gallery</Link>
          <Link href="/reviews" className="text-white/80 hover:text-[#D4AF37] transition-colors hover:underline underline-offset-4">Reviews</Link>
          <Link href="/contact" className="text-white/80 hover:text-[#D4AF37] transition-colors hover:underline underline-offset-4">Contact</Link>
          <PrimaryButton href="https://wa.me/35799127455" external>
            <span className="text-sm font-semibold">WhatsApp Order</span>
            <span aria-hidden>&#128172;</span>
          </PrimaryButton>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-white/60 font-sans relative z-10">
        &copy; {new Date().getFullYear()} Ingrid Bakes. All rights reserved.
      </div>
    </footer>
  );
}

// ====== Main Home Page ======
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff8e1] text-[#1B3A57] font-sans">
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }} className="flex-grow">
        <Hero />
        <QuickIntro />
        <GallerySection />
        <FeaturedDesserts />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
      {/* Cinematic fade-in animation */}
      <style jsx global>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 1s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
