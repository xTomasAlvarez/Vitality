import React from 'react';
import { Timer, Briefcase, Eye, GitMerge, MapPin, Network } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Diferenciales() {
  const revealRef = useScrollReveal();

  const diferencias = [
    {
      icon: Timer,
      titulo: 'Reducción de tiempos',
      desc: 'Minimizamos los tiempos de espera y optimizamos la agenda diaria.'
    },
    {
      icon: Briefcase,
      titulo: 'Menor carga administrativa',
      desc: 'Automatización que libera a consultorios y secretarías de tareas repetitivas.'
    },
    {
      icon: Eye,
      titulo: 'Accesibilidad nativa',
      desc: 'Diseñada con accesibilidad desde la base, no como un agregado posterior.'
    },
    {
      icon: MapPin,
      titulo: 'Enfoque local',
      desc: 'Conocimiento profundo del mercado y las necesidades específicas de Tucumán.'
    },
    {
      icon: GitMerge,
      titulo: 'Un solo lugar',
      desc: 'Todos los médicos y especialistas centralizados para el paciente.'
    },
    {
      icon: Network,
      titulo: 'Integración total',
      desc: 'Distintas instituciones médicas conectadas en una misma plataforma.'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Por qué elegir Vitality</h2>
          <p className="text-lg text-text-muted">
            No solo creamos software; construimos un ecosistema de salud más eficiente y humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferencias.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4 items-start group">
                <div className="bg-background-light p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">{item.titulo}</h4>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
