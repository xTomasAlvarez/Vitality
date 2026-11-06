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
      className="hc-card group bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 border border-gray-200/80 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Espacio destacado para la foto del integrante con zoom sutil */}
      <div className="relative w-full aspect-[4/4.5] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-background-light to-accent/10 border border-gray-100 flex items-center justify-center">
        {!imageError ? (
          <img
            src={miembro.imagen}
            alt={miembro.nombre}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-blue-50 to-accent/15 p-3 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-heading font-extrabold text-xl sm:text-2xl flex items-center justify-center shadow-md mb-2 group-hover:scale-110 transition-transform">
              {miembro.iniciales}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-primary truncate max-w-full">
              {miembro.nombre}
            </span>
          </div>
        )}

        {/* Overlay con el nombre: En móvil se muestra sutilmente visible ya que no hay hover en touch; en desktop se revela en hover */}
        {!imageError && (
          <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center text-center pointer-events-none">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm truncate">
              {miembro.nombre}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Equipo() {
  const revealRef = useScrollReveal();

  return (
    <section id="equipo" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Sutil halo ambiental */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={revealRef}>
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Nuestro Equipo
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-muted leading-relaxed">
            Las personas detrás de Vitality y TempusCare, comprometidas con transformar la salud privada en una experiencia ágil, humana y accesible.
          </p>
        </div>

        {/* Grilla balanceada: 2 columnas en móvil, 3 en tablet, 5 en desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {EQUIPO_VITALITY.map((miembro, idx) => (
            <TeamMemberCard key={miembro.nombre} miembro={miembro} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
