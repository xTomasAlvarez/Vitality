import React from 'react';
import Navbar from './shared/ui/Navbar';
import Footer from './shared/ui/Footer';
import Hero from './features/hero/Hero';
import Nosotros from './features/about/Nosotros';
import MisionVision from './features/about/MisionVision';
import Valores from './features/about/Valores';

import Producto from './features/product/Producto';
import Diferenciales from './features/product/Diferenciales';
import ComoTrabajamos from './features/workflow/ComoTrabajamos';
import Estadisticas from './features/workflow/Estadisticas';
import Testimonios from './features/testimonials/Testimonios';
import CTAFinal from './features/contact/CTAFinal';
import Contacto from './features/contact/Contacto';

function App() {
  return (
    <div className="font-sans text-text-main bg-background-light selection:bg-accent selection:text-white">
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

        <Testimonios />
        <CTAFinal />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
