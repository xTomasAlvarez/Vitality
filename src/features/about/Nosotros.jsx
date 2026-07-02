import React from 'react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Nosotros() {
  const revealRef = useScrollReveal();

  return (
    <section id="nosotros" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Quiénes somos</h2>
          <h3 className="text-4xl font-extrabold text-primary mb-8">Nuestra historia en Tucumán</h3>
          
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Vitality nació en Tucumán con un objetivo claro: ayudar a las personas tucumanas en la gestión de sus turnos médicos. Sabemos que solicitar un turno suele ser una experiencia estresante, sobre todo cuando cada profesional y cada consultorio gestiona sus horarios de forma distinta.
            </p>
            <p>
              Por eso desarrollamos TempusCare, una plataforma que unifica ese proceso en un solo lugar, seguro y accesible para todas las personas.
            </p>
            <div className="bg-background-light p-6 rounded-2xl border border-gray-100 mt-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full border-4 border-white"></div>
              <p className="mt-4 italic font-bold text-primary text-2xl tracking-tight">
                "Cuidamos tu tiempo, te cuidamos a vos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
