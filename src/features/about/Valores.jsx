import React from 'react';
import { VALORES_CUIDADO } from '../../shared/data/data';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Valores() {
  const revealRef = useScrollReveal();

  return (
    <section id="valores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Nuestros Pilares</h2>
          <h3 className="text-4xl font-extrabold text-primary">Valores CUIDADO</h3>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Estos son los principios que guían nuestro desarrollo y la forma en que nos relacionamos con nuestros usuarios y equipo.
          </p>
        </div>

        <div className="group/container flex flex-col lg:flex-row gap-4 justify-center items-center pt-10 pb-16">
          {VALORES_CUIDADO.map((valor, index) => {
            const Icon = valor.Icon;
            
            // Origen de transformación para que los extremos no se salgan de la pantalla al agrandarse
            let originClass = 'origin-center';
            if (index === 0) originClass = 'lg:origin-left';
            if (index === VALORES_CUIDADO.length - 1) originClass = 'lg:origin-right';

            return (
              <div 
                key={index} 
                className={`group bg-background-light p-4 xl:p-5 rounded-3xl border border-transparent flex-none lg:flex-1 w-full lg:w-auto relative transition-all duration-500 ease-out cursor-pointer flex flex-col items-center lg:items-start
                  ${index % 2 === 1 ? 'lg:translate-y-8' : 'lg:-translate-y-4'}
                  group-hover/container:blur-[2px] group-hover/container:opacity-70 group-hover/container:scale-95
                  hover:!blur-none hover:!opacity-100 hover:!scale-[1.15] lg:hover:!flex-[1.7] hover:z-50 hover:bg-white hover:shadow-2xl hover:border-gray-200
                  ${originClass}
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors mb-4 duration-500">
                  <Icon size={24} />
                </div>
                
                <div className="flex items-baseline w-full justify-center lg:justify-start">
                  <span className="text-4xl font-extrabold text-accent group-hover:text-primary transition-colors duration-500">
                    {valor.letra}
                  </span>
                  <div className="grid transition-all duration-500 ease-in-out grid-cols-[0fr] group-hover:grid-cols-[1fr]">
                    <div className="overflow-hidden flex items-baseline">
                      <h4 className="font-bold text-primary text-xl whitespace-nowrap pl-[1px]">
                        {valor.titulo.slice(1)}
                      </h4>
                    </div>
                  </div>
                </div>
                
                <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr] w-full text-center lg:text-left">
                  <div className="overflow-hidden">
                    <p className="text-text-muted text-xs xl:text-sm leading-relaxed pt-3 transition-colors duration-500 group-hover:text-text-main">
                      {valor.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
