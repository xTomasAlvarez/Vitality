import React from 'react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function ComoTrabajamos() {
  const revealRef = useScrollReveal();

  const steps = [
    { num: '01', title: 'Escuchamos', desc: 'al consultorio y al paciente.' },
    { num: '02', title: 'Diseñamos', desc: 'con accesibilidad desde el día uno.' },
    { num: '03', title: 'Desarrollamos', desc: 'e integramos de forma modular.' },
    { num: '04', title: 'Escalamos', desc: 'midiendo y mejorando continuamente.' }
  ];

  return (
    <section id="workflow" className="py-24 bg-background-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Enfoque Vitality</h2>
          <h3 className="text-4xl font-extrabold text-primary">Cómo trabajamos</h3>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center group">
                <div className="w-16 h-16 bg-white rounded-full border-4 border-background-darker shadow-md flex items-center justify-center font-bold text-xl text-primary mb-6 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {step.num}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg text-primary mb-2">{step.title}</h4>
                  <p className="text-text-muted text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
