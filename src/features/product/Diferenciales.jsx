import React from 'react';
import { motion } from 'motion/react';
import { Timer, Briefcase, Eye, GitMerge, MapPin, Network } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Diferenciales() {
  const revealRef = useScrollReveal();

  const diferencias = [
    {
      icon: Timer,
      titulo: 'Reducción de tiempos de espera',
      desc: 'Sincronización instantánea entre reserva online y recepción Kanban para eliminar cuellos de botella en sala.'
    },
    {
      icon: Briefcase,
      titulo: 'Menor carga administrativa',
      desc: 'Automatización de recordatorios, validación de obras sociales y gestión de sobreturnos sin planillas manuales.'
    },
    {
      icon: Eye,
      titulo: 'Accesibilidad nativa desde cero',
      desc: 'Diseñada bajo estándares internacionales WCAG con alto contraste, lectores de pantalla y tipografía hiperlegible.'
    },
    {
      icon: MapPin,
      titulo: 'Enfoque 100% adaptado a Tucumán',
      desc: 'Parametrizado para la realidad de consultorios locales, Subsidio de Salud, PAMI y clínicas privadas de la provincia.'
    },
    {
      icon: GitMerge,
      titulo: 'Un solo perfil médico multi-sede',
      desc: 'El profesional alterna entre sus consultorios con nuestro ContextSwitcher manteniendo su historia clínica unificada.'
    },
    {
      icon: Network,
      titulo: 'Interoperabilidad y trazabilidad',
      desc: 'Evoluciones clínicas y estudios conectados cronológicamente para una atención médica segura y continua.'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 bg-accent/10 px-3.5 py-1 rounded-full">
            Ventaja Competitiva
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Por qué elegir Vitality & TempusCare
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            No solo creamos software; construimos un ecosistema de salud más eficiente, trazable y humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diferencias.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="hc-card flex gap-4 items-start group p-6 rounded-3xl bg-background-light/60 hover:bg-white border border-gray-200/70 hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3.5 rounded-2xl text-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1.5 text-lg leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
