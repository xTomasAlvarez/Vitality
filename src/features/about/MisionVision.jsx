import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function MisionVision() {
  const revealRef = useScrollReveal();

  return (
    <section id="mision-vision" className="py-24 bg-background-light relative overflow-hidden">
      {/* Resplandores ambientales de fondo */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
            El norte que nos impulsa
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Trabajamos cada día para que la gestión médica sea más simple para los profesionales y más empática con cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Tarjeta 1: Nuestra Misión */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="hc-card group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-white/95 to-accent/10 border border-gray-200/80 hover:border-accent/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Halo sutil interactivo en la esquina */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-accent/15 rounded-full blur-2xl group-hover:bg-accent/25 transition-colors duration-500" />

            <div>
              {/* Ícono animado con anillos de pulso suaves */}
              <div className="flex items-center justify-between mb-8">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-16 h-16 rounded-2xl bg-accent/20 animate-ping opacity-60 pointer-events-none" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-2xl shadow-md flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-300">
                    <Target size={28} strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-primary mb-4 tracking-tight">
                Nuestra Misión
              </h3>

              <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                Brindar a los consultorios y profesionales de la salud una plataforma integral, intuitiva y accesible que simplifique la gestión de sus agendas e historias clínicas, permitiéndoles dedicar su tiempo y energía a lo más importante: la atención de sus pacientes.
              </p>
            </div>
          </motion.article>

          {/* Tarjeta 2: Nuestra Visión */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.1 }}
            className="hc-card group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-white/95 to-secondary/10 border border-gray-200/80 hover:border-secondary/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Halo sutil interactivo en la esquina */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-secondary/15 rounded-full blur-2xl group-hover:bg-secondary/25 transition-colors duration-500" />

            <div>
              {/* Ícono animado con anillos de pulso suaves */}
              <div className="flex items-center justify-between mb-8">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-16 h-16 rounded-2xl bg-secondary/20 animate-ping opacity-60 pointer-events-none" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-md flex items-center justify-center text-white transform group-hover:-rotate-6 transition-transform duration-300">
                    <Compass size={28} strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-primary mb-4 tracking-tight">
                Nuestra Visión
              </h3>

              <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                Consolidarnos como la empresa referente en innovación para la salud privada en Tucumán y la región, liderando la transformación hacia una atención médica sin esperas innecesarias, sin barreras de accesibilidad y centrada en el bienestar de las personas.
              </p>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
