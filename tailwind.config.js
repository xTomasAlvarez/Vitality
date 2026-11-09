/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4B8C',
        secondary: '#0F5DAA',
        accent: {
          DEFAULT: '#2CB5AE',
          light: '#4FD1C9',
          dark: '#1E8E88',
        },
        background: {
          // =========================================================
          // MODO DE PRUEBA TEMPORAL: FONDO GRIS
          // (Valores originales respaldados para revertir:
          //  light: '#F5F8FA', darker: '#EEF3F6')
          // =========================================================
          light: '#D1D5DB', // Gris medio de prueba (Tailwind gray-300)
          darker: '#C5CAD3', // Gris ligeramente más oscuro
        },
        text: {
          main: '#111827',
          muted: '#5B6B76',
        }
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', '"DM Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
