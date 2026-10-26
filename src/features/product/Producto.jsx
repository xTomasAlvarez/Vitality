import React, { useState } from 'react';
import { motion } from 'motion/react';
import Button from '../../shared/ui/Button';
import { TEMPUSCARE_URL } from '../../shared/data/data';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';
import {
  FileText,
  Ear,
  MapPin,
  ShieldCheck,
  Building2,
  Columns3,
  CheckCircle2,
  Volume2,
  Keyboard,
  Contrast,
  Captions,
  Star,
  ExternalLink,
  Activity,
  SlidersHorizontal
} from 'lucide-react';

const SEDES_TUCUMAN = [
  {
    id: 'smt-norte',
    nombre: 'Policlínico Barrio Norte',
    zona: '25 de Mayo 640 · SMT',
    coords: { top: '36%', left: '54%' },
    profesionales: 18,
    puntualidad: 97,
    atencion: 98,
    profesionalismo: 99,
  },
  {
    id: 'yerba-buena',
    nombre: 'Centro Médico Yerba Buena',
    zona: 'Av. Aconquija 1850 · YB',
    coords: { top: '48%', left: '28%' },
    profesionales: 12,
    puntualidad: 96,
    atencion: 99,
    profesionalismo: 98,
  },
  {
    id: 'smt-sur',
    nombre: 'Consultorios Parque Sur',
    zona: 'Av. Roca 1420 · SMT',
    coords: { top: '68%', left: '58%' },
    profesionales: 9,
    puntualidad: 95,
    atencion: 97,
    profesionalismo: 99,
  }
];

export default function Producto() {
  const revealRef = useScrollReveal();

  // Estados interactivos para los 5 Bentos
  const [selectedSedeAgenda, setSelectedSedeAgenda] = useState('Todas las sedes (Unificado)');
  const [hceFilter, setHceFilter] = useState('todos');
  const [allowUnlistedOS, setAllowUnlistedOS] = useState(true);
  const [activeA11yFeature, setActiveA11yFeature] = useState('screenreader');
  const [selectedMapPin, setSelectedMapPin] = useState(SEDES_TUCUMAN[0]);

  return (
    <section id="producto" className="py-24 bg-background-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        
        {/* Encabezado de Producto */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest mb-3 bg-accent/10 px-3.5 py-1 rounded-full">
              <Activity size={14} />
              Arquitectura Full-Stack · Rama develop
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              TempusCare: nuestra solución integral para la{' '}
              <span className="font-serif italic font-normal text-accent text-4xl sm:text-5xl md:text-[3.5rem]">
                salud privada
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">
              Explorá los 5 módulos reales construidos en nuestra plataforma para conectar pacientes, recepcionistas y médicos en toda la provincia de Tucumán.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={TEMPUSCARE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="gap-2">
                <span>Ver la plataforma</span>
                <ExternalLink size={17} />
              </Button>
            </a>
          </div>
        </div>

        {/* BENTO GRID ASIMÉTRICO DE 5 TARJETAS INTERACTIVAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* =========================================================
              BENTO 1: Turnero Multi-Institucional y Kanban (7 columnas)
             ========================================================= */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="hc-card lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-200/80 flex flex-col justify-between transition-shadow"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <Columns3 size={14} className="text-accent" />
                  Módulo 01 · Agenda & Recepción
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Sin solapamiento horario
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-primary mb-2">
                Turnero Multi-Institucional y Recepción Kanban
              </h3>
              <p className="text-sm sm:text-base text-text-muted mb-6 leading-relaxed">
                Un mismo profesional atiende en distintos consultorios y clínicas sin superponer turnos. Secretaría gestiona el flujo diario en tiempo real con columnas Kanban y carga rápida de sobreturnos.
              </p>

              {/* Selector interactivo de institución */}
              <div className="bg-background-light p-3.5 rounded-2xl border border-gray-200/80 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <Building2 size={15} className="text-accent" />
                    Convivencia de Agendas por Sede:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Todas las sedes (Unificado)', 'Sede SMT Centro', 'Sede Yerba Buena'].map((sede) => (
                      <button
                        key={sede}
                        type="button"
                        onClick={() => setSelectedSedeAgenda(sede)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                          selectedSedeAgenda === sede
                            ? 'bg-primary text-white shadow-2xs'
                            : 'bg-white text-text-muted border border-gray-200 hover:border-accent'
                        }`}
                      >
                        {sede}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mini flujo Kanban + Bloques horarios */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-white p-3 rounded-xl border border-gray-200/80">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-700 mb-1.5">
                      <span>● En Espera (3)</span>
                      <span className="text-[10px] bg-amber-50 px-1.5 py-0.5 rounded">Secretaría</span>
                    </div>
                    <p className="text-xs font-bold text-primary">09:00 · A. Mansilla</p>
                    <p className="text-[11px] text-text-muted">Sede SMT · Subsidio</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between text-xs font-bold text-secondary mb-1.5">
                      <span>● En Consulta (1)</span>
                      <span className="text-[10px] bg-blue-50 px-1.5 py-0.5 rounded">Box 2</span>
                    </div>
                    <p className="text-xs font-bold text-primary">08:45 · L. Paz</p>
                    <p className="text-[11px] text-text-muted">Sede SMT · OSDE</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-emerald-200">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-700 mb-1.5">
                      <span>● Tarde (Sede YB)</span>
                      <span className="text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">16:00-20:00</span>
                    </div>
                    <p className="text-xs font-bold text-primary">Agenda Yerba Buena</p>
                    <p className="text-[11px] text-text-muted">8 turnos confirmados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-text-muted pt-3 border-t border-gray-100">
              <span>Vista activa: <strong className="text-primary">{selectedSedeAgenda}</strong></span>
              <span className="font-bold text-accent">Sincronización WebSockets / REST</span>
            </div>
          </motion.article>

          {/* =========================================================
              BENTO 2: Historia Clínica Unificada y Línea de Tiempo (5 columnas)
             ========================================================= */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="hc-card lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-200/80 flex flex-col justify-between transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <FileText size={14} className="text-accent" />
                  Módulo 02 · HCE Trazable
                </span>
                <div className="flex gap-1">
                  {[
                    { id: 'todos', label: 'Todo' },
                    { id: 'evolucion', label: 'Clínica' },
                    { id: 'estudios', label: 'Estudios' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setHceFilter(tab.id)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-bold cursor-pointer transition-colors ${
                        hceFilter === tab.id
                          ? 'bg-accent text-white'
                          : 'bg-background-light text-text-muted hover:text-primary'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-primary mb-2">
                Historia Clínica Unificada y Línea de Tiempo
              </h3>
              <p className="text-sm text-text-muted mb-5 leading-relaxed">
                Trazabilidad longitudinal de evoluciones médicas, signos vitales y estudios adjuntos por paciente a través de <code className="text-primary font-bold">PatientTimeline</code>.
              </p>

              {/* Línea de tiempo interactiva */}
              <div className="space-y-3 pl-2">
                {(hceFilter === 'todos' || hceFilter === 'evolucion') && (
                  <div className="relative pl-5 border-l-2 border-accent">
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white"></span>
                    <div className="bg-background-light p-3 rounded-xl border border-gray-200/70">
                      <div className="flex justify-between text-xs font-bold text-primary">
                        <span>Evolución Cardiológica</span>
                        <span className="text-accent">24 Oct · SMT</span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">
                        TA: 120/78 mmHg · FC: 68 lpm. Paciente asintomático con adherencia completa.
                      </p>
                    </div>
                  </div>
                )}

                {(hceFilter === 'todos' || hceFilter === 'estudios') && (
                  <div className="relative pl-5 border-l-2 border-secondary/50">
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-secondary border-2 border-white"></span>
                    <div className="bg-background-light p-3 rounded-xl border border-gray-200/70">
                      <div className="flex justify-between text-xs font-bold text-primary">
                        <span>Laboratorio + Holter 24hs.pdf</span>
                        <span className="text-secondary">10 Sep · Yerba Buena</span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">
                        Ritmo sinusal permanente. Colesterol LDL dentro de objetivos terapéuticos.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-text-muted">
              <span className="flex items-center gap-1 font-medium text-primary">
                <ShieldCheck size={14} className="text-accent" />
                Registro inmutable con firma de profesional
              </span>
              <span className="font-bold">Ley 26.529</span>
            </div>
          </motion.article>

          {/* =========================================================
              BENTO 3: Parametrización de Obras Sociales (4 columnas)
             ========================================================= */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="hc-card lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-gray-200/80 flex flex-col justify-between transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <SlidersHorizontal size={14} className="text-accent" />
                  Módulo 03 · Coberturas
                </span>
              </div>

              <h3 className="font-heading text-xl font-extrabold text-primary mb-2">
                Parametrización de Obras Sociales
              </h3>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">
                Configuración flexible de convenios por profesional. El filtro orienta al paciente sobre su cobertura pero <strong>nunca bloquea</strong> la reserva particular.
              </p>

              {/* Grilla de Obras Sociales de Tucumán */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[
                  { name: 'Subsidio de Salud', state: 'Convenio Activo' },
                  { name: 'PAMI', state: '100% Cubierto' },
                  { name: 'OSDE', state: 'Validación Online' },
                  { name: 'Swiss Medical', state: 'Activo' },
                  { name: 'Prensa', state: 'Coseguro' },
                  { name: 'Particular', state: 'Arancel Preferencial' },
                ].map((os, i) => (
                  <div
                    key={i}
                    className="px-2.5 py-1.5 rounded-xl bg-background-light border border-gray-200/80 text-xs flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={13} className="text-accent shrink-0" />
                    <span className="font-bold text-primary">{os.name}</span>
                  </div>
                ))}
              </div>

              {/* Switch interactivo de Filtro sin Bloqueo */}
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-primary">Filtro Opcional sin Bloqueo</p>
                  <p className="text-[11px] text-text-muted">
                    {allowUnlistedOS
                      ? 'Permite reservar avisando modalidad Particular / Copago'
                      : 'Mostrando únicamente convenios directos'}
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={allowUnlistedOS}
                  onClick={() => setAllowUnlistedOS(!allowUnlistedOS)}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer shrink-0 ${
                    allowUnlistedOS ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label="Alternar filtro opcional sin bloqueo"
                >
                  <span
                    className={`block w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                      allowUnlistedOS ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-text-muted flex justify-between">
              <span>Transparencia arancelaria</span>
              <span className="font-bold text-primary">0% rechazos en admisión</span>
            </div>
          </motion.article>

          {/* =========================================================
              BENTO 4: Accesibilidad Real - Diferencial (4 columnas)
             ========================================================= */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="hc-card lg:col-span-4 bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl border border-primary/20 flex flex-col justify-between transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs">
                  <Ear size={14} className="text-accent-light" />
                  Módulo 04 · Nuestro Diferencial
                </span>
                <span className="text-[11px] font-bold bg-accent text-white px-2.5 py-0.5 rounded-full">
                  WCAG 2.1 AAA
                </span>
              </div>

              <h3 className="font-heading text-xl font-extrabold text-white mb-2">
                Accesibilidad Nativa Real
              </h3>
              <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                Diseñada desde la base para adultos mayores y personas con discapacidad visual, auditiva o motriz.
              </p>

              {/* Botones de demo visual de accesibilidad */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  {
                    id: 'screenreader',
                    label: 'Lector de Pantalla',
                    Icon: Volume2,
                    demo: 'ARIA-Live: "Turno 10:15 hs con Dra. Medina disponible. Presione Enter para confirmar."',
                  },
                  {
                    id: 'keyboard',
                    label: 'Nav. por Teclado',
                    Icon: Keyboard,
                    demo: 'Foco visible [Tab] → [Shift+Tab] → [Enter] sin trampas de teclado en modales.',
                  },
                  {
                    id: 'contrast',
                    label: 'Alto Contraste',
                    Icon: Contrast,
                    demo: 'Relación de contraste > 10:1 y tipografía Atkinson Hyperlegible de grado médico.',
                  },
                  {
                    id: 'captions',
                    label: 'Subtitulado Visual',
                    Icon: Captions,
                    demo: 'Alertas visuales en pantalla para llamado en sala de espera y videoconsulta.',
                  },
                ].map((item) => {
                  const Icon = item.Icon;
                  const isSelected = activeA11yFeature === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveA11yFeature(item.id)}
                      className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-white text-primary border-white shadow-md'
                          : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                      }`}
                    >
                      <Icon size={15} className={`shrink-0 ${isSelected ? 'text-accent' : 'text-accent-light'}`} />
                      <span className="leading-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Consola de demostración en vivo */}
              <div className="p-3 rounded-2xl bg-black/30 border border-white/15 text-xs text-blue-50 font-mono leading-relaxed">
                {activeA11yFeature === 'screenreader' && (
                  <span>🔊 ARIA-Live: &ldquo;Turno 10:15 hs con Dra. Medina disponible. Presione Enter para reservar.&rdquo;</span>
                )}
                {activeA11yFeature === 'keyboard' && (
                  <span>⌨️ Flujo 100% operable con [Tab], [Flechas] y [Enter]. Anillo de foco de 3px activo.</span>
                )}
                {activeA11yFeature === 'contrast' && (
                  <span>👁️ Modo AAA activo: Tipografía Atkinson Hyperlegible + contraste verificable en vivo.</span>
                )}
                {activeA11yFeature === 'captions' && (
                  <span>💬 Subtítulos sincronizados y llamado visual en recepción sin depender de audio.</span>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/15 text-xs text-blue-100 flex justify-between">
              <span>Probá el widget abajo a la izquierda ↙</span>
              <span className="font-bold text-accent-light">100% Inclusivo</span>
            </div>
          </motion.article>

          {/* =========================================================
              BENTO 5: Geolocalización y Encuestas Verificadas (4 columnas)
             ========================================================= */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="hc-card lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-gray-200/80 flex flex-col justify-between transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <MapPin size={14} className="text-accent" />
                  Módulo 05 · Geo & Calidad
                </span>
                <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  Verificado
                </span>
              </div>

              <h3 className="font-heading text-xl font-extrabold text-primary mb-2">
                Geolocalización y Encuestas Verificadas
              </h3>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">
                Mapa interactivo de consultorios en el Gran San Miguel de Tucumán y métricas reales post-atención.
              </p>

              {/* Mini Mapa Interactivo de Tucumán */}
              <div className="relative h-28 rounded-2xl bg-gradient-to-br from-blue-50 via-teal-50/60 to-background-light border border-gray-200/80 overflow-hidden mb-4 p-3 flex flex-col justify-between">
                {/* Retícula cartográfica estilizada */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(#1B4B8C 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded-md text-primary shadow-2xs">
                    Mapa Gran S.M. de Tucumán
                  </span>
                  <span className="text-[10px] font-semibold text-text-muted">Clic en cada sede</span>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {SEDES_TUCUMAN.map((sede) => {
                    const isSelected = selectedMapPin.id === sede.id;
                    return (
                      <button
                        key={sede.id}
                        type="button"
                        onClick={() => setSelectedMapPin(sede)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white shadow-sm scale-105'
                            : 'bg-white/90 text-primary border border-gray-200 hover:border-accent'
                        }`}
                      >
                        <MapPin size={11} className={isSelected ? 'text-accent-light' : 'text-accent'} />
                        <span>{sede.nombre.replace('Policlínico ', '').replace('Centro Médico ', '').replace('Consultorios ', '')}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Barras horizontales de Encuestas Verificadas */}
              <div className="space-y-2.5 bg-background-light p-3.5 rounded-2xl border border-gray-200/70">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                  <span className="font-bold text-primary">{selectedMapPin.nombre}</span>
                  <span className="text-[11px] text-text-muted">{selectedMapPin.zona}</span>
                </div>

                {[
                  { label: 'Puntualidad', value: selectedMapPin.puntualidad },
                  { label: 'Atención en Recepción', value: selectedMapPin.atencion },
                  { label: 'Profesionalismo Médico', value: selectedMapPin.profesionalismo },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span className="text-text-main">{metric.label}</span>
                      <span className="text-primary font-bold">{metric.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-text-muted flex justify-between">
              <span>Solo pacientes con turno Finalizado</span>
              <span className="font-bold text-emerald-700">100% Verificadas</span>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
