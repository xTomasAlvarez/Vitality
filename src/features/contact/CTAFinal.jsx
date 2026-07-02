import React from 'react';
import Button from '../../shared/ui/Button';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function CTAFinal() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Construyamos juntos una salud más <span className="text-accent">simple y accesible</span>.
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Suma tu consultorio a TempusCare y sé parte del cambio en la gestión médica de Tucumán.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto">
                <Button variant="white" className="w-full sm:w-auto">Quiero sumar mi consultorio</Button>
              </a>
              <a href="#contacto">
                <Button variant="secondary" className="w-full sm:w-auto border-white text-white hover:bg-white/10">Contactar al equipo</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
