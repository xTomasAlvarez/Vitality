import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../../shared/ui/Button';
import { TEMPUSCARE_URL } from '../../shared/data/data';
import {
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Star,
  MapPin,
  Clock,
  Sparkles,
  Building2,
  Stethoscope,
  Columns3,
  UserCheck,
  Plus,
  Activity,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const OBRAS_SOCIALES = [
  { id: 'Subsidio de Salud', label: 'Subsidio de Salud', badge: 'Cobertura Convenio Tucumán' },
  { id: 'PAMI', label: 'PAMI', badge: 'Cobertura 100% Afiliados' },
  { id: 'OSDE', label: 'OSDE', badge: 'Autorización Digital Directa' },
];

const INITIAL_SLOTS = [
  { id: '09:30', time: '09:30 hs', label: 'Hoy · Consultorio 3' },
  { id: '10:15', time: '10:15 hs', label: 'Hoy · Consultorio 3' },
  { id: '11:00', time: '11:00 hs', label: 'Hoy · Consultorio 3' },
];

const INITIAL_KANBAN = {
  espera: [
    { id: 'k1', nombre: 'Marta Rodríguez', hora: '09:15', os: 'PAMI', espera: '8 min' },
    { id: 'k2', nombre: 'Jorge Villagra', hora: '09:30', os: 'Subsidio', espera: '2 min' },
  ],
  consulta: [
    { id: 'k3', nombre: 'Elena Paz', hora: '09:00', os: 'OSDE', box: 'Box 2' },
  ],
  atendido: [
    { id: 'k4', nombre: 'Raúl Décima', hora: '08:30', os: 'Subsidio', estado: 'Evolucionado' },
  ]
};

const CONSULTORIOS_MEDICO = [
  {
    id: 'smt',
    nombre: 'Consultorio Barrio Norte · SMT',
    direccion: '25 de Mayo 640, San Miguel de Tucumán',
    turnosHoy: 14,
  },
  {
    id: 'yb',
    nombre: 'Centro Médico Yerba Buena',
    direccion: 'Av. Aconquija 1850, Yerba Buena',
    turnosHoy: 9,
  }
];

const TIMELINE_EVOLUCIONES = [
  {
    fecha: 'Hoy · 09:05 hs',
    sede: 'Consultorio Barrio Norte (SMT)',
    tipo: 'Evolución Clínica',
    detalle: 'Control HTA estable (125/80 mmHg). Se renueva esquema terapéutico y se adjunta ECG digital.',
    profesional: 'Dra. Valeria Medina'
  },
  {
    fecha: '12 Sep 2026',
    sede: 'Centro Médico Yerba Buena',
    tipo: 'Estudio Adjunto',
    detalle: 'Ecocardiograma Doppler color sin particularidades. Fracción de eyección conservada (62%).',
    profesional: 'Dr. Roberto Sánchez'
  },
  {
    fecha: '04 Ago 2026',
    sede: 'Consultorio Barrio Norte (SMT)',
    tipo: 'Primera Consulta',
    detalle: 'Apertura de Historia Clínica Unificada. Antecedentes cargados y validación con Subsidio de Salud.',
    profesional: 'Dra. Valeria Medina'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('paciente');
  const [selectedOS, setSelectedOS] = useState('Subsidio de Salud');
  const [reservedSlot, setReservedSlot] = useState('10:15');
  const [kanbanData, setKanbanData] = useState(INITIAL_KANBAN);
  const [walkInAdded, setWalkInAdded] = useState(false);
  const [selectedContext, setSelectedContext] = useState(CONSULTORIOS_MEDICO[0]);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3.5;
    const rotateY = ((x - centerX) / centerX) * 3.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleAddWalkIn = () => {
    if (!walkInAdded) {
      setKanbanData((prev) => ({
        ...prev,
        espera: [
          { id: 'k-walkin', nombre: 'Carlos Juárez (Sobreturno)', hora: 'Ahora', os: 'Subsidio', espera: 'Walk-in', isNew: true },
          ...prev.espera,
        ]
      }));
      setWalkInAdded(true);
    } else {
      setKanbanData(INITIAL_KANBAN);
      setWalkInAdded(false);
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-background-light via-white to-background-light/60"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-12 right-0 w-[520px] h-[520px] rounded-full bg-accent/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 max-w-2xl min-w-0"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-primary text-[11px] sm:text-sm font-semibold mb-6">
              <Sparkles size={14} className="text-accent shrink-0" />
              <span>Hecho en Tucumán · Plataforma Full-Stack TempusCare</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl xl:text-6xl font-extrabold text-primary leading-[1.14] tracking-tight mb-6">
              La tecnología que le devuelve la{' '}
              <span className="font-serif italic font-normal text-accent text-4xl sm:text-6xl xl:text-[4.25rem] px-0.5">
                tranquilidad
              </span>{' '}
              a la salud.
            </h1>

            <p className="text-base sm:text-lg xl:text-xl text-text-muted mb-8 leading-relaxed">
              Somos <strong className="text-primary font-semibold">Vitality</strong>, una startup HealthTech de Tucumán dedicada a transformar la gestión de turnos, recepción Kanban e historia clínica unificada en una experiencia simple, accesible y humana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:items-center mb-8">
              <a
                href={TEMPUSCARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" className="w-full sm:w-auto gap-2">
                  <span>Conocer TempusCare</span>
                  <ExternalLink size={17} />
                </Button>
              </a>
              <a href="#producto" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Explorar módulos
                </Button>
              </a>
            </div>

            {/* Píldoras de confianza alineadas sin superposición */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-main bg-white/80 px-3 py-2 rounded-xl border border-gray-200/70 shadow-2xs">
                <HeartPulse size={16} className="text-accent shrink-0" />
                <span>Accesibilidad WCAG AAA</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-main bg-white/80 px-3 py-2 rounded-xl border border-gray-200/70 shadow-2xs">
                <ShieldCheck size={16} className="text-primary shrink-0" />
                <span>Datos clínicos protegidos</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-main bg-white/80 px-3 py-2 rounded-xl border border-gray-200/70 shadow-2xs">
                <Building2 size={16} className="text-secondary shrink-0" />
                <span>Multi-Institucional</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Simulador Interactivo de TempusCare */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 relative w-full min-w-0"
          >
            {/* Badges flotantes anclados de forma segura (sin cortarse ni tapar contenido) */}
            <div className="hidden sm:flex items-center justify-between mb-3 px-2">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hc-card bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-gray-200/80 flex items-center gap-2.5"
              >
                <div className="bg-accent/15 p-1.5 rounded-lg text-accent">
                  <HeartPulse size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary leading-none">Accesibilidad real</p>
                  <p className="text-[11px] text-text-muted">Teclado + Lector de pantalla</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hc-card bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-gray-200/80 flex items-center gap-2.5"
              >
                <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary leading-none">Datos protegidos</p>
                  <p className="text-[11px] text-text-muted">Trazabilidad por rol</p>
                </div>
              </motion.div>
            </div>

            {/* Contenedor con inclinación 3D sutil */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              style={{ transformPerspective: 1200 }}
              className="hc-card bg-white rounded-3xl shadow-2xl border border-gray-200/90 overflow-hidden"
            >
              {/* Barra Superior del Sistema */}
              <div className="bg-primary text-white px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  <span className="ml-2 text-xs font-semibold tracking-wide text-blue-100 flex items-center gap-1.5">
                    <Activity size={14} className="text-accent-light" />
                    TempusCare Live Preview
                  </span>
                </div>
                <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded-full font-medium text-blue-50">
                  San Miguel de Tucumán
                </span>
              </div>

              {/* Selector de 3 Pestañas (Paciente / Recepción Kanban / Médico) */}
              <div
                role="tablist"
                aria-label="Vistas del sistema TempusCare"
                className="grid grid-cols-3 gap-1.5 p-2 bg-background-light border-b border-gray-200/80"
              >
                <button
                  role="tab"
                  aria-selected={activeTab === 'paciente'}
                  onClick={() => setActiveTab('paciente')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'paciente'
                      ? 'bg-white text-primary shadow-sm border border-gray-200/80'
                      : 'text-text-muted hover:text-primary hover:bg-white/50'
                  }`}
                >
                  <UserCheck size={15} className={activeTab === 'paciente' ? 'text-accent' : ''} />
                  <span>Paciente</span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'recepcion'}
                  onClick={() => setActiveTab('recepcion')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'recepcion'
                      ? 'bg-white text-primary shadow-sm border border-gray-200/80'
                      : 'text-text-muted hover:text-primary hover:bg-white/50'
                  }`}
                >
                  <Columns3 size={15} className={activeTab === 'recepcion' ? 'text-accent' : ''} />
                  <span>Recepción</span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'medico'}
                  onClick={() => setActiveTab('medico')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'medico'
                      ? 'bg-white text-primary shadow-sm border border-gray-200/80'
                      : 'text-text-muted hover:text-primary hover:bg-white/50'
                  }`}
                >
                  <Stethoscope size={15} className={activeTab === 'medico' ? 'text-accent' : ''} />
                  <span>Médico</span>
                </button>
              </div>

              {/* Contenido Dinámico de las 3 Pestañas */}
              <div className="p-4 sm:p-6 min-h-[380px] flex flex-col justify-between bg-white">
                <AnimatePresence initial={false} mode="wait">
                  {activeTab === 'paciente' && (
                    <motion.div
                      key="tab-paciente"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {/* Filtro de Obra Social */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                            Filtrar Obra Social activa
                          </span>
                          <span className="text-[11px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                            Sin bloqueo de agenda
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {OBRAS_SOCIALES.map((os) => (
                            <button
                              key={os.id}
                              type="button"
                              onClick={() => setSelectedOS(os.id)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                                selectedOS === os.id
                                  ? 'bg-primary text-white border-primary shadow-xs'
                                  : 'bg-background-light text-text-main border-gray-200 hover:border-accent'
                              }`}
                            >
                              {os.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tarjeta del Profesional en SMT */}
                      <div className="p-4 rounded-2xl bg-background-light/80 border border-gray-200/80 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-xs">
                              VM
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-primary text-base leading-snug">
                                Dra. Valeria Medina
                              </h3>
                              <p className="text-xs text-text-muted font-medium">
                                Cardiología Clínica · MP 4892
                              </p>
                              <p className="text-xs text-text-muted flex items-center gap-1 mt-0.5">
                                <MapPin size={12} className="text-accent shrink-0" />
                                <span>Barrio Norte, San Miguel de Tucumán</span>
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end shrink-0">
                            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 text-amber-800 px-2 py-0.5 rounded-lg text-xs font-bold">
                              <Star size={12} className="fill-amber-400 text-amber-400" />
                              <span>4.9</span>
                            </div>
                            <span className="text-[10px] text-text-muted mt-1">128 encuestas</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs bg-white px-3 py-2 rounded-xl border border-gray-200/60">
                          <span className="font-semibold text-primary">Cobertura seleccionada:</span>
                          <span className="font-bold text-accent">{selectedOS} ✓</span>
                        </div>
                      </div>

                      {/* Horarios Interactivos */}
                      <div>
                        <p className="text-xs font-bold text-primary mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-accent" />
                            Seleccioná un horario para simular reserva:
                          </span>
                          <span className="text-[11px] text-text-muted font-normal">Clic para reservar</span>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {INITIAL_SLOTS.map((slot) => {
                            const isReserved = reservedSlot === slot.id;
                            return (
                              <button
                                key={slot.id}
                                type="button"
                                onClick={() => setReservedSlot(slot.id)}
                                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex sm:flex-col items-center justify-between sm:justify-center px-3 sm:px-2 ${
                                  isReserved
                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md sm:scale-[1.02]'
                                    : 'bg-white text-primary border-gray-200 hover:border-accent hover:bg-accent/5'
                                }`}
                              >
                                <span className="font-heading font-bold text-sm">{slot.time}</span>
                                <span
                                  className={`text-[11px] font-semibold sm:mt-0.5 flex items-center gap-1 ${
                                    isReserved ? 'text-emerald-50' : 'text-accent'
                                  }`}
                                >
                                  {isReserved ? (
                                    <>
                                      <CheckCircle2 size={12} className="shrink-0" />
                                      <span>¡Turno Reservado!</span>
                                    </>
                                  ) : (
                                    'Disponible'
                                  )}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Confirmación en vivo */}
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs text-emerald-900">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          <span>
                            Turno <strong>{reservedSlot} hs</strong> confirmado con <strong>{selectedOS}</strong>.
                          </span>
                        </div>
                        <span className="font-bold text-[11px] uppercase tracking-wider text-emerald-700 shrink-0 ml-2">
                          Activo
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'recepcion' && (
                    <motion.div
                      key="tab-recepcion"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {/* Cabecera Recepción + Botón Sobreturno / Walk-in */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-100">
                        <div>
                          <h3 className="font-heading font-bold text-primary text-sm sm:text-base">
                            Tablero Kanban de Recepción
                          </h3>
                          <p className="text-xs text-text-muted">
                            Sincronizado en tiempo real con el consultorio médico
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleAddWalkIn}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                            walkInAdded
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-accent text-white hover:bg-accent-light'
                          }`}
                        >
                          <Plus size={14} />
                          <span>{walkInAdded ? 'Quitar Sobreturno' : 'Sobreturno / Walk-in'}</span>
                        </button>
                      </div>

                      {/* 3 Columnas Kanban: En Espera, En Consulta, Atendido */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* Columna 1: En Espera */}
                        <div className="bg-background-light p-2.5 rounded-2xl border border-gray-200/80">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                              En Espera
                            </span>
                            <span className="text-[11px] font-bold bg-white px-2 py-0.5 rounded-full text-primary border border-gray-200">
                              {kanbanData.espera.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {kanbanData.espera.map((item) => (
                              <div
                                key={item.id}
                                className={`p-2.5 rounded-xl bg-white border text-xs shadow-2xs ${
                                  item.isNew ? 'border-accent ring-1 ring-accent/30' : 'border-gray-200/80'
                                }`}
                              >
                                <p className="font-bold text-primary leading-tight">{item.nombre}</p>
                                <div className="flex items-center justify-between mt-1.5 text-[11px] text-text-muted">
                                  <span className="font-semibold text-secondary">{item.os}</span>
                                  <span>{item.hora}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Columna 2: En Consulta */}
                        <div className="bg-blue-50/60 p-2.5 rounded-2xl border border-blue-200/70">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                              En Consulta
                            </span>
                            <span className="text-[11px] font-bold bg-white px-2 py-0.5 rounded-full text-primary border border-blue-200">
                              {kanbanData.consulta.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {kanbanData.consulta.map((item) => (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-xl bg-white border border-blue-200 text-xs shadow-2xs"
                              >
                                <p className="font-bold text-primary leading-tight">{item.nombre}</p>
                                <div className="flex items-center justify-between mt-1.5 text-[11px] text-text-muted">
                                  <span className="font-semibold text-secondary">{item.os}</span>
                                  <span className="text-primary font-bold">{item.box}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Columna 3: Atendido */}
                        <div className="bg-emerald-50/60 p-2.5 rounded-2xl border border-emerald-200/70">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              Atendido
                            </span>
                            <span className="text-[11px] font-bold bg-white px-2 py-0.5 rounded-full text-emerald-800 border border-emerald-200">
                              {kanbanData.atendido.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {kanbanData.atendido.map((item) => (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-xl bg-white border border-emerald-200 text-xs shadow-2xs"
                              >
                                <p className="font-bold text-primary leading-tight">{item.nombre}</p>
                                <div className="flex items-center justify-between mt-1.5 text-[11px] text-emerald-700 font-semibold">
                                  <span>{item.os}</span>
                                  <span>✓ {item.estado}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-text-muted bg-background-light px-3 py-2 rounded-xl flex items-center justify-between">
                        <span>Flujo de admisión sin recarga de página</span>
                        <span className="font-bold text-primary">Drag & Drop + Walk-in</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'medico' && (
                    <motion.div
                      key="tab-medico"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3.5"
                    >
                      {/* ContextSwitcher: Selector de Consultorio */}
                      <div className="bg-background-light p-2.5 rounded-2xl border border-gray-200/80">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1">
                            <Building2 size={12} className="text-accent" />
                            ContextSwitcher · Consultorio Activo
                          </span>
                          <span className="text-[11px] font-bold text-primary">
                            {selectedContext.turnosHoy} turnos hoy
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {CONSULTORIOS_MEDICO.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => setSelectedContext(c)}
                              className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                                selectedContext.id === c.id
                                  ? 'bg-primary text-white border-primary shadow-2xs'
                                  : 'bg-white text-text-main border-gray-200 hover:border-accent'
                              }`}
                            >
                              <div className="leading-snug">{c.nombre}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Ficha Paciente + PatientTimeline */}
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-accent/10 border border-accent/20 text-xs">
                        <div>
                          <span className="font-bold text-primary">Paciente: Marta Rodríguez (68a)</span>
                          <span className="text-text-muted ml-2">· PAMI · HTA Crónica</span>
                        </div>
                        <span className="font-bold text-accent hidden sm:inline">HCE #00492</span>
                      </div>

                      {/* Línea de tiempo de evoluciones (PatientTimeline) */}
                      <div className="space-y-2.5 pl-2">
                        {TIMELINE_EVOLUCIONES.map((item, idx) => (
                          <div key={idx} className="relative pl-5 border-l-2 border-accent/40">
                            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white"></span>
                            <div className="flex flex-wrap items-center justify-between gap-1">
                              <span className="text-xs font-bold text-primary">{item.tipo}</span>
                              <span className="text-[11px] font-semibold text-text-muted">{item.fecha}</span>
                            </div>
                            <p className="text-xs text-text-main leading-snug mt-0.5">{item.detalle}</p>
                            <p className="text-[10px] font-semibold text-secondary mt-0.5">
                              {item.sede} · {item.profesional}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pie de la tarjeta interactiva con enlace directo */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-text-muted font-medium">
                    Módulos reales en rama <code className="text-primary font-bold">develop</code>
                  </span>
                  <a
                    href={TEMPUSCARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accent hover:text-primary inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Abrir aplicación</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
