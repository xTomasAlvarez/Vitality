import React, { useEffect, useState, useRef } from 'react';
import { ESTADISTICAS } from '../../shared/data/data';

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    let observer;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          frameId = window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
}

export default function Estadisticas() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {ESTADISTICAS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-4 flex items-baseline">
                <AnimatedCounter end={stat.valor} />
                <span className="text-accent">{stat.sufijo}</span>
              </div>
              <p className="text-blue-100 font-medium max-w-xs">{stat.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
