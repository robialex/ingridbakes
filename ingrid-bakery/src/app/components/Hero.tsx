// Hero Section
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/imgs/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in">Ingrid Bakes</h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Luxurious cakes & pastries, crafted with Mediterranean soul.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <LuxuryBakeryButton href="/menu" className="text-lg">Explore Menu</LuxuryBakeryButton>
          <LuxuryBakeryButton href="https://wa.me/35799127455" external className="text-lg">Order Now</LuxuryBakeryButton>
        </div>
      </div>
    </section>
  );
}