import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VALORES_CUIDADO } from '../../shared/data/data';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Valores() {
  const revealRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="valores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 bg-accent/10 px-3.5 py-1 rounded-full">
            Nuestros Pilares
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Valores <span className="text-accent">CUIDADO</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Cada letra de nuestro acrónimo representa un compromiso real con los pacientes, profesionales y centros de salud de Tucumán. Pasá el cursor o navegá con <kbd className="px-2 py-0.5 text-xs font-bold bg-background-light border border-gray-300 rounded-md text-primary">Tab</kbd> para explorar cada pilar.
          </p>
        </div>

        {/* Acrónimo interactivo visual superior */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          role="group"
          aria-label="Selector rápido de letras CUIDADO"
        >
          {VALORES_CUIDADO.map((valor, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`px-3.5 py-2 rounded-xl font-heading font-extrabold text-sm sm:text-base transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md scale-105'
                    : 'bg-background-light text-primary border-gray-200 hover:border-accent'
                }`}
              >
                <span className={isActive ? 'text-accent-light' : 'text-accent'}>{valor.letra}</span>
                <span className="text-xs sm:text-sm font-semibold">{valor.titulo}</span>
              </button>
            );
          })}
        </div>

        {/* Grilla de 7 Tarjetas Interactivas (Siempre muestran Letra + Ícono + Título completo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 items-stretch">
          {VALORES_CUIDADO.map((valor, index) => {
            const Icon = valor.Icon;
            const isExpanded = activeIndex === index;

            return (
              <motion.article
                key={index}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-label={`${valor.letra} de ${valor.titulo}: ${valor.descripcion}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className={`hc-card group relative rounded-3xl p-5 flex flex-col justify-between cursor-pointer outline-none transition-colors border ${
                  isExpanded
                    ? 'bg-white border-accent shadow-xl ring-2 ring-accent/30 z-10'
                    : 'bg-background-light/90 border-gray-200/80 hover:bg-white hover:border-accent/50 shadow-xs'
                }`}
              >
                <div>
                  {/* Cabecera de la tarjeta: Letra destacada + Ícono */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`font-heading text-3xl xl:text-4xl font-extrabold leading-none transition-colors ${
                        isExpanded ? 'text-primary' : 'text-accent group-hover:text-primary'
                      }`}
                    >
                      {valor.letra}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                        isExpanded
                          ? 'bg-accent text-white shadow-sm'
                          : 'bg-white text-accent border border-gray-100 group-hover:bg-accent group-hover:text-white'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Título Completo del Valor (Siempre visible sin cortarse) */}
                  <h3 className="font-heading font-bold text-base xl:text-lg text-primary mb-2 leading-snug">
                    {valor.titulo}
                  </h3>
                </div>

                {/* Descripción completa revelada suavemente con Framer Motion al hacer hover/focus */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isExpanded ? 1 : 0.78,
                    y: isExpanded ? 0 : 2,
                  }}
                  transition={{ duration: 0.25 }}
                  className="pt-2 border-t border-gray-200/70 mt-2"
                >
                  <p
                    className={`text-xs xl:text-[13px] leading-relaxed transition-colors ${
                      isExpanded ? 'text-text-main font-medium' : 'text-text-muted'
                    }`}
                  >
                    {valor.descripcion}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
