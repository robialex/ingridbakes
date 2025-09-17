// Hero Section Example
<section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/imgs/hero-bg.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-30" />
  <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Ingrid Bakes</h1>
    <p className="text-lg md:text-xl mb-6">Luxurious cakes & pastries, crafted with Mediterranean soul.</p>
    <div className="flex justify-center space-x-4">
      <LuxuryBakeryButton href="/menu">Explore Menu</LuxuryBakeryButton>
      <LuxuryBakeryButton href="https://wa.me/35799127455" external>Order Now</LuxuryBakeryButton>
    </div>
  </div>
</section>