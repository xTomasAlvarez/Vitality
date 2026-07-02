import React from 'react';
import Button from '../../shared/ui/Button';
import { CalendarCheck, FileText, Ear, Bell, Map, ShieldCheck, CheckCircle, Activity } from 'lucide-react';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Producto() {
  const revealRef = useScrollReveal();

  const features = [
    { icon: CalendarCheck, text: 'Turnero integrado entre múltiples consultorios.' },
    { icon: FileText, text: 'Historia clínica unificada.' },
    { icon: Ear, text: 'Accesibilidad real: lectores de pantalla y comandos de voz.' },
    { icon: Bell, text: 'Recordatorios automáticos de turnos.' },
    { icon: Map, text: 'Preparado para geolocalización y marketplace.' },
  ];

  return (
    <section id="producto" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 flex justify-center items-center py-12">
            <div className="relative w-full max-w-[400px] h-[450px] flex items-center justify-center">
              
              {/* Ventana central flotante */}
              <div className="relative w-72 md:w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-10 animate-float">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-auto w-1/3 h-3 bg-gray-100 rounded-full"></div>
                </div>
                
                <div className="h-3 w-3/4 bg-gray-100 rounded-full mb-3"></div>
                <div className="h-3 w-1/2 bg-gray-100 rounded-full mb-6"></div>
                
                <div className="h-32 w-full bg-accent/10 border border-accent/20 rounded-2xl mb-4"></div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-1/2 bg-gray-50 rounded-xl"></div>
                  <div className="h-10 w-1/2 bg-gray-50 rounded-xl"></div>
                </div>
              </div>

              {/* Badges flotantes (como en la imagen) */}
              <div className="absolute top-10 -left-6 md:-left-12 bg-white p-3 pr-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-float-delayed-1">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                   <Activity size={20} />
                </div>
                <span className="font-bold text-sm text-primary">Accesibilidad</span>
              </div>

              <div className="absolute top-28 -right-4 md:-right-12 bg-white p-3 pr-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-float-delayed-2">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                   <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-sm text-primary">Datos protegidos</span>
              </div>

              <div className="absolute bottom-28 -left-4 md:-left-10 bg-white p-3 pr-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-float-delayed-3">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                   <CalendarCheck size={20} />
                </div>
                <span className="font-bold text-sm text-primary">Integración</span>
              </div>

              <div className="absolute bottom-6 -right-6 md:-right-10 bg-white p-3 pr-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-float-delayed-1">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                   <CheckCircle size={20} />
                </div>
                <span className="font-bold text-sm text-primary">IA aplicada</span>
              </div>

              {/* Glow decorativo de fondo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Nuestro Producto</h2>
            <h3 className="text-4xl font-extrabold text-primary mb-6">
              TempusCare: nuestra solución para la salud privada
            </h3>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Desarrollamos una plataforma integral diseñada para solucionar los problemas reales de gestión en el sector de salud privado de Tucumán.
            </p>
            
            <ul className="space-y-5 mb-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-accent mt-1">
                      <Icon size={20} />
                    </div>
                    <span className="text-text-main font-medium leading-relaxed">
                      {feature.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button>Ver la plataforma</Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
