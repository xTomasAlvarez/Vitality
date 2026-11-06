import { Activity, Users, Shield, MessagesSquare, HeartHandshake, Zap, Target } from 'lucide-react';

export const TEMPUSCARE_URL = import.meta.env.VITE_TEMPUSCARE_URL || "http://localhost:5173";

export const VALORES_CUIDADO = [
  {
    letra: 'C',
    titulo: 'Calidad',
    descripcion: 'Excelencia en rendimiento, operatividad clínica y mejora continua en cada módulo.',
    Icon: Activity
  },
  {
    letra: 'U',
    titulo: 'Unión',
    descripcion: 'Trabajo integrado entre equipos de secretaría, profesionales médicos y pacientes.',
    Icon: Users
  },
  {
    letra: 'I',
    titulo: 'Inclusión',
    descripcion: 'Respeto y aceptación de la diversidad humana, con accesibilidad nativa sin barreras.',
    Icon: Shield
  },
  {
    letra: 'D',
    titulo: 'Diálogo',
    descripcion: 'Comunicación abierta y transparente con consultorios, instituciones y nuestro equipo.',
    Icon: MessagesSquare
  },
  {
    letra: 'A',
    titulo: 'Apoyo',
    descripcion: 'Compromiso real de resolver la fragmentación de turnos en la sociedad tucumana.',
    Icon: HeartHandshake
  },
  {
    letra: 'D',
    titulo: 'Dedicación',
    descripcion: 'Esfuerzo constante para transformar y humanizar la experiencia de salud privada.',
    Icon: Zap
  },
  {
    letra: 'O',
    titulo: 'Orientación',
    descripcion: 'Foco absoluto en las necesidades reales del paciente y del profesional de salud.',
    Icon: Target
  }
];

export const ESTADISTICAS = [
  { valor: 15, sufijo: '%', descripcion: 'Meta de consultorios de Tucumán integrados (1er año)' },
  { valor: 70, sufijo: '%', descripcion: 'Turnos gestionados de forma autónoma 24/7' },
  { valor: 100, sufijo: '%', descripcion: 'Compromiso de accesibilidad real (WCAG AAA)' },
  { valor: 2027, sufijo: '', descripcion: 'Historia clínica interprovincial operativa' }
];

export const EQUIPO_VITALITY = [
  {
    nombre: 'Alvarez Paez, Tomás Agustín',
    rol: 'Co-Fundador & Especialista en Producto y Experiencia Digital',
    presentacion: 'Enfocado en transformar necesidades reales de consultorios y pacientes en soluciones ágiles, intuitivas y accesibles.',
    imagen: '/equipo/tomas-alvarez.jpg',
    iniciales: 'TA',
  },
  {
    nombre: 'Coronel Arrieta, Ana Milena',
    rol: 'Co-Fundadora & Especialista en Gestión Clínica y Procesos',
    presentacion: 'Dedicada a optimizar el flujo de atención entre secretarías, profesionales y pacientes para lograr una experiencia cálida y ordenada.',
    imagen: '/equipo/ana-coronel.jpg',
    iniciales: 'AC',
  },
  {
    nombre: 'Dini Domijan, Francisco',
    rol: 'Co-Fundador & Especialista en Operaciones y Calidad de Servicio',
    presentacion: 'Orientado a garantizar la confiabilidad, seguridad de la información médica y mejora continua de la plataforma.',
    imagen: '/equipo/francisco-dini.jpg',
    iniciales: 'FD',
  },
  {
    nombre: 'Matías, José Augusto',
    rol: 'Co-Fundador & Especialista en Soluciones e Integración en Salud',
    presentacion: 'Comprometido con adaptar la herramienta a la realidad de las obras sociales y clínicas privadas de nuestra región.',
    imagen: '/equipo/jose-matias.jpg',
    iniciales: 'JM',
  },
  {
    nombre: 'Navarro Zavalía, Ángeles María',
    rol: 'Co-Fundadora & Especialista en Accesibilidad y Vínculo con el Usuario',
    presentacion: 'Enfocada en el diseño inclusivo para asegurar que cualquier persona pueda gestionar su salud sin barreras.',
    imagen: '/equipo/angeles-navarro.jpg',
    iniciales: 'AN',
  },
];

export const TESTIMONIOS = [
  {
    nombre: 'Dra. María Fernández',
    rol: 'Médica Clínica · Barrio Norte, SMT',
    texto: 'TempusCare redujo nuestro tiempo administrativo a la mitad. El tablero de recepción en vivo y la agenda multi-institucional son fundamentales.',
    estrellas: 5,
  },
  {
    nombre: 'Centro Médico Yerba Buena',
    rol: 'Policlínico Integral · Tucumán',
    texto: 'La accesibilidad nativa de la plataforma permitió que pacientes mayores y personas con discapacidad visual soliciten turnos sin barreras.',
    estrellas: 5,
  },
  {
    nombre: 'Dr. Roberto Sánchez',
    rol: 'Cardiólogo · Subsidio de Salud / OSDE',
    texto: 'Por primera vez siento que la tecnología nos acerca al paciente con una historia clínica trazable en lugar de ser una barrera burocrática.',
    estrellas: 5,
  }
];
