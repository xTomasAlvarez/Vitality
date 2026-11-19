import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { TEMPUSCARE_URL } from '../data/data';
import { navigateTo } from '../utils/navigation';

export default function Navbar({ currentRoute = 'home' }) {
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
    { name: 'Valores', href: '#valores' },
    { name: 'TempusCare', href: '#producto' },
    { name: 'Metodología', href: '#workflow' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-gray-200/60'
          : 'bg-white/70 backdrop-blur-xs py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-3 sm:gap-4">
          {/* Logo y Marca a la izquierda */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#inicio');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="h-10 sm:h-12 w-auto flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src="/vitality-removebg-preview.png" alt="Logo Vitality" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-primary leading-tight">
                Vitality
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-slate-500 uppercase mt-0.5">
                HealthTech
              </span>
            </div>
          </a>

          {/* Desktop Nav centrado y resumido */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {currentRoute !== 'home' && (
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('#inicio');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
              >
                <span>← Volver al Inicio</span>
              </a>
            )}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(link.href);
                }}
                className="relative font-heading font-medium tracking-wide text-[14px] xl:text-[15px] text-text-muted hover:text-primary transition-colors py-1 group/link text-center whitespace-nowrap flex items-center justify-center"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out group-hover/link:w-full" />
              </a>
            ))}
            <a
              href={TEMPUSCARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-light text-white px-4 xl:px-5 py-2.5 rounded-full font-heading font-bold text-xs xl:text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
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
              className="text-primary hover:text-accent transition-colors p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/40"
              aria-label="Alternar menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 flex flex-col">
          {currentRoute !== 'home' && (
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                navigateTo('#inicio');
              }}
              className="block px-4 py-3 bg-primary/10 text-primary font-heading font-bold text-center rounded-xl mb-2 hover:bg-primary hover:text-white transition-colors"
            >
              ← Volver al Inicio
            </a>
          )}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                navigateTo(link.href);
              }}
              className="block px-4 py-3 text-text-main hover:bg-background-light hover:text-accent rounded-xl font-heading font-medium text-base transition-colors text-center whitespace-nowrap"
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
