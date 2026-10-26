import React from 'react';
import Button from '../../shared/ui/Button';
import { TEMPUSCARE_URL } from '../../shared/data/data';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

export default function CTAFinal() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="hc-card bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 sm:p-14 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Construyamos juntos una salud más{' '}
              <span className="font-serif italic font-normal text-accent-light text-4xl sm:text-5xl md:text-6xl">
                simple y accesible
              </span>
              .
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
              Sumá tu consultorio o centro médico a TempusCare y formá parte de la transformación digital de la salud en Tucumán.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={TEMPUSCARE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="white" className="w-full sm:w-auto gap-2">
                  <span>Ver la plataforma TempusCare</span>
                  <ExternalLink size={17} />
                </Button>
              </a>
              <a href="#contacto">
                <Button variant="secondary" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Contactar al equipo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
