import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.02, rootMargin: '0px 0px -20px 0px' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial base class for styling
    if (!element.classList.contains('reveal')) {
      element.classList.add('reveal');
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed
          obs.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return ref;
}
