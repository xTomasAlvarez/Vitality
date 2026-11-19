import React from 'react';
import { navigateTo } from '../utils/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Valores', href: '#valores' },
    { name: 'TempusCare', href: '#producto' },
    { name: 'Metodología', href: '#workflow' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-background-darker pt-12 sm:pt-16 pb-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          
          <div className="col-span-1 sm:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#inicio');
              }}
              className="flex items-center gap-3 mb-4 group inline-flex"
            >
              <div className="h-10 sm:h-12 w-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src="/vitality-removebg-preview.png" alt="Logo Vitality" className="h-10 sm:h-12 w-auto object-contain" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-primary leading-tight">
                  Vitality
                </span>
                <span className="text-[11px] font-medium tracking-widest text-slate-500 uppercase mt-0.5">
                  HealthTech
                </span>
              </div>
            </a>
            <p className="text-text-muted text-base sm:text-lg max-w-sm mb-6 leading-relaxed">
              Transformando la gestión de salud en Tucumán mediante tecnología accesible, simple y humana.
            </p>
            <div className="flex space-x-4">
              <a href="#/redes-sociales" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors" aria-label="Instagram de Vitality (Próximamente)">
                Instagram
              </a>
              <a href="#/redes-sociales" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors" aria-label="Facebook de Vitality (Próximamente)">
                Facebook
              </a>
              <a href="#/redes-sociales" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors" aria-label="LinkedIn de Vitality (Próximamente)">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4 text-base">Navegación</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(item.href);
                    }}
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4 text-base">Legales</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-sm">
              <li><a href="#/privacidad" className="text-text-muted hover:text-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#/terminos" className="text-text-muted hover:text-accent transition-colors">Términos y Condiciones</a></li>
              <li><a href="#/ley-26529" className="text-text-muted hover:text-accent transition-colors">Cumplimiento Ley 26.529</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/80 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-text-muted gap-2 text-center sm:text-left">
          <p>© {currentYear} Vitality HealthTech. Todos los derechos reservados.</p>
          <p>San Miguel de Tucumán, Argentina.</p>
        </div>
      </div>
    </footer>
  );
}
