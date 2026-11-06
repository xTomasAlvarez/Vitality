import React, { useState } from 'react';
import Button from '../../shared/ui/Button';
import { Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Contacto() {
  const revealRef = useScrollReveal();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
    setTimeout(() => setStatus(''), 5000);
    e.target.reset();
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight">
              Contactanos
            </h2>
            <p className="text-text-muted text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              ¿Tenés dudas sobre TempusCare o querés sumarte a la red? Escribinos y nuestro equipo te responderá con gusto.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-accent shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm sm:text-base">Ubicación</h3>
                  <p className="text-text-muted text-xs sm:text-sm">San Miguel de Tucumán, Argentina</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-accent shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm sm:text-base">Email</h3>
                  <p className="text-text-muted text-xs sm:text-sm">hola@vitality.com.ar</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-accent shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm sm:text-base">Atención</h3>
                  <p className="text-text-muted text-xs sm:text-sm">Lunes a Viernes, 9:00 a 18:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-xs sm:text-sm font-semibold text-primary mb-1.5">Nombre completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  required
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-primary mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block text-xs sm:text-sm font-semibold text-primary mb-1.5">Tipo de consulta</label>
                <div className="relative">
                  <select 
                    id="tipo" 
                    className="w-full appearance-none px-3.5 sm:px-4 pr-10 sm:pr-12 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text-main bg-white cursor-pointer text-sm sm:text-base"
                  >
                    <option value="consultorio">Soy un consultorio o profesional de salud</option>
                    <option value="paciente">Soy paciente</option>
                    <option value="institucion">Clínica o Centro Médico</option>
                    <option value="otro">Otra consulta</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs sm:text-sm font-semibold text-primary mb-1.5">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  rows="4" 
                  required
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="¿En qué te podemos ayudar?"
                ></textarea>
              </div>

              {status && (
                <div className="p-3.5 sm:p-4 bg-green-50 text-green-700 rounded-xl font-medium text-xs sm:text-sm">
                  {status}
                </div>
              )}

              <Button type="submit" className="w-full justify-center">
                Enviar mensaje
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
