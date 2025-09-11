'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickIntro from './components/QuickIntro';
import FeaturedDesserts from './components/FeaturedDesserts';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <QuickIntro />
      <FeaturedDesserts />
      <CTASection />
      <Footer />
    </main>
  );
}