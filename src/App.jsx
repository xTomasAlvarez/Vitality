import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';
import Navbar from './shared/ui/Navbar';
import Footer from './shared/ui/Footer';
import AccessibilityWidget from './shared/ui/AccessibilityWidget';
import Hero from './features/hero/Hero';
import Nosotros from './features/about/Nosotros';
import MisionVision from './features/about/MisionVision';
import Valores from './features/about/Valores';
import Equipo from './features/about/Equipo';
import Producto from './features/product/Producto';
import Diferenciales from './features/product/Diferenciales';
import ComoTrabajamos from './features/workflow/ComoTrabajamos';
import Estadisticas from './features/workflow/Estadisticas';
import CTAFinal from './features/contact/CTAFinal';
import Contacto from './features/contact/Contacto';

function App() {
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('reduce-motion') ||
             document.documentElement.classList.contains('pause-animations');
    }
    return false;
  });

  // Escuchar cambios de reduce-motion globales mediante CustomEvent y MutationObserver
  useEffect(() => {
    const handleReduceMotionChange = (e) => {
      const reduced = Boolean(e.detail?.isReducedMotion);
      setIsReducedMotion(reduced);
    };

    window.addEventListener('vitality:reduce-motion', handleReduceMotionChange);

    // MutationObserver sobre html para sincronización de clase reduce-motion / pause-animations
    const observer = new MutationObserver(() => {
      const hasClass = document.documentElement.classList.contains('reduce-motion') ||
                       document.documentElement.classList.contains('pause-animations');
      setIsReducedMotion((prev) => (prev !== hasClass ? hasClass : prev));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('vitality:reduce-motion', handleReduceMotionChange);
      observer.disconnect();
    };
  }, []);

  // Smooth scroll de Lenis: se desactiva/destruye inmediatamente si reduce-motion está activo
  useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isReducedMotion]);

  return (
    <MotionConfig reducedMotion={isReducedMotion ? 'always' : 'never'}>
      <div className="font-sans text-text-main bg-background-light selection:bg-accent selection:text-white min-h-screen">
        <Navbar />

        <main>
          <Hero />
          <Nosotros />
          <MisionVision />
          <Valores />
          <Producto />
          <Diferenciales />
          <ComoTrabajamos />
          <Estadisticas />
          <Equipo />
          {/* Testimonios eliminado por requerimiento */}
          <CTAFinal />
          <Contacto />
        </main>

        <Footer />
        <AccessibilityWidget onPauseAnimationsChange={(paused) => setIsReducedMotion(paused)} />
      </div>
    </MotionConfig>
  );
}

export default App;
