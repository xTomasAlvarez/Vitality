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
      desc: 'Sincronización instantánea entre reserva online y recepción en vivo para eliminar cuellos de botella en sala.'
    },
    {
      icon: Briefcase,
      titulo: 'Menor carga administrativa',
      desc: 'Automatización de recordatorios, validación de coberturas médicas y gestión de sobreturnos sin planillas manuales.'
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
      desc: 'El profesional alterna entre sus consultorios en un solo clic manteniendo su historia clínica unificada.'
    },
    {
      icon: Network,
      titulo: 'Interoperabilidad y trazabilidad',
      desc: 'Evoluciones clínicas y estudios conectados cronológicamente para una atención médica segura y continua.'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Sutil halo decorativo */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Por qué elegir Vitality & TempusCare
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            No solo creamos software; construimos un ecosistema de salud más eficiente, accesible, confiable y humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diferencias.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="hc-card group relative rounded-3xl p-7 bg-background-light/70 hover:bg-white border border-gray-200/80 hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Resplandor dinámico en hover */}
                <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/25 transition-colors duration-500" />

                <div>
                  {/* Encabezado con Ícono animado */}
                  <div className="mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shrink-0">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-primary mb-2.5 text-lg sm:text-xl leading-snug">
                    {item.titulo}
                  </h3>

                  <p className="text-text-muted leading-relaxed text-sm sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
