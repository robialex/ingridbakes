<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/hero-bg.jpg')" }}>
    <div className="bg-black/50 absolute inset-0" />
  </div>
  <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Ingrid Bakes</h1>
    <p className="mt-4 text-lg md:text-xl">Luxurious cakes & pastries, crafted with Mediterranean soul.</p>
    <div className="mt-6 flex justify-center">
      <LuxuryBakeryButton href="/menu" className="mr-4">Explore Menu</LuxuryBakeryButton>
      <LuxuryBakeryButton href="https://wa.me/35799127455" external>Order Now</LuxuryBakeryButton>
    </div>
  </div>
</section>