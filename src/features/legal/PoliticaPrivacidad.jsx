import React from 'react';
import LegalLayout from './LegalLayout';
import { ShieldCheck, Lock, Database, EyeOff, UserCheck, AlertCircle, FileCheck } from 'lucide-react';

export default function PoliticaPrivacidad() {
  const secciones = [
    {
      icon: Database,
      titulo: '1. Datos que Recopilamos y Gestionamos',
      descripcion:
        'En Vitality HealthTech recolectamos únicamente la información indispensable para el correcto funcionamiento de TempusCare y la gestión ágil de turnos médicos en consultorios privados de Tucumán:',
      puntos: [
        'Datos del paciente: Nombre completo, DNI, número de teléfono (para confirmación vía WhatsApp/SMS), correo electrónico y cobertura médica / obra social.',
        'Datos del turno: Fecha, hora, especialidad requerida y profesional de la salud asignado.',
        'Datos de consultorios y profesionales: Horarios de atención, dirección del consultorio y parámetros de disponibilidad.',
      ],
      nota: 'TempusCare no solicita información financiera sensible en el módulo de turnos ni datos que excedan el propósito de la atención médica.',
    },
    {
      icon: EyeOff,
      titulo: '2. Finalidad Exclusiva y No Comercialización',
      descripcion:
        'El tratamiento de los datos personales tiene por único fin brindar una experiencia ágil, confiable y accesible entre pacientes, secretarías y médicos:',
      puntos: [
        'Organización y confirmación de turnos médicos en tiempo real.',
        'Notificación de reprogramaciones, demoras o cancelaciones para evitar esperas innecesarias en salas de espera.',
        'Compromiso estricto: Vitality HealthTech jamás venderá, alquilará, cederá ni comercializará bases de datos o información médica a terceros, laboratorios farmacéuticos ni aseguradoras.',
      ],
    },
    {
      icon: Lock,
      titulo: '3. Seguridad Técnica y Confidencialidad',
      descripcion:
        'Aplicamos estándares rigurosos de seguridad informática acordes a la criticidad de los datos de salud:',
      puntos: [
        'Cifrado en tránsito mediante protocolos HTTPS / TLS de última generación.',
        'Cifrado de datos en reposo y aislamiento lógico de bases de datos por consultorio o centro médico.',
        'Control de acceso basado en roles (RBAC): secretarías y profesionales solo acceden a la información estrictamente necesaria para su labor diaria.',
        'Trazabilidad mediante registros de auditoría de acceso para prevenir filtraciones o manipulaciones.',
      ],
    },
    {
      icon: UserCheck,
      titulo: '4. Derechos del Titular de los Datos (Derechos ARCO)',
      descripcion:
        'Conforme a la Ley Nacional 25.326 de Protección de los Datos Personales de la República Argentina, garantizamos los derechos de:',
      puntos: [
        'Acceso: Conocer qué datos personales obran en nuestros sistemas de gestión.',
        'Rectificación: Solicitar la actualización o corrección de datos inexactos o desactualizados.',
        'Cancelación y Supresión: Solicitar la eliminación de datos cuando no sean requeridos para el cumplimiento de obligaciones legales de guarda sanitaria.',
      ],
      nota: 'Para ejercer estos derechos, el titular o su representante legal pueden escribirnos directamente a contacto@vitality.com.ar o a través de nuestro formulario oficial.',
    },
    {
      icon: FileCheck,
      titulo: '5. Conservación y Plazos Legales',
      descripcion:
        'Los registros vinculados a la trazabilidad de turnos y atención médica se preservan durante los plazos establecidos por las normativas de salud pública aplicables en la provincia de Tucumán y la legislación nacional.',
    },
  ];

  return (
    <LegalLayout
      activeTab="privacidad"
      badge="Ley 25.326 · Datos Personales"
      title="Política de Privacidad"
      subtitle="Resumen transparente sobre cómo cuidamos, procesamos y resguardamos tu información personal y médica en Vitality y TempusCare."
    >
      {/* Resumen destacado */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-primary">
              Principios Fundamentales de Privacidad en Vitality
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2 leading-relaxed">
              La confianza médica comienza por la privacidad de los datos. Toda la información tratada en nuestra plataforma se procesa bajo el principio de <strong>minimización de datos</strong>, <strong>confidencialidad absoluta</strong> y <strong>consentimiento informado</strong>, asegurando el cumplimiento estricto del marco normativo argentino.
            </p>
          </div>
        </div>
      </div>

      {/* Secciones detalladas en tarjetas */}
      <div className="space-y-6">
        {secciones.map((sec, i) => {
          const Icon = sec.icon;
          return (
            <article
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent-dark">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-primary">
                  {sec.titulo}
                </h3>
              </div>

              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {sec.descripcion}
              </p>

              {sec.puntos && (
                <ul className="mt-4 space-y-2.5 pl-1">
                  {sec.puntos.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-main leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.nota && (
                <div className="mt-4 p-3.5 rounded-2xl bg-background-light border border-gray-100 flex items-start gap-2 text-xs sm:text-sm text-text-muted">
                  <AlertCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{sec.nota}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </LegalLayout>
  );
}
