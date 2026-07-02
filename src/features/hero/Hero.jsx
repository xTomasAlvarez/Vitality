import React, { useEffect, useState } from 'react';
import Button from '../../shared/ui/Button';
import { Calendar, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatElements = [
    { text: 'Accesibilidad real', Icon: HeartPulse, delay: '0s', top: '10%', left: '-5%' },
    { text: 'Datos protegidos', Icon: ShieldCheck, delay: '2s', top: '25%', right: '-5%' },
    { text: 'Integración', Icon: Calendar, delay: '1s', bottom: '30%', left: '-10%' },
    { text: 'IA aplicada', Icon: CheckCircle2, delay: '3s', bottom: '15%', right: '0%' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-background-light to-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <h1 
              className={`text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-6 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              La tecnología que le devuelve la <span className="text-accent">tranquilidad</span> a la salud.
            </h1>
            <p 
              className={`text-lg md:text-xl text-text-muted mb-8 leading-relaxed transition-all duration-1000 delay-200 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Somos Vitality, una empresa de software de Tucumán dedicada a transformar la gestión de turnos médicos privados en una experiencia simple, accesible y humana.
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <a href="#producto">
                <Button variant="primary" className="w-full sm:w-auto">Conocé TempusCare</Button>
              </a>
              <a href="#nosotros">
                <Button variant="secondary" className="w-full sm:w-auto">Sobre nosotros</Button>
              </a>
            </div>
          </div>

          {/* Abstract Illustration */}
          <div 
            className={`relative h-[500px] w-full hidden md:block transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Dashboard Mockup */}
              <div className="relative w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-10">
                <div className="w-full h-8 bg-gray-50 rounded-lg mb-6 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
                  <div className="h-32 bg-accent/10 rounded-xl mt-6 border border-accent/20"></div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-12 bg-gray-50 rounded-lg"></div>
                    <div className="h-12 bg-gray-50 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {floatElements.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <div 
                    key={index}
                    className="absolute bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-float"
                    style={{
                      top: item.top,
                      bottom: item.bottom,
                      left: item.left,
                      right: item.right,
                      animationDelay: item.delay,
                      animationDuration: '6s',
                      animationIterationCount: 'infinite',
                      animationTimingFunction: 'ease-in-out'
                    }}
                  >
                    <div className="bg-accent/10 p-2 rounded-lg text-accent">
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold text-sm text-text-main">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation-name: float;
        }
      `}} />
    </section>
  );
}
