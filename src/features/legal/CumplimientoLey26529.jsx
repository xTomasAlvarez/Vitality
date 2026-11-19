import React from 'react';
import LegalLayout from './LegalLayout';
import { Scale, HeartHandshake, FileBadge, Eye, CheckCircle2, Accessibility, ShieldCheck } from 'lucide-react';

export default function CumplimientoLey26529() {
  const articulos = [
    {
      numero: 'Artículo 14',
      titulo: 'Titularidad Indiscutible del Paciente',
      resumen:
        'El paciente es el único titular de la información sanitaria, datos médicos e historia clínica. Las instituciones médicas y consultorios actúan únicamente en carácter de depositarios y custodios legales.',
      garantia:
        'TempusCare garantiza que el paciente pueda acceder a su historial de turnos, profesionales consultados y solicitar constancias de atención en cualquier momento, de forma directa y transparente.',
    },
    {
      numero: 'Artículo 2',
      titulo: 'Derechos Esenciales: Trato Digno y Confidencialidad',
      resumen:
        'Todo paciente tiene derecho a recibir un trato digno y respetuoso con respecto a sus convicciones personales y morales, con garantía irrestricta de confidencialidad y secreto profesional médico.',
      garantia:
        'Nuestra plataforma implementa canales seguros y privados para la comunicación de turnos, resguardando la intimidad del paciente tanto en secretaría como en la sala de espera.',
    },
    {
      numero: 'Artículos 5 al 10',
      titulo: 'Autonomía de la Voluntad y Consentimiento Informado',
      resumen:
        'El paciente tiene derecho a aceptar o rechazar terapias o procedimientos, y a recibir información veraz, clara y adecuada sobre su estado de salud y alternativas disponibles.',
      garantia:
        'TempusCare facilita el envío oportuno de indicaciones previas a consultas o estudios médicos, asegurando que el paciente cuente con la información necesaria para ejercer su consentimiento de manera libre e informada.',
    },
    {
      numero: 'Artículo 18',
      titulo: 'Inviolabilidad de la Historia Clínica y Trazabilidad Digital',
      resumen:
        'La ley exige la preservación de la integridad, autenticidad, inalterabilidad y custodia rigurosa de todo documento clínico e informático.',
      garantia:
        'La arquitectura de TempusCare incorpora auditoría de accesos inmutable, copias de respaldo automatizadas y firmas de seguridad que impiden adulteraciones o accesos no autorizados a los registros de atención.',
    },
    {
      numero: 'Inclusión & Accesibilidad',
      titulo: 'Compromiso con el Acceso Universal (WCAG AAA)',
      resumen:
        'El acceso equitativo a la salud requiere que las herramientas tecnológicas eliminen cualquier barrera cognitiva, visual o motriz.',
      garantia:
        'Vitality implementa en TempusCare herramientas de alto contraste, compatibilidad nativa con lectores de pantalla, tipografía de alta legibilidad (Atkinson Hyperlegible) y reducción de movimiento para garantizar el acceso pleno de adultos mayores y personas con discapacidad.',
    },
  ];

  return (
    <LegalLayout
      activeTab="ley-26529"
      badge="Ley Nacional 26.529 · República Argentina"
      title="Cumplimiento Ley 26.529 de Salud"
      subtitle="Derechos del Paciente en su Relación con los Profesionales e Instituciones de la Salud, Historia Clínica y Consentimiento Informado."
    >
      {/* Resumen del marco normativo */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
            <Scale size={28} />
          </div>
          <div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-primary">
              Alineación de TempusCare con la Ley 26.529
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2 leading-relaxed">
              La <strong>Ley 26.529</strong> y su Decreto Reglamentario 1089/2012 consagran los derechos inalienables de los pacientes en toda la República Argentina. En Vitality HealthTech diseñamos la arquitectura técnica y operativa de TempusCare desde el primer día para garantizar el cumplimiento de cada uno de estos preceptos legales, poniendo la soberanía de la información en manos del paciente.
            </p>
          </div>
        </div>
      </div>

      {/* Grid de artículos y garantías técnicas */}
      <div className="space-y-6">
        {articulos.map((art, idx) => (
          <article
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {art.numero}
              </span>
              <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent" />
                Garantizado por TempusCare
              </span>
            </div>

            <h3 className="font-heading text-base sm:text-lg font-bold text-primary mb-2">
              {art.titulo}
            </h3>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              {art.resumen}
            </p>

            <div className="p-4 rounded-2xl bg-background-light border border-gray-100 flex items-start gap-3">
              <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-text-main leading-relaxed">
                <strong className="text-primary font-semibold">Cómo lo garantizamos: </strong>
                {art.garantia}
              </div>
            </div>
          </article>
        ))}
      </div>
    </LegalLayout>
  );
}
