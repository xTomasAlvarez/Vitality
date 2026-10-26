import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { TEMPUSCARE_URL } from '../data/data';

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
    { name: 'Valores CUIDADO', href: '#valores' },
    { name: 'TempusCare', href: '#producto' },
    { name: 'Cómo trabajamos', href: '#workflow' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-200/60'
          : 'bg-white/70 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="h-10 w-10 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src="/vitality-removebg-preview.png" alt="Logo Vitality" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-primary leading-none">
                Vitality
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                HealthTech
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-muted hover:text-primary font-semibold text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={TEMPUSCARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <span>Conocer TempusCare</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-accent transition-colors p-2 rounded-xl focus:outline-none"
              aria-label="Alternar menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1.5 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-text-main hover:bg-background-light hover:text-accent rounded-xl font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={TEMPUSCARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 px-4 py-3 text-center bg-accent text-white rounded-xl font-heading font-bold shadow-sm flex items-center justify-center gap-2"
          >
            <span>Conocer TempusCare</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
