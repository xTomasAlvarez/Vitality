import React, { useState } from 'react';
import Button from '../../shared/ui/Button';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Contacto() {
  const revealRef = useScrollReveal();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Mensaje enviado. Nos pondremos en contacto pronto.');
    setTimeout(() => setStatus(''), 5000);
    e.target.reset();
  };

  return (
    <section id="contacto" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Contacto</h2>
            <h3 className="text-4xl font-extrabold text-primary mb-6">Hablemos</h3>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              ¿Tenés dudas sobre TempusCare o querés sumarte a la red? Escribinos y nuestro equipo se pondrá en contacto.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Ubicación</h4>
                  <p className="text-text-muted">San Miguel de Tucumán, Argentina</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-text-muted">hola@vitality.com.ar</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Atención</h4>
                  <p className="text-text-muted">Lunes a Viernes, 9:00 a 18:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-primary mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block text-sm font-semibold text-primary mb-2">Tipo de consulta</label>
                <select 
                  id="tipo" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text-main"
                >
                  <option value="consultorio">Soy un consultorio/profesional</option>
                  <option value="paciente">Soy paciente</option>
                  <option value="prensa">Prensa / Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-primary mb-2">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="¿En qué te podemos ayudar?"
                ></textarea>
              </div>

              {status && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl font-medium text-sm">
                  {status}
                </div>
              )}

              <Button type="submit" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
