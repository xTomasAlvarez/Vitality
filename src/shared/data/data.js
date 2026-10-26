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

export const TESTIMONIOS = [
  {
    nombre: 'Dra. María Fernández',
    rol: 'Médica Clínica · Barrio Norte, SMT',
    texto: 'TempusCare redujo nuestro tiempo administrativo a la mitad. El tablero Kanban de recepción y la agenda multi-institucional son fundamentales.',
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
