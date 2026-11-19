import React, { useEffect, useState, useRef } from 'react';
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

// Páginas informativas independientes
import PoliticaPrivacidad from './features/legal/PoliticaPrivacidad';
import TerminosCondiciones from './features/legal/TerminosCondiciones';
import CumplimientoLey26529 from './features/legal/CumplimientoLey26529';
import RedesSociales from './features/legal/RedesSociales';

function getRouteFromHash(hash) {
  if (!hash) return 'home';
  const h = hash.toLowerCase();
  if (h.includes('privacidad')) return 'privacidad';
  if (h.includes('terminos')) return 'terminos';
  if (h.includes('ley-26529') || h.includes('ley26529') || h.includes('26529')) return 'ley-26529';
  if (h.includes('redes') || h.includes('sociales')) return 'redes';
  return 'home';
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => getRouteFromHash(window.location.hash));
  const lenisRef = useRef(null);

  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('reduce-motion') ||
             document.documentElement.classList.contains('pause-animations');
    }
    return false;
  });

  // Función robusta de scroll hacia anclas o formulario
  const scrollToHash = (rawHash) => {
    if (!rawHash || rawHash === '#' || rawHash === '#inicio' || rawHash.startsWith('#/')) {
      if (lenisRef.current) {
        lenisRef.current.resize();
        lenisRef.current.scrollTo(0, { immediate: false, duration: 0.8 });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Para contacto, preferimos apuntar al formulario directamente
    let selector = rawHash;
    if (rawHash === '#contacto') {
      selector = '#formulario-contacto, #contacto';
    }

    let attempts = 0;
    const tryScroll = () => {
      attempts++;
      const target = document.querySelector(selector) || document.querySelector(rawHash);
      if (target) {
        if (lenisRef.current) {
          lenisRef.current.resize();
          lenisRef.current.scrollTo(target, { offset: -90, duration: 1.2 });
        } else {
          const yOffset = -90;
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }

        // Si es el formulario de contacto, hacer foco en el primer campo
        if (rawHash.includes('contacto')) {
          setTimeout(() => {
            const input = document.getElementById('nombre');
            if (input) {
              input.focus({ preventScroll: true });
            }
          }, 350);
        }
      } else if (attempts < 15) {
        setTimeout(tryScroll, 40);
      }
    };

    setTimeout(tryScroll, 30);
  };

  // Enrutamiento ligero basado en hash y eventos personalizados
  useEffect(() => {
    const handleRouteTransition = (targetHash) => {
      const hash = targetHash || window.location.hash;
      const newRoute = getRouteFromHash(hash);
      setCurrentRoute(newRoute);

      if (newRoute === 'home') {
        scrollToHash(hash);
      } else {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
      }
    };

    const handleHashChange = () => {
      handleRouteTransition(window.location.hash);
    };

    const handleCustomScroll = (e) => {
      const hash = e.detail?.hash || window.location.hash;
      handleRouteTransition(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('vitality:scroll-to', handleCustomScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('vitality:scroll-to', handleCustomScroll);
    };
  }, []);

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
      lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isReducedMotion]);

  return (
    <MotionConfig reducedMotion={isReducedMotion ? 'always' : 'never'}>
      <div className="font-sans text-text-main bg-background-light selection:bg-accent selection:text-white min-h-screen flex flex-col justify-between">
        <Navbar currentRoute={currentRoute} />

        <div className="flex-1">
          {currentRoute === 'privacidad' && <PoliticaPrivacidad />}
          {currentRoute === 'terminos' && <TerminosCondiciones />}
          {currentRoute === 'ley-26529' && <CumplimientoLey26529 />}
          {currentRoute === 'redes' && <RedesSociales />}

          {currentRoute === 'home' && (
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
              <CTAFinal />
              <Contacto />
            </main>
          )}
        </div>

        <Footer />
        <AccessibilityWidget onPauseAnimationsChange={(paused) => setIsReducedMotion(paused)} />
      </div>
    </MotionConfig>
  );
}

export default App;
