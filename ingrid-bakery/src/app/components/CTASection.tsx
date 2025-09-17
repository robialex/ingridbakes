function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/imgs/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold drop-shadow-lg">Ingrid Bakes</h1>
        <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">Luxurious Mediterranean Cakes & Pastries</p>
        <div className="mt-6">
          <LuxuryBakeryButton href="/menu" className="mx-2">Explore Menu</LuxuryBakeryButton>
          <LuxuryBakeryButton href="https://wa.me/35799127455" external className="mx-2">Order Now</LuxuryBakeryButton>
        </div>
      </div>
    </section>
  );
}