import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EQUIPO_VITALITY } from '../../shared/data/data';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

function TeamMemberCard({ miembro, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="hc-card group bg-white rounded-3xl p-5 border border-gray-200/80 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Espacio destacado para la foto del integrante con zoom sutil y fallback de iniciales */}
        <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 via-background-light to-accent/10 border border-gray-100 flex items-center justify-center">
          {!imageError ? (
            <img
              src={miembro.imagen}
              alt={miembro.nombre}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-blue-50 to-accent/15 p-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-heading font-extrabold text-2xl flex items-center justify-center shadow-md mb-2 group-hover:scale-110 transition-transform">
                {miembro.iniciales}
              </div>
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                Vitality Team
              </span>
            </div>
          )}
        </div>

        <h3 className="font-heading font-bold text-primary text-base sm:text-[17px] leading-snug">
          {miembro.nombre}
        </h3>
        <p className="text-xs font-semibold text-accent leading-snug mt-1">
          {miembro.rol}
        </p>
        <p className="text-text-muted text-xs sm:text-[13px] leading-relaxed mt-3">
          {miembro.presentacion}
        </p>
      </div>
    </motion.article>
  );
}

export default function Equipo() {
  const revealRef = useScrollReveal();

  return (
    <section id="equipo" className="py-24 bg-white relative overflow-hidden">
      {/* Sutil halo ambiental */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">
            Las personas detrás de Vitality y TempusCare, comprometidas con transformar la salud privada en una experiencia ágil, humana y accesible.
          </p>
        </div>

        {/* Grilla balanceada con los 5 integrantes oficiales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {EQUIPO_VITALITY.map((miembro, idx) => (
            <TeamMemberCard key={miembro.nombre} miembro={miembro} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
