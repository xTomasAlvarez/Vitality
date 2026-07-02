import React from 'react';
import { TESTIMONIOS } from '../../shared/data/data';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Testimonios() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Testimonios</h2>
          <h3 className="text-4xl font-extrabold text-primary">El impacto de TempusCare</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIOS.map((item, idx) => (
            <div key={idx} className="bg-background-light p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(item.estrellas)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-main text-lg italic mb-8">"{item.texto}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {item.nombre.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{item.nombre}</h4>
                  <p className="text-text-muted text-sm">{item.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
