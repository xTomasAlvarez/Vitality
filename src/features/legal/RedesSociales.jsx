import React from 'react';
import LegalLayout from './LegalLayout';
import { Sparkles, Clock, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { navigateTo } from '../../shared/utils/navigation';

function InstagramIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function RedesSociales() {
  const redesEnProceso = [
    {
      nombre: 'Instagram',
      usuario: '@vitality.healthtech',
      icon: InstagramIcon,
      color: 'from-pink-500 via-purple-500 to-indigo-500',
      descripcion:
        'Consejos de salud preventiva, actualizaciones de TempusCare, accesibilidad digital y el día a día de nuestro equipo en Tucumán.',
      estado: 'Lanzamiento Próximo',
    },
    {
      nombre: 'LinkedIn',
      usuario: 'Vitality HealthTech',
      icon: LinkedinIcon,
      color: 'from-blue-600 to-sky-600',
      descripcion:
        'Innovación en gestión sanitaria, interoperabilidad de historias clínicas, alianzas con centros médicos y tendencias HealthTech en el NOA.',
      estado: 'Lanzamiento Próximo',
    },
    {
      nombre: 'Facebook',
      usuario: 'Vitality HealthTech Tucumán',
      icon: FacebookIcon,
      color: 'from-blue-700 to-blue-500',
      descripcion:
        'Comunidad de pacientes y consultorios adheridos, instructivos paso a paso para agendar turnos y respuestas a preguntas frecuentes.',
      estado: 'Lanzamiento Próximo',
    },
  ];

  return (
    <LegalLayout
      activeTab="redes"
      badge="Comunidad Digital · En Construcción"
      title="Canales Oficiales & Redes Sociales"
      subtitle="Estamos preparando nuestros espacios en redes sociales para conectarnos con pacientes, profesionales y centros médicos de Tucumán."
    >
      {/* Banner de estado en proceso */}
      <div className="bg-gradient-to-br from-white via-background-light to-accent/10 rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-accent text-white shadow-sm shrink-0">
              <Sparkles size={28} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/15 text-accent-dark mb-2">
                <Clock size={13} />
                <span>En Proceso de Configuración</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                Muy pronto nos encontraremos en redes sociales
              </h2>
              <p className="text-text-muted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Nuestro equipo de comunicación y diseño está finalizando la identidad y contenidos de nuestros perfiles oficiales. Queremos que cada canal sea un puente real de ayuda, accesibilidad e información médica útil para toda la comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Redes en Preparación */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {redesEnProceso.map((red, idx) => {
          const Icon = red.icon;
          return (
            <article
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${red.color} text-white shadow-xs`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider">
                    {red.estado}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-primary">
                  {red.nombre}
                </h3>
                <p className="text-xs font-semibold text-accent-dark mt-0.5">
                  {red.usuario}
                </p>

                <p className="text-text-muted text-xs sm:text-sm mt-3 leading-relaxed">
                  {red.descripcion}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 cursor-not-allowed">
                  <span>Enlace disponible en breve</span>
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Canales directos de contacto activos hoy */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-2">
          ¿Querés comunicarte con nosotros hoy mismo?
        </h3>
        <p className="text-text-muted text-sm mb-6 max-w-2xl">
          Aunque las redes sociales estén en etapa de prelanzamiento, nuestros canales de atención directa están 100% operativos:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#contacto');
            }}
            className="p-4 rounded-2xl bg-background-light hover:bg-slate-100 border border-gray-200/70 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary text-white">
                <MessageSquare size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm text-primary group-hover:text-accent transition-colors">
                  Formulario de Contacto
                </h4>
                <p className="text-xs text-text-muted">
                  Dejanos tu consulta o solicitud para tu consultorio
                </p>
              </div>
            </div>
            <ArrowRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="mailto:contacto@vitality.com.ar"
            className="p-4 rounded-2xl bg-background-light hover:bg-slate-100 border border-gray-200/70 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent text-white">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm text-primary group-hover:text-accent transition-colors">
                  Correo Electrónico
                </h4>
                <p className="text-xs text-text-muted">
                  contacto@vitality.com.ar
                </p>
              </div>
            </div>
            <ArrowRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </LegalLayout>
  );
}
