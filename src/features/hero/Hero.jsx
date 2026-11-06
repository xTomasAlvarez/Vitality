import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../../shared/ui/Button';
import { TEMPUSCARE_URL } from '../../shared/data/data';
import {
  CheckCircle2,
  Star,
  MapPin,
  Clock,
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

const INITIAL_PATIENTS = {
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
  const [patientsData, setPatientsData] = useState(INITIAL_PATIENTS);
  const [walkInAdded, setWalkInAdded] = useState(false);
  const [selectedContext, setSelectedContext] = useState(CONSULTORIOS_MEDICO[0]);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof document !== 'undefined') {
      const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      return Boolean(
        prefersReduced ||
        document.documentElement.classList.contains('reduce-motion') ||
        document.documentElement.classList.contains('pause-animations')
      );
    }
    return false;
  });

  useEffect(() => {
    const handleReduce = (e) => {
      setIsReducedMotion(Boolean(e.detail?.isReducedMotion));
    };
    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e) => {
      setIsReducedMotion(
        Boolean(
          e.matches ||
          document.documentElement.classList.contains('reduce-motion') ||
          document.documentElement.classList.contains('pause-animations')
        )
      );
    };

    window.addEventListener('vitality:reduce-motion', handleReduce);
    mediaQuery?.addEventListener?.('change', handleMediaChange);

    return () => {
      window.removeEventListener('vitality:reduce-motion', handleReduce);
      mediaQuery?.removeEventListener?.('change', handleMediaChange);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleAddWalkIn = () => {
    if (!walkInAdded) {
      setPatientsData((prev) => ({
        ...prev,
        espera: [
          { id: 'k-walkin', nombre: 'Carlos Juárez (Sobreturno)', hora: 'Ahora', os: 'Subsidio', espera: 'Recepción', isNew: true },
          ...prev.espera,
        ]
      }));
      setWalkInAdded(true);
    } else {
      setPatientsData(INITIAL_PATIENTS);
      setWalkInAdded(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background-light via-white to-background-light/60">
      {/* ========================================================
          1. TIEMPO 1: ABOVE THE FOLD (PRESENTACIÓN PRINCIPAL)
         ======================================================== */}
      <section
        id="inicio"
        className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24"
      >
        {/* Resplandores orgánicos de ambiente */}
        <div className="pointer-events-none absolute top-12 right-0 w-[540px] h-[540px] rounded-full bg-accent/10 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Columna Izquierda: Copy Principal & Acciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 max-w-2xl min-w-0"
            >
              <h1 className="font-heading text-3xl sm:text-5xl xl:text-6xl font-extrabold text-primary leading-[1.14] tracking-tight mb-6">
                La tecnología que le devuelve la{' '}
                <span className="font-serif italic font-normal text-accent text-4xl sm:text-6xl xl:text-[4.25rem] px-0.5">
                  tranquilidad
                </span>{' '}
                a la salud.
              </h1>

              <p className="text-base sm:text-lg xl:text-xl text-text-muted mb-8 leading-relaxed">
                En <strong className="text-primary font-semibold">Vitality</strong> diseñamos tecnología pensada para devolverle el valor al tiempo en cada consulta médica. Acompañamos a consultorios, profesionales y pacientes con herramientas simples, humanas y accesibles que agilizan la atención diaria y acercan la salud a todas las personas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 sm:items-center">
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
                <a href="#simulador-app" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Probar la aplicación
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Columna Derecha: Isotipo Oficial de TempusCare con Agujas Vectoriales Biseladas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-6 relative w-full flex items-center justify-center min-w-0"
            >
              <div className="relative w-64 sm:w-80 md:w-96 aspect-[1129/1440] mx-auto flex items-center justify-center">
                {/* Halo luminoso sutil respirando detrás */}
                <div className="pointer-events-none absolute -inset-6 bg-gradient-to-tr from-accent/25 via-primary/20 to-teal-300/25 blur-3xl rounded-full animate-pulse" />

                {/* Base del Isotipo Oficial de TempusCare en alta resolución (1129x1440) y con fondo transparente */}
                <img
                  src="/logosin_nuevo.png"
                  alt="TempusCare"
                  className="w-full h-full object-contain relative z-10"
                />

                {/* Capa SVG interactiva con las agujas vectoriales animadas superpuestas con precisión milimétrica */}
                <svg
                  viewBox="0 0 1129 1440"
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  aria-hidden="true"
                >
                  <g transform="translate(712.5, 725)">
                    {/* Aguja 1: Minutero / Larga (Posición inicial ~283°, período 60s) */}
                    <g transform={isReducedMotion ? 'rotate(283 0 0)' : undefined}>
                      {!isReducedMotion && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="283 0 0"
                          to="643 0 0"
                          dur="60s"
                          repeatCount="indefinite"
                        />
                      )}
                      {/* Mitad inferior (vista en 283°): Celeste #9AD0EA */}
                      <path
                        d="M 0,-50 L -27,-50 L -11,-359 A 11 11 0 0 1 0,-370 L 0,-50 Z"
                        fill="#9AD0EA"
                      />
                      {/* Mitad superior (vista en 283°): Azul Marino #1E427E */}
                      <path
                        d="M 0,-50 L 0,-370 A 11 11 0 0 1 11,-359 L 27,-50 L 0,-50 Z"
                        fill="#1E427E"
                      />
                    </g>

                    {/* Aguja 2: Horario / Corta (Posición inicial ~92°, período 180s) */}
                    <g transform={isReducedMotion ? 'rotate(92 0 0)' : undefined}>
                      {!isReducedMotion && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="92 0 0"
                          to="452 0 0"
                          dur="180s"
                          repeatCount="indefinite"
                        />
                      )}
                      {/* Mitad superior/izquierda: Azul Marino #1E427E */}
                      <path
                        d="M 0,-50 L -31,-50 L -12,-278 A 12 12 0 0 1 0,-290 L 0,-50 Z"
                        fill="#1E427E"
                      />
                      {/* Mitad inferior/derecha: Celeste #9AD0EA */}
                      <path
                        d="M 0,-50 L 0,-290 A 12 12 0 0 1 12,-278 L 31,-50 L 0,-50 Z"
                        fill="#9AD0EA"
                      />
                    </g>

                    {/* Aguja 3: Segundero / Media (Posición inicial ~180°, período 20s) */}
                    <g transform={isReducedMotion ? 'rotate(180 0 0)' : undefined}>
                      {!isReducedMotion && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="180 0 0"
                          to="540 0 0"
                          dur="20s"
                          repeatCount="indefinite"
                        />
                      )}
                      {/* Mitad derecha (vista en 180°): Azul Marino #1E427E */}
                      <path
                        d="M 0,-50 L -16.5,-50 L -6,-329 A 6 6 0 0 1 0,-335 L 0,-50 Z"
                        fill="#1E427E"
                      />
                      {/* Mitad izquierda (vista en 180°): Celeste #9AD0EA */}
                      <path
                        d="M 0,-50 L 0,-335 A 6 6 0 0 1 6,-329 L 16.5,-50 L 0,-50 Z"
                        fill="#9AD0EA"
                      />
                    </g>

                    {/* Aro espaciador blanco (#FFFFFF) de donde nacen las agujas */}
                    <circle cx="0" cy="0" r="72" fill="#FFFFFF" />

                    {/* Eje central: Círculo sólido azul marino (#1E427E) en la capa superior que tapa las uniones */}
                    <circle cx="0" cy="0" r="52" fill="#1E427E" />
                  </g>
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. TIEMPO 2: SCROLL REVEAL DEL SIMULADOR DE TEMPUSCARE
             Encabezado por el slogan oficial:
             "Cuidamos tu tiempo, te cuidamos a vos."
         ======================================================== */}
      <section
        id="simulador-app"
        className="py-16 lg:py-24 relative border-t border-gray-200/60 bg-gradient-to-b from-white via-background-light/70 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Encabezado destacado con el Slogan Oficial de TempusCare (Sin etiquetas verdes) */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-serif italic text-3xl sm:text-5xl md:text-[3.25rem] text-primary font-normal leading-tight mb-4">
              “Cuidamos tu tiempo, te cuidamos a vos.”
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Probá cómo pacientes, secretarías y profesionales experimentan TempusCare todos los días con una interfaz fluida, accesible y sin fricciones.
            </p>
          </div>

          {/* Bloque interactivo que simula la app TempusCare con scroll reveal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="w-full max-w-4xl mx-auto"
          >
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
                    TempusCare · Vista Interactiva
                  </span>
                </div>
                <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded-full font-medium text-blue-50">
                  San Miguel de Tucumán
                </span>
              </div>

              {/* Selector de 3 Pestañas Orientadas al Cliente (Paciente / Recepción y Sala de Espera / Médico) */}
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
                  <span>Recepción y Sala de Espera</span>
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
                          <span className="text-[11px] font-semibold text-accent">
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
                            <span className="text-[10px] text-text-muted mt-1">128 opiniones</span>
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
                      {/* Cabecera Recepción + Botón Sobreturno / Recepción rápida */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-100">
                        <div>
                          <h3 className="font-heading font-bold text-primary text-sm sm:text-base">
                            Gestión de Secretaría y Sala de Espera
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
                          <span>{walkInAdded ? 'Quitar Sobreturno' : 'Ingreso Rápido / Sobreturno'}</span>
                        </button>
                      </div>

                      {/* 3 Columnas de Flujo de Atención: En Espera, En Consulta, Atendido */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* Columna 1: En Espera */}
                        <div className="bg-background-light p-2.5 rounded-2xl border border-gray-200/80">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                              En Espera
                            </span>
                            <span className="text-[11px] font-bold bg-white px-2 py-0.5 rounded-full text-primary border border-gray-200">
                              {patientsData.espera.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {patientsData.espera.map((item) => (
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
                              {patientsData.consulta.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {patientsData.consulta.map((item) => (
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
                              {patientsData.atendido.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {patientsData.atendido.map((item) => (
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
                        <span>Flujo de admisión en vivo sin demoras</span>
                        <span className="font-bold text-primary">Sincronización instantánea</span>
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
                      {/* Selector de Consultorio Activo */}
                      <div className="bg-background-light p-2.5 rounded-2xl border border-gray-200/80">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1">
                            <Building2 size={12} className="text-accent" />
                            Consultorio y Sede Activa
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

                      {/* Ficha Paciente + Línea de Tiempo */}
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-accent/10 border border-accent/20 text-xs">
                        <div>
                          <span className="font-bold text-primary">Paciente: Marta Rodríguez (68a)</span>
                          <span className="text-text-muted ml-2">· PAMI · HTA Crónica</span>
                        </div>
                        <span className="font-bold text-accent hidden sm:inline">HCE #00492</span>
                      </div>

                      {/* Línea de tiempo de evoluciones */}
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
                    Simulación interactiva oficial de <strong className="text-primary font-semibold">TempusCare</strong>
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
      </section>
    </div>
  );
}
