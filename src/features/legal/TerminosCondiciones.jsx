import React from 'react';
import LegalLayout from './LegalLayout';
import { FileText, AlertTriangle, CheckCircle, Clock, ShieldAlert, Cpu } from 'lucide-react';

export default function TerminosCondiciones() {
  const secciones = [
    {
      icon: Cpu,
      titulo: '1. Naturaleza del Servicio y Objeto de la Plataforma',
      descripcion:
        'Vitality HealthTech ofrece a través de TempusCare una plataforma digital tipo Software as a Service (SaaS) diseñada para la gestión, agendamiento y coordinación de turnos médicos en consultorios, policlínicos y centros de salud privados de la provincia de Tucumán y la región.',
      puntos: [
        'TempusCare actúa como intermediario tecnológico entre consultorios médicos, secretarías administrativas y pacientes.',
        'Vitality HealthTech no presta actos médicos directos ni emite diagnósticos clínicos; las decisiones médicas son responsabilidad exclusiva de los profesionales matriculados.',
      ],
    },
    {
      icon: ShieldAlert,
      titulo: '2. Deslinde Expreso de Emergencias y Urgencias Médicas',
      descripcion:
        'TempusCare es un sistema programado de turnos ambulatorios y de consulta previa:',
      puntos: [
        'En ninguna circunstancia TempusCare debe ser utilizado para situaciones de riesgo vital, guardia médica de emergencia o atención de urgencia inmediata.',
        'Ante cualquier síntoma de alarma o emergencia médica, el usuario debe comunicarse de inmediato con las líneas de auxilio público (107 / SAME) o concurrir al centro asistencial con guardia más cercano.',
      ],
      alerta: true,
    },
    {
      icon: CheckCircle,
      titulo: '3. Compromiso de Buen Uso y Veracidad',
      descripcion:
        'Para garantizar la fluidez del sistema y el respeto por el tiempo de toda la comunidad:',
      puntos: [
        'De los consultorios y secretarías: Mantener agendas actualizadas, respetar los horarios pautados y notificar demoras imprevistas con la mayor antelación posible.',
        'De los pacientes: Proveer datos personales verídicos (nombre, DNI y teléfono de contacto) y presentarse puntualmente al turno solicitado.',
        'Cancelaciones solidarias: En caso de no poder asistir, el paciente se compromete a cancelar o reprogramar el turno con al menos 24 horas de antelación para permitir que otro paciente que lo necesita ocupe el cupo.',
      ],
    },
    {
      icon: Clock,
      titulo: '4. Disponibilidad del Sistema (SLA) y Mantenimiento',
      descripcion:
        'Nos esforzamos por brindar una plataforma accesible las 24 horas del día, los 365 días del año:',
      puntos: [
        'Vitality HealthTech procura una disponibilidad operativa del 99.8% mensual.',
        'Las tareas de mantenimiento preventivo, actualizaciones de seguridad o mejoras de infraestructura se programan prioritariamente en horarios nocturnos de bajo tráfico y se notifican con aviso previo.',
      ],
    },
    {
      icon: FileText,
      titulo: '5. Propiedad Intelectual y Licenciamiento',
      descripcion:
        'Todo el código fuente, marcas, logotipos, diseños visuales, algoritmos y contenidos de Vitality HealthTech y TempusCare son propiedad intelectual exclusiva de Vitality HealthTech y están protegidos por las leyes de propiedad intelectual de la República Argentina y tratados internacionales.',
    },
  ];

  return (
    <LegalLayout
      activeTab="terminos"
      badge="Condiciones de Uso · Ecosistema SaaS"
      title="Términos y Condiciones de Uso"
      subtitle="Reglas claras, responsabilidades compartidas y condiciones generales que rigen la utilización de TempusCare y los servicios de Vitality."
    >
      {/* Alerta de urgencias médicas destacada */}
      <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-700 shrink-0">
            <AlertTriangle size={28} />
          </div>
          <div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-amber-900">
              Aviso Importante: No es un Servicio de Urgencias Médicas
            </h2>
            <p className="text-amber-800 text-sm sm:text-base mt-2 leading-relaxed">
              TempusCare gestiona exclusivamente turnos programados en consultorios ambulatorios. Si usted o un familiar experimenta una emergencia médica o requiere auxilio inmediato, comuníquese con el <strong>107</strong> o asista a la guardia médica más cercana.
            </p>
          </div>
        </div>
      </div>

      {/* Secciones detalladas */}
      <div className="space-y-6">
        {secciones.map((sec, i) => {
          const Icon = sec.icon;
          return (
            <article
              key={i}
              className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-xs transition-colors ${
                sec.alerta ? 'border-amber-200/80' : 'border-gray-200/80 hover:border-accent/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2.5 rounded-xl ${
                    sec.alerta ? 'bg-amber-100 text-amber-800' : 'bg-accent/10 text-accent-dark'
                  }`}
                >
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
            </article>
          );
        })}
      </div>
    </LegalLayout>
  );
}
