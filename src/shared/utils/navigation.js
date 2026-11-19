/**
 * Utilidad de navegación con soporte para hash routing, Lenis smooth scroll y reconexión entre páginas.
 */
export function navigateTo(targetHash) {
  if (typeof window === 'undefined') return;

  const currentHash = window.location.hash;

  if (currentHash === targetHash) {
    // Si ya estamos en el mismo hash, el navegador no disparará hashchange
    window.dispatchEvent(new CustomEvent('vitality:scroll-to', { detail: { hash: targetHash } }));
  } else {
    window.location.hash = targetHash;
    // Disparamos también por seguridad para sincronización instantánea
    window.dispatchEvent(new CustomEvent('vitality:scroll-to', { detail: { hash: targetHash } }));
  }
}
