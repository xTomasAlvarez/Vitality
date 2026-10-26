import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Accessibility,
  Contrast,
  Type,
  PauseCircle,
  RotateCcw,
  X,
  Check
} from 'lucide-react';

const FONT_SCALES = [100, 115, 130];

export default function AccessibilityWidget({ onPauseAnimationsChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [pauseAnimations, setPauseAnimations] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  useEffect(() => {
    const root = document.documentElement;
    if (pauseAnimations) {
      root.classList.add('pause-animations');
    } else {
      root.classList.remove('pause-animations');
    }
    if (onPauseAnimationsChange) {
      onPauseAnimationsChange(pauseAnimations);
    }
  }, [pauseAnimations, onPauseAnimationsChange]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleReset = () => {
    setHighContrast(false);
    setFontScale(100);
    setPauseAnimations(false);
  };

  const hasActiveCustomizations = highContrast || fontScale !== 100 || pauseAnimations;

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            role="dialog"
            aria-label="Panel de Accesibilidad en Vivo"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hc-card mb-3 w-80 sm:w-88 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-5 text-text-main"
          >
            {/* Cabecera del Widget */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <Accessibility size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-primary leading-tight">
                    Accesibilidad en Vivo
                  </h3>
                  <p className="text-[11px] text-text-muted">
                    Estándar TempusCare WCAG AAA
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-text-muted hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Cerrar panel de accesibilidad"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {/* 1. Modo Alto Contraste */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-background-light border border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <Contrast size={18} className="text-accent shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-primary">Modo Alto Contraste</p>
                    <p className="text-[11px] text-text-muted">Contraste extremo AAA</p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={highContrast}
                  onClick={() => setHighContrast(!highContrast)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    highContrast
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-primary border-gray-300 hover:border-accent'
                  }`}
                >
                  {highContrast ? 'Activo ✓' : 'Activar'}
                </button>
              </div>

              {/* 2. Escala Tipográfica (100%, 115%, 130%) */}
              <div className="p-3 rounded-2xl bg-background-light border border-gray-200/80">
                <div className="flex items-center gap-2 mb-2.5">
                  <Type size={17} className="text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">
                    Escala Tipográfica ({fontScale}%)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {FONT_SCALES.map((scale) => {
                    const active = fontScale === scale;
                    return (
                      <button
                        key={scale}
                        type="button"
                        onClick={() => setFontScale(scale)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-1 ${
                          active
                            ? 'bg-primary text-white border-primary shadow-xs'
                            : 'bg-white text-text-main border-gray-200 hover:border-accent'
                        }`}
                      >
                        {active && <Check size={12} />}
                        <span>{scale}%</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Pausar Animaciones */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-background-light border border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <PauseCircle size={18} className="text-accent shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-primary">Pausar Animaciones</p>
                    <p className="text-[11px] text-text-muted">Movimiento reducido</p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={pauseAnimations}
                  onClick={() => setPauseAnimations(!pauseAnimations)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    pauseAnimations
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-primary border-gray-300 hover:border-accent'
                  }`}
                >
                  {pauseAnimations ? 'Pausadas ✓' : 'Pausar'}
                </button>
              </div>
            </div>

            {/* Pie del widget: Restablecer */}
            <div className="mt-4 pt-3 border-t border-gray-200/80 flex items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                disabled={!hasActiveCustomizations}
                className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer ${
                  hasActiveCustomizations
                    ? 'text-primary hover:text-accent'
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                <RotateCcw size={13} />
                <span>Restablecer valores</span>
              </button>
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Vitality A11y
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante Principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="Opciones de Accesibilidad en Vivo"
        className="bg-primary hover:bg-secondary text-white px-4 py-3 rounded-full shadow-xl border-2 border-white/90 flex items-center gap-2.5 transition-all duration-200 hover:scale-105 cursor-pointer group"
      >
        <Accessibility size={20} className="text-accent-light group-hover:rotate-12 transition-transform" />
        <span className="font-heading font-bold text-xs sm:text-sm">Accesibilidad</span>
        {hasActiveCustomizations && (
          <span className="w-2.5 h-2.5 rounded-full bg-accent-light ring-2 ring-white" title="Ajustes activos" />
        )}
      </button>
    </div>
  );
}
