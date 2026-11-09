import React from 'react';
import { VALORES_CUIDADO } from '../../shared/data/data';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

export default function Valores() {
  const revealRef = useScrollReveal();

  return (
    <section id="valores" className="py-16 sm:py-20 lg:py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary font-heading tracking-tight">
            Valores CUIDADO
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            Estos son los principios que guían nuestro trabajo y la forma en que nos relacionamos con pacientes, médicos y centros de salud.
          </p>
        </div>

        {/* Grilla responsiva: en móvil/tablet se muestra en 1 o 2 columnas legibles; en desktop (lg:) se activa el acordeón interactivo C-U-I-D-A-D-O */}
        <div className="group/container grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 justify-center items-stretch lg:items-center pt-2 sm:pt-6 lg:pt-10 pb-6 sm:pb-12 lg:pb-16">
          {VALORES_CUIDADO.map((valor, index) => {
            const Icon = valor.Icon;
            
            // Origen de transformación para que los extremos no se salgan de la pantalla en desktop
            let originClass = 'origin-center';
            if (index === 0) originClass = 'lg:origin-left';
            if (index === VALORES_CUIDADO.length - 1) originClass = 'lg:origin-right';

            return (
              <div 
                key={index} 
                tabIndex={0}
                className={`hc-card group bg-white p-5 lg:p-4 xl:p-5 rounded-3xl border border-gray-200/60 lg:border-transparent flex-none lg:flex-1 w-full lg:w-auto relative transition-all duration-500 ease-out cursor-pointer flex flex-col items-start
                  ${index % 2 === 1 ? 'lg:translate-y-8' : 'lg:-translate-y-4'}
                  lg:group-hover/container:blur-[1px] lg:group-hover/container:opacity-75 lg:group-hover/container:scale-95
                  hover:shadow-lg lg:hover:!blur-none lg:hover:!opacity-100 lg:hover:!scale-[1.14] lg:hover:!flex-[1.7] lg:hover:z-50 lg:hover:bg-white lg:hover:shadow-2xl lg:hover:border-gray-200
                  focus:shadow-lg lg:focus:!blur-none lg:focus:!opacity-100 lg:focus:!scale-[1.14] lg:focus:!flex-[1.7] lg:focus:z-50 lg:focus:bg-white lg:focus:shadow-2xl lg:focus:border-gray-200
                  ${originClass}
                `}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-xs flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors mb-3 lg:mb-4 duration-500 shrink-0">
                  <Icon size={22} />
                </div>
                
                {/* Título: En móvil/tablet se muestra completo siempre; en desktop se anima expandiéndose desde la letra */}
                <div className="flex items-baseline w-full justify-start">
                  <span className="text-3xl lg:text-4xl font-extrabold text-accent group-hover:text-primary transition-colors duration-500">
                    {valor.letra}
                  </span>
                  <div className="grid transition-all duration-500 ease-in-out grid-cols-[1fr] lg:grid-cols-[0fr] lg:group-hover:grid-cols-[1fr] lg:group-focus:grid-cols-[1fr]">
                    <div className="overflow-hidden flex items-baseline">
                      <h4 className="font-bold text-primary text-lg lg:text-xl whitespace-nowrap pl-[1px]">
                        {valor.titulo.slice(1)}
                      </h4>
                    </div>
                  </div>
                </div>
                
                {/* Descripción: En móvil/tablet se lee con claridad directa; en desktop se expande con suavidad al interactuar */}
                <div className="grid transition-all duration-500 ease-in-out grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus:grid-rows-[1fr] w-full text-left">
                  <div className="overflow-hidden">
                    <p className="text-text-muted text-xs xl:text-sm leading-relaxed pt-2 lg:pt-3 transition-colors duration-500 group-hover:text-text-main group-focus:text-text-main">
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
