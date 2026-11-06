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
    <section id="workflow" className="py-16 sm:py-20 lg:py-24 bg-background-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Un proceso ágil y centrado en las personas para transformar la atención médica en cada paso.
          </p>
        </div>

        <div className="relative">
          {/* Línea horizontal en Desktop alineada al centro de los círculos (top-8) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center group text-center">
                {/* Conector vertical para móvil entre pasos */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden absolute top-16 bottom-[-2rem] left-1/2 w-0.5 bg-gray-300 -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-background-darker shadow-md flex items-center justify-center font-bold text-lg sm:text-xl text-primary mb-4 sm:mb-6 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {step.num}
                </div>
                <div className="text-center max-w-xs">
                  <h3 className="font-bold text-base sm:text-lg text-primary mb-1.5">{step.title}</h3>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
