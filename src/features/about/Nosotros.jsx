import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Nosotros() {
  const revealRef = useScrollReveal();

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Sutiles acentos de fondo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin size={14} />
            Quiénes somos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
            Nuestra historia en Tucumán
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-text-muted leading-relaxed">
            <p>
              <strong className="text-primary font-semibold">Vitality</strong> nació en San Miguel de Tucumán con un propósito concreto: resolver la fragmentación que sufren pacientes, secretarías y médicos en la gestión de turnos del sector privado. Sabemos que conseguir o administrar una consulta médica suele ser estresante cuando cada consultorio opera con herramientas aisladas.
            </p>
            <p>
              Por eso creamos <strong className="text-primary font-semibold">TempusCare</strong>, un ecosistema full-stack que integra agenda multi-institucional, recepción Kanban e historia clínica unificada en una plataforma segura y con accesibilidad nativa desde su arquitectura.
            </p>

            {/* Tarjeta de Cita con Glassmorphism e Ícono */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="hc-card relative mt-12 pt-10 pb-8 px-6 sm:px-10 rounded-3xl bg-gradient-to-br from-background-light/90 via-white/85 to-accent/10 backdrop-blur-xl border border-accent/25 shadow-xl"
            >
              {/* Círculo superior con ícono limpio HeartHandshake */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-white"
              >
                <HeartHandshake size={26} strokeWidth={2.2} />
              </div>

              <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-[2.6rem] text-primary leading-snug tracking-normal">
                “Cuidamos tu tiempo, te cuidamos a vos.”
              </blockquote>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-text-muted">
                <Sparkles size={14} className="text-accent" />
                <span>Lema institucional de Vitality HealthTech · Tucumán, Argentina</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
