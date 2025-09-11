// filepath: c:\Users\35796\Downloads\ingrid\ingrid\src\app\components\Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#1B3A57]/80 to-transparent backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-white font-bold text-xl">
          <Link href="/">Ingrid Bakes</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-[#D4AF37] transition">
            Home
          </Link>
          <Link href="/menu" className="text-white hover:text-[#D4AF37] transition">
            Menu
          </Link>
          <Link href="/about" className="text-white hover:text-[#D4AF37] transition">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-[#D4AF37] transition">
            Contact
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1B3A57] p-4">
          <Link href="/" className="block text-white hover:text-[#D4AF37] transition mb-2">
            Home
          </Link>
          <Link href="/menu" className="block text-white hover:text-[#D4AF37] transition mb-2">
            Menu
          </Link>
          <Link href="/about" className="block text-white hover:text-[#D4AF37] transition mb-2">
            About
          </Link>
          <Link href="/contact" className="block text-white hover:text-[#D4AF37] transition mb-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;