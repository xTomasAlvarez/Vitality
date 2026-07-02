import React from 'react';
import { Code2, Database, ShieldCheck, Users2 } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Equipo() {
  const revealRef = useScrollReveal();

  const areas = [
    { nombre: 'Gerencia IT', icon: ShieldCheck },
    { nombre: 'Desarrollo', icon: Code2 },
    { nombre: 'Datos e Infra', icon: Database },
    { nombre: 'Sistemas & UX', icon: Users2 },
  ];

  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Respaldados por expertos</h2>
            <p className="text-lg text-blue-100 mb-12">
              Un equipo multidisciplinario de desarrollo, sistemas, datos y atención al cliente respalda cada funcionalidad de TempusCare, asegurando operatividad 24/7.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {areas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div key={idx} className="flex flex-col items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                    <Icon size={32} className="text-accent mb-3" />
                    <span className="font-semibold text-sm">{area.nombre}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
