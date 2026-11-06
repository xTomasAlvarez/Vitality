import React from 'react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Nosotros() {
  const revealRef = useScrollReveal();

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Sutiles acentos de fondo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
            El origen de nuestra vocación en Tucumán
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-text-muted leading-relaxed">
            <p>
              Vitality nació al observar una realidad cotidiana en los consultorios de nuestra provincia: profesionales desbordados por tareas administrativas y pacientes enfrentando largas esperas o barreras para conseguir un turno médico.
            </p>
            <p>
              Entendimos que la tecnología no debía ser una complicación más, sino un puente humano. Así creamos <strong className="text-primary font-semibold">TempusCare</strong>, unificando la organización del consultorio y el cuidado del paciente en una experiencia clara, cálida y accesible para todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
