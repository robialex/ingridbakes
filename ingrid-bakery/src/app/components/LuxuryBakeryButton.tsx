<section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/imgs/hero-bg.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-30" />
  <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl sm:text-6xl font-serif font-bold drop-shadow-lg">Ingrid Bakes</h1>
    <p className="mt-4 text-lg sm:text-xl font-light drop-shadow-md">Luxurious cakes & pastries, crafted with Mediterranean soul.</p>
    <div className="mt-6 flex justify-center">
      <LuxuryBakeryButton href="/menu" className="mr-4">Explore Menu</LuxuryBakeryButton>
      <LuxuryBakeryButton href="https://wa.me/35799127455" external>Order Now</LuxuryBakeryButton>
    </div>
  </div>
</section>