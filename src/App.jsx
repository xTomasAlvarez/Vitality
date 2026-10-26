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
import Testimonios from './features/testimonials/Testimonios';
import CTAFinal from './features/contact/CTAFinal';
import Contacto from './features/contact/Contacto';

function App() {
  const [pauseAnimations, setPauseAnimations] = useState(false);

  useEffect(() => {
    if (pauseAnimations) {
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
  }, [pauseAnimations]);

  return (
    <MotionConfig reducedMotion={pauseAnimations ? 'always' : 'user'}>
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
          <Testimonios />
          <CTAFinal />
          <Contacto />
        </main>

        <Footer />
        <AccessibilityWidget onPauseAnimationsChange={setPauseAnimations} />
      </div>
    </MotionConfig>
  );
}

export default App;
