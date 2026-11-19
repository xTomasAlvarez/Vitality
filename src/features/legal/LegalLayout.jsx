import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Scale, Share2, HeartPulse } from 'lucide-react';
import { TEMPUSCARE_URL } from '../../shared/data/data';
import { navigateTo } from '../../shared/utils/navigation';

export default function LegalLayout({ activeTab, title, subtitle, badge, children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tabs = [
    {
      id: 'privacidad',
      href: '#/privacidad',
      label: 'Política de Privacidad',
      icon: Shield,
    },
    {
      id: 'terminos',
      href: '#/terminos',
      label: 'Términos y Condiciones',
      icon: FileText,
    },
    {
      id: 'ley-26529',
      href: '#/ley-26529',
      label: 'Cumplimiento Ley 26.529',
      icon: Scale,
    },
    {
      id: 'redes',
      href: '#/redes-sociales',
      label: 'Canales & Redes',
      icon: Share2,
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-background-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación superior: Volver y Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-text-muted">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#inicio');
              }}
              className="hover:text-primary transition-colors flex items-center gap-1 font-medium"
            >
              <span>Inicio</span>
            </a>
            <span>/</span>
            <span className="text-text-muted font-medium">
              {activeTab === 'redes' ? 'Comunidad' : 'Marco Legal'}
            </span>
            <span>/</span>
            <span className="text-primary font-semibold truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>

          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#inicio');
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors bg-white px-3 py-1.5 rounded-full border border-gray-200/80 shadow-xs hover:border-accent/40"
          >
            <ArrowLeft size={14} />
            <span>Volver al inicio</span>
          </a>
        </div>

        {/* Encabezado Principal */}
        <header className="mb-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 bg-accent/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent-dark mb-3">
                <HeartPulse size={13} />
                {badge}
              </span>
            )}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              {title}
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* Selector de pestañas rápidas */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-sm font-semibold'
                      : 'bg-background-light text-text-muted hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </div>
        </header>

        {/* Contenido de la página */}
        <main className="space-y-6">
          {children}
        </main>

        {/* Banner de Contacto / Soporte al pie del documento */}
        <section className="mt-12 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold">
                ¿Tenés consultas sobre este documento o tus datos?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl">
                Nuestro equipo de Vitality HealthTech está a disposición de pacientes, secretarías y profesionales para responder inquietudes de privacidad, soporte y normativas.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('#contacto');
                }}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-accent hover:bg-accent-light text-white font-heading font-semibold text-xs sm:text-sm transition-colors shadow-xs"
              >
                Ir a Contacto
              </a>
              <a
                href={TEMPUSCARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs sm:text-sm transition-colors border border-white/20"
              >
                Probar TempusCare
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
