import React from 'react';
import { Compass, Target } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function MisionVision() {
  const revealRef = useScrollReveal();

  return (
    <section id="mision-vision" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={revealRef}>
          {/* Misión */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
            <p className="text-text-muted leading-relaxed">
              Transformar la gestión de la salud privada mediante soluciones tecnológicas accesibles e integradoras, facilitando la conexión entre profesionales y pacientes a través de herramientas de software y una experiencia de usuario inclusiva que elimine las barreras físicas y sensoriales.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
              <Compass size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
            <p className="text-text-muted leading-relaxed">
              Ser la plataforma líder en interoperabilidad de datos médicos a nivel nacional para 2030, reconocida por humanizar la tecnología y estandarizar el acceso a agendas médicas digitales en toda la Argentina, considerando siempre la experiencia de usuarios con capacidades diferentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
