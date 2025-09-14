'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

// ====== GALLERY & DESSERT ARRAYS ======
const galleryImages: string[] = [
  "/imgs/gallery1.jpg",
  "/imgs/gallery2.jpg",
  "/imgs/gallery3.jpg",
  "/imgs/gallery4.jpg",
  "/imgs/gallery5.jpg",
  "/imgs/gallery6.jpg",
  "/imgs/gallery7.jpg",
  "/imgs/gallery8.jpg",
  "/imgs/gallery9.jpg",
];

const featuredDesserts: { name: string; desc: string; image: string }[] = [
  {
    name: "Mediterranean Pistachio Cake",
    desc: "Layers of pistachio sponge, honey cream, and rosewater syrup.",
    image: "/imgs/dessert1.jpg",
  },
  {
    name: "Lemon Olive Oil Loaf",
    desc: "Moist, fragrant loaf with Sicilian lemons and extra virgin olive oil.",
    image: "/imgs/dessert2.jpg",
  },
  {
    name: "Chocolate Hazelnut Torte",
    desc: "Rich chocolate cake with roasted hazelnuts and silky ganache.",
    image: "/imgs/dessert3.jpg",
  },
  {
    name: "Orange Blossom Cheesecake",
    desc: "Creamy cheesecake infused with orange blossom and almond crust.",
    image: "/imgs/dessert4.jpg",
  },
  {
    name: "Baklava Millefeuille",
    desc: "Crispy layers, pistachio cream, and honeyed syrup.",
    image: "/imgs/dessert5.jpg",
  },
  {
    name: "Rosewater Éclair",
    desc: "Choux pastry filled with rosewater custard and gold leaf.",
    image: "/imgs/dessert6.jpg",
  },
  {
    name: "Almond Citrus Tart",
    desc: "Fragrant almond cream, candied orange, and buttery crust.",
    image: "/imgs/dessert7.jpg",
  },
  {
    name: "Fig & Walnut Cake",
    desc: "Spiced cake with figs, walnuts, and honey glaze.",
    image: "/imgs/dessert8.jpg",
  },
];

// ====== Animation Hook ======
function useFadeInOnScroll(delay = 0, direction: 'left' | 'right' | 'up' = 'up') {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const translateClass =
      direction === 'left'
        ? 'translate-x-8'
        : direction === 'right'
        ? '-translate-x-8'
        : 'translate-y-6';
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

// ====== Luxury Bakery Button (Unified) ======
function LuxuryBakeryButton({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  // Responsive button: full width on mobile, auto on desktop, min height for touch
  const base =
    "luxury-btn relative rounded-full px-5 py-3 sm:px-7 font-bold text-[#2d210a] text-base sm:text-lg shadow-[0_2px_12px_rgba(212,175,55,0.10)] " +
    "bg-gradient-to-br from-[#f7e7b2] via-[#e6c76e] to-[#bfa14b] border-2 border-[#e6c76e] " +
    "hover:scale-105 hover:shadow-[0_4px_24px_rgba(212,175,55,0.18)] transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-[#D4AF37] overflow-hidden group " +
    "tracking-wider w-full sm:w-auto min-h-[44px] " +
    className;

  const textClass = "relative z-10 font-bold tracking-wider font-[Playfair_Display,serif]";

  const ButtonContent = (
    <>
      <span className={textClass}>{children}</span>
      <span className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: "repeating-linear-gradient(135deg,rgba(255,255,220,0.10) 0px,rgba(212,175,55,0.12) 8px,rgba(255,255,220,0.10) 16px)",
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
          0% { transform: translateX(-60%); opacity: 0.4; }
          40% { opacity: 0.8; }
          100% { transform: translateX(60%); opacity: 0; }
        }
      `}</style>
    </>
  );

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .font-[Playfair_Display,serif] {
            font-family: 'Playfair Display', serif !important;
          }
        `}</style>
      </Head>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={base}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {ButtonContent}
        </a>
      ) : (
        <Link href={href} className={base}>
          {ButtonContent}
        </Link>
      )}
    </>
  );
}

// ====== Responsive Navbar ======
function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      style={{ height: 'var(--nav-h)' }}
      className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-br from-[#102233] via-[#153445] to-[#0f2433] border-b border-white/5 bg-opacity-95 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex-1 flex items-center justify-center sm:justify-start gap-2">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#e6c76e] to-[#bfa14b] text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)] tracking-wide">
            Ingrid Bakes
          </span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 md:gap-6 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="luxury-nav-link text-[#f7f5f2] font-medium transition-all duration-200 px-2 py-1 rounded hover:text-[#D4AF37] hover:bg-[#fff8e1]/10 hover:underline underline-offset-6"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <rect y="7" width="32" height="3" rx="1.5" fill="#D4AF37" />
            <rect y="14" width="32" height="3" rx="1.5" fill="#D4AF37" />
            <rect y="21" width="32" height="3" rx="1.5" fill="#D4AF37" />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 top-full w-full transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ boxShadow: open ? "0 8px 32px rgba(212,175,55,0.10)" : undefined }}
      >
        <div className="bg-[#fff8e1] rounded-b-2xl py-2 px-4 flex flex-col gap-1 border-t border-[#e6c76e]">
          {navLinks.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              className="w-full py-3 px-2 text-center font-serif font-bold text-base sm:text-lg text-[#1B3A57] hover:text-[#D4AF37] transition-colors min-h-[44px]"
              style={{
                borderBottom:
                  idx < navLinks.length - 1
                    ? "1px solid #e6c76e"
                    : "none",
              }}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Decorative gold sparkles */}
      <svg className="absolute right-8 top-2 w-12 h-12 opacity-10 pointer-events-none" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="24" cy="24" r="6" fill="#D4AF37" fillOpacity="0.12" />
      </svg>
    </nav>
  );
}

// ====== Hero Section ======
function Hero() {
  const ref = useFadeInOnScroll(0);

  return (
    <section className="relative h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Responsive height for mobile: h-[90vh] */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/from-the-outside.jpg"
          alt="Ingrid Bakes exterior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ objectPosition: "center top" }}
        />
        {/* Decorative gold pattern overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-10 mix-blend-soft-light" />
      </div>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />
      {/* Decorative gold swirl */}
      <svg className="absolute right-4 bottom-4 w-20 sm:w-32 h-20 sm:h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M20 80 Q50 20 80 80" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="50" cy="50" r="8" fill="#D4AF37" fillOpacity="0.08" />
      </svg>
      {/* Content */}
      <div
        ref={ref}
        className="relative z-20 px-4 sm:px-6 text-center max-w-3xl flex flex-col items-center"
      >
        {/* Creamy rectangle with gold border */}
        <div className="bg-[#fff8e1]/80 rounded-xl px-4 sm:px-8 py-8 sm:py-10 shadow-2xl border-2 border-[#D4AF37] relative backdrop-blur-0"
          style={{
            boxShadow: "0 8px 32px 0 rgba(212,175,55,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)",
          }}
        >
          {/* Decorative gold shine top left */}
          <span className="absolute top-0 left-0 w-12 h-2 bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-t-xl" />
          <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-bold text-[#1B3A57] drop-shadow-[0_10px_25px_rgba(212,175,55,0.25)] mb-4 leading-tight">
            Ingrid Bakes
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-[#1B3A57]/90 max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow font-sans leading-relaxed">
            Luxurious cakes &amp; pastries, crafted with Mediterranean soul. Cozy interiors, golden moments.
          </p>
          {/* Buttons stack vertically on mobile, inline on desktop */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center w-full">
            <LuxuryBakeryButton href="/menu" className="sm:w-auto w-full">Explore Menu</LuxuryBakeryButton>
            <LuxuryBakeryButton href="https://wa.me/35799127455" external className="sm:w-auto w-full">Order Now</LuxuryBakeryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== Quick Intro Section ======
function QuickIntro() {
  const ref = useFadeInOnScroll(200);
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-16 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] relative overflow-hidden">
      {/* Reduced vertical padding for mobile */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1B3A57] mb-3 drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)] animate-fade-in">
          Authentic &amp; Artisanal
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#5A6B7C] leading-relaxed mb-2 font-sans drop-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
          At Ingrid Bakes, every dessert is a celebration of Mediterranean tradition and luxury. We use only the finest ingredients—no artificial colors, ever—for a cozy, unforgettable café experience.
        </p>
      </div>
    </section>
  );
}

// ====== Gallery Image Card ======
function GalleryImageCard({ src, direction, rotate, delay, alt }: { src: string; direction: 'left' | 'right'; rotate: string; delay: number; alt: string }) {
  const ref = useFadeInOnScroll(delay, direction);
  return (
    <div
      ref={ref}
      className={`relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg opacity-0 transition-all duration-700 group ${rotate} border-2 border-[#D4AF37]`}
      style={{
        background: "linear-gradient(135deg,#fff8e1 0%, #f7f5f2 100%)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#D4AF37]/10 pointer-events-none rounded-2xl" />
    </div>
  );
}

// ====== Gallery Section ======
function GallerySection() {
  return (
    <section className="py-6 sm:py-10 md:py-16 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] relative overflow-hidden">
      {/* Mobile-first: reduced vertical padding */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-10 mix-blend-soft-light" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-6 sm:mb-10 text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1B3A57] drop-shadow-sm mb-2 animate-fade-in">
            Bakery Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5A6B7C] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A glimpse inside our Mediterranean-inspired bakery.
          </p>
        </div>
        {/* Responsive grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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

// ====== Dessert Card ======
function DessertCard({ dessert, delay }: { dessert: typeof featuredDesserts[0]; delay: number }) {
  const ref = useFadeInOnScroll(delay, 'up');
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] border-2 border-[#D4AF37]/30 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-[1.04] flex flex-col items-center opacity-0 translate-y-8"
    >
      <div className="relative w-full h-36 sm:h-44 md:h-56 rounded-xl overflow-hidden mb-3 sm:mb-4">
        <Image
          src={dessert.image}
          alt={dessert.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#D4AF37]/10 pointer-events-none rounded-xl" />
      </div>
      <h3 className="font-serif text-base sm:text-lg md:text-xl text-[#1B3A57] font-semibold mb-1 text-center drop-shadow-sm animate-fade-in">
        {dessert.name}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-[#5A6B7C] mb-2 text-center font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>{dessert.desc}</p>
      <div className="mt-auto flex justify-center w-full">
        <LuxuryBakeryButton href="/menu" className="w-full sm:w-auto">View details</LuxuryBakeryButton>
      </div>
    </div>
  );
}

// ====== Featured Desserts Section ======
function FeaturedDesserts() {
  return (
    <section className="py-6 sm:py-10 md:py-16 bg-gradient-to-br from-[#fff8e1] via-[#f7f5f2] to-[#fff8e1] relative">
      {/* Mobile-first: reduced vertical padding */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-center font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-[#1B3A57] drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)] animate-fade-in">
          Our Featured Desserts
        </h2>
        {/* Responsive grid: 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
    <section ref={ref} className="py-6 sm:py-10 md:py-16 bg-gradient-to-br from-[#f7f5f2] via-[#fff8e1] to-[#f7f5f2] relative">
      {/* Mobile-first: reduced vertical padding */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-5 mix-blend-soft-light" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1B3A57] mb-4 drop-shadow-sm animate-fade-in">
          Visit Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#5A6B7C] mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Find Ingrid Bakes in Nicosia, Cyprus. Tap the map for directions!
        </p>
        <div
          className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #fff8e1 0%, #f7f5f2 100%)",
            border: "2px solid #D4AF37",
            boxShadow: "0 4px 24px 0 rgba(212,175,55,0.10), 0 2px 8px 0 rgba(0,0,0,0.08)",
          }}
        >
          {/* Gold shimmer accent */}
          <span
            className="absolute top-0 left-0 w-16 h-2 bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-t-2xl pointer-events-none"
            style={{ zIndex: 2 }}
          />
          <div className="w-full aspect-[16/9]">
            <iframe
              title="Bakery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.045154963579!2d33.0457!3d34.6847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e770e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sLimassol%2C%20Cyprus!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "1rem",
                position: "relative",
                zIndex: 2,
                background: "transparent",
                width: "100%",
                height: "100%",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://goo.gl/maps/2nQ2wQvJQwqF6QbJ8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ingrid Bakes on Google Maps"
            className="absolute inset-0"
            tabIndex={-1}
            style={{ zIndex: 3 }}
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
      className="relative py-6 sm:py-10 md:py-16 flex items-center justify-center"
    >
      {/* Mobile-first: reduced vertical padding */}
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
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#1B3A57] tracking-wide animate-fade-in">
          Order a Cake or Pastry
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#1B3A57]/90 mb-6 sm:mb-8 font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Experience the warmth and luxury of Ingrid Bakes.
        </p>
        {/* Buttons stack vertically on mobile, inline on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full">
          <LuxuryBakeryButton href="https://wa.me/35799127455" external className="w-full sm:w-auto">Order Now</LuxuryBakeryButton>
          <LuxuryBakeryButton href="/menu" className="w-full sm:w-auto">View Menu</LuxuryBakeryButton>
        </div>
      </div>
    </section>
  );
}

// ====== Footer ======
function Footer() {
  return (
    <footer className="bg-[#1B3A57] text-white py-6 sm:py-8 px-4 sm:px-6 mt-0 relative">
      {/* Mobile-first: reduced vertical padding */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/imgs/gold-pattern.png')] bg-repeat opacity-10 mix-blend-soft-light" />
      <svg className="absolute right-4 sm:right-8 top-4 sm:top-8 w-16 sm:w-24 h-16 sm:h-24 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M20 80 Q50 20 80 80" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="50" cy="50" r="8" fill="#D4AF37" fillOpacity="0.08" />
      </svg>
      {/* Responsive flex: vertical on mobile, horizontal on desktop */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#e6c76e] to-[#bfa14b] text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)] mb-2">Ingrid Bakes</span>
          <span className="text-xs sm:text-sm font-sans">Mediterranean Café &amp; Bakery</span>
          <span className="text-xs sm:text-sm font-sans mt-2">Limassol, Cyprus</span>
          <span className="text-xs sm:text-sm font-sans mt-1">357 99127455</span>
          <span className="text-xs sm:text-sm font-sans mt-1">info@ingridbakes.com</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
          <Link href="/menu" className="luxury-nav-link text-[#f7f5f2] hover:text-[#D4AF37] transition-colors hover:underline underline-offset-6">Menu</Link>
          <Link href="/gallery" className="luxury-nav-link text-[#f7f5f2] hover:text-[#D4AF37] transition-colors hover:underline underline-offset-6">Gallery</Link>
          <Link href="/reviews" className="luxury-nav-link text-[#f7f5f2] hover:text-[#D4AF37] transition-colors hover:underline underline-offset-6">Reviews</Link>
          <Link href="/contact" className="luxury-nav-link text-[#f7f5f2] hover:text-[#D4AF37] transition-colors hover:underline underline-offset-6">Contact</Link>
          <LuxuryBakeryButton href="https://wa.me/35799127455" external className="mt-2 w-full sm:w-auto">
            <span className="text-sm font-semibold">WhatsApp Order</span>
            <span aria-hidden>&#128172;</span>
          </LuxuryBakeryButton>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-white/60 font-sans relative z-10">
        &copy; {new Date().getFullYear()} Ingrid Bakes. All rights reserved.
      </div>
    </footer>
  );
}

// ====== Main Home Page ======
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff8e1] text-[#1B3A57] font-sans overflow-x-hidden">
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
        .luxury-btn:active {
          filter: brightness(0.97);
        }
        .luxury-nav-link {
          position: relative;
          transition: color 0.2s, background 0.2s;
        }
        .luxury-nav-link::after {
          content: "";
          display: block;
          position: absolute;
          left: 0; bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg,#D4AF37 0%,#e6c76e 100%);
          opacity: 0;
          transform: scaleX(0);
          transition: opacity 0.2s, transform 0.2s;
        }
        .luxury-nav-link:hover::after, .luxury-nav-link:focus::after {
          opacity: 1;
          transform: scaleX(1);
        }
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
