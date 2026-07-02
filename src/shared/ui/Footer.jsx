import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-darker pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="h-12 w-12 overflow-hidden flex items-center justify-center">
                <img src="/vitality-removebg-preview.png" alt="Logo Vitality" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-primary">
                Vitality
              </span>
            </a>
            <p className="text-text-muted text-lg max-w-sm mb-6">
              Transformando la gestión de salud en Tucumán mediante tecnología accesible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-text-muted hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-text-muted hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#producto" className="text-text-muted hover:text-accent transition-colors">Producto</a></li>
              <li><a href="#equipo" className="text-text-muted hover:text-accent transition-colors">Equipo</a></li>
              <li><a href="#contacto" className="text-text-muted hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Legales</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>© {currentYear} Vitality. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Tucumán, Argentina.</p>
        </div>
      </div>
    </footer>
  );
}
