import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Misión y Valores', href: '#valores' },
    { name: 'Producto', href: '#producto' },
    { name: 'Cómo trabajamos', href: '#workflow' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="h-10 w-10 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src="/vitality-removebg-preview.png" alt="Logo Vitality" className="w-full h-full object-contain" />
            </div>
            <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              Vitality
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-muted hover:text-accent font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#producto"
              className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Conocer TempusCare
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-accent transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-text-main hover:bg-background-light hover:text-accent rounded-xl font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#producto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 mt-4 text-center bg-accent text-white rounded-xl font-semibold shadow-sm"
          >
            Conocer TempusCare
          </a>
        </div>
      </div>
    </nav>
  );
}
