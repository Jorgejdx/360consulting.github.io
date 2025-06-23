import React from 'react';
import { 
  FileCheck, 
  Microscope, 
  Shield, 
  GraduationCap 
} from 'lucide-react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import IndustriesSection from '@/components/services/IndustriesSection';
import ProcessSection from '@/components/services/ProcessSection';
import ServicesCTA from '@/components/services/ServicesCTA';
import { 
  Service, 
  Industry, 
  ProcessStep 
} from '@/entities/Services';

// Datos de servicios
const services: Service[] = [
  {
    icon: FileCheck,
    title: "Registro Sanitario",
    subtitle: "Trámites y Gestión Regulatoria",
    description: "Gestión integral de trámites para registro sanitario de alimentos, cosméticos, productos químicos y dispositivos médicos ante DIGESA y otras entidades regulatorias.",
    features: [
      "Análisis de requisitos normativos",
      "Preparación de expedientes técnicos",
      "Seguimiento de trámites ante DIGESA",
      "Renovaciones y modificaciones",
      "Consultoría en etiquetado",
      "Análisis de factibilidad regulatoria"
    ],
    duration: "45-90 días",
    experience: "150+ registros exitosos",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    icon: Microscope,
    title: "I+D de Producto",
    subtitle: "Investigación y Desarrollo",
    description: "Desarrollo e innovación de productos con base científica, estudios de estabilidad, formulación y optimización de procesos productivos.",
    features: [
      "Desarrollo de formulaciones",
      "Estudios de estabilidad",
      "Optimización de procesos",
      "Análisis fisicoquímicos",
      "Estudios de vida útil",
      "Escalamiento industrial"
    ],
    duration: "2-6 meses",
    experience: "80+ productos desarrollados",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    icon: Shield,
    title: "Auditorías HACCP",
    subtitle: "Sistema de Análisis de Peligros",
    description: "Implementación y auditoría de sistemas HACCP, BPM, POES y otros sistemas de gestión de inocuidad alimentaria.",
    features: [
      "Diagnóstico de sistemas actuales",
      "Implementación de HACCP",
      "Validación de puntos críticos",
      "Capacitación del personal",
      "Auditorías internas",
      "Preparación para certificaciones"
    ],
    duration: "3-4 meses",
    experience: "95% de éxito en auditorías",
    color: "bg-green-50 text-green-600 border-green-200"
  },
  {
    icon: GraduationCap,
    title: "Capacitación & Compliance",
    subtitle: "Formación Especializada",
    description: "Programas de formación especializada y aseguramiento del cumplimiento normativo para equipos técnicos y directivos.",
    features: [
      "Capacitación en normativa vigente",
      "Talleres de BPM y HACCP",
      "Seminarios especializados",
      "Evaluación de competencias",
      "Certificación interna",
      "Seguimiento post-capacitación"
    ],
    duration: "1-2 meses",
    experience: "500+ profesionales capacitados",
    color: "bg-orange-50 text-orange-600 border-orange-200"
  }
];

// Datos de industrias
const industries: Industry[] = [
  { name: "Industria Alimentaria", icon: "🥘" },
  { name: "Sector Farmacéutico", icon: "💊" },
  { name: "Productos Químicos", icon: "🧪" },
  { name: "Cosméticos y Cuidado Personal", icon: "💄" },
  { name: "Dispositivos Médicos", icon: "🏥" },
  { name: "Suplementos Nutricionales", icon: "💪" }
];

// Datos del proceso
const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consulta Inicial",
    description: "Analizamos tu situación actual, objetivos y requisitos específicos para diseñar la mejor estrategia."
  },
  {
    step: "02", 
    title: "Propuesta Personalizada",
    description: "Desarrollamos una propuesta técnica y comercial adaptada a tus necesidades y presupuesto."
  },
  {
    step: "03",
    title: "Ejecución del Proyecto",
    description: "Nuestro equipo especializado ejecuta el proyecto con seguimiento constante y comunicación transparente."
  },
  {
    step: "04",
    title: "Entrega y Seguimiento",
    description: "Entregamos los resultados y brindamos soporte continuo para asegurar el éxito a largo plazo."
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServicesHero 
        title="Soluciones Integrales para tu Cumplimiento Regulatorio"
        subtitle="Ofrecemos servicios especializados de consultoría que abarcan desde el registro sanitario hasta el desarrollo de productos innovadores, siempre con el más alto estándar de calidad."
        badgeText="Servicios Especializados"
        ctaText="Solicita una consulta"
        ctaLink="/contact"
      />

      {/* Services Grid */}
      <ServicesGrid services={services} />

      {/* Industries Section */}
      <IndustriesSection 
        industries={industries}
        title="Industrias que Atendemos"
        subtitle="Nuestra experiencia abarca múltiples sectores industriales, adaptándonos a las necesidades específicas de cada industria."
        badgeText="Sectores de Especialización"
      />

      {/* Process Section */}
      <ProcessSection 
        steps={processSteps}
        title="Cómo Trabajamos Contigo"
        badgeText="Nuestro Proceso"
      />

      {/* CTA Section */}
      <ServicesCTA 
        title="¿Necesitas asesoría especializada?"
        subtitle="Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos regulatorios y de innovación."
        ctaText="Solicitar consulta gratuita"
        ctaLink="/contact"
      />
    </div>
  );
};

export default Services; 