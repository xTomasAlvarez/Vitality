import { Activity, Users, Shield, MessagesSquare, HeartHandshake, Zap, Target } from 'lucide-react';

export const VALORES_CUIDADO = [
  {
    letra: 'C',
    titulo: 'Calidad',
    descripcion: 'Excelencia en rendimiento, operatividad y mejora continua.',
    Icon: Activity
  },
  {
    letra: 'U',
    titulo: 'Unión',
    descripcion: 'Trabajo integrado entre equipos, profesionales y pacientes.',
    Icon: Users
  },
  {
    letra: 'I',
    titulo: 'Inclusión',
    descripcion: 'Respeto y aceptación de la diversidad humana, dentro y fuera de la organización.',
    Icon: Shield
  },
  {
    letra: 'D',
    titulo: 'Diálogo',
    descripcion: 'Comunicación abierta con clientes y equipo.',
    Icon: MessagesSquare
  },
  {
    letra: 'A',
    titulo: 'Apoyo',
    descripcion: 'Compromiso de ayudar a resolver un problema real de la sociedad.',
    Icon: HeartHandshake
  },
  {
    letra: 'D',
    titulo: 'Dedicación',
    descripcion: 'Esfuerzo constante para mejorar la experiencia de salud.',
    Icon: Zap
  },
  {
    letra: 'O',
    titulo: 'Orientación',
    descripcion: 'Foco constante en las necesidades del cliente y el paciente.',
    Icon: Target
  }
];

export const ESTADISTICAS = [
  { valor: 15, sufijo: '%', descripcion: 'Meta de consultorios de Tucumán integrados (1er año)' },
  { valor: 70, sufijo: '%', descripcion: 'Turnos gestionados de forma autónoma' },
  { valor: 100, sufijo: '%', descripcion: 'Compromiso de accesibilidad real' },
  { valor: 2027, sufijo: '', descripcion: 'Historia clínica interprovincial operativa' }
];

export const TESTIMONIOS = [
  {
    nombre: 'Dra. María Fernández',
    rol: 'Médica Clínica',
    texto: 'TempusCare ha reducido nuestro tiempo administrativo a la mitad. La agenda compartida es fundamental.',
    estrellas: 5,
  },
  {
    nombre: 'Consultorio Piloto',
    rol: 'Centro Integral',
    texto: 'La accesibilidad de la plataforma permitió que todos nuestros pacientes soliciten turnos sin barreras.',
    estrellas: 5,
  },
  {
    nombre: 'Dr. Roberto Sánchez',
    rol: 'Cardiólogo',
    texto: 'Por primera vez siento que la tecnología nos acerca al paciente en lugar de ser una barrera burocrática.',
    estrellas: 5,
  }
];
