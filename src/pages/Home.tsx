import React, { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection, { Service } from "@/components/home/ServicesSection";
import MethodologySection, { MethodologyStep } from "@/components/home/MethodologySection";
import TestimonialsSection, { Testimonial } from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { FileCheck, Microscope, Shield, GraduationCap } from "lucide-react";
import { UserEntity } from "@/entities/user";

// Datos
const services: Service[] = [
  { icon: FileCheck, title: "Registro Sanitario", description: "Gestión integral de trámites para registro sanitario de alimentos, cosméticos y productos químicos.", color: "bg-blue-50 text-blue-600" },
  { icon: Microscope, title: "I+D de Producto", description: "Desarrollo e innovación de productos con base científica y estudios de estabilidad.", color: "bg-purple-50 text-purple-600" },
  { icon: Shield, title: "Auditorías HACCP", description: "Implementación y auditoría de sistemas de análisis de peligros y puntos críticos de control.", color: "bg-green-50 text-green-600" },
  { icon: GraduationCap, title: "Capacitación & Compliance", description: "Programas de formación especializada y aseguramiento del cumplimiento normativo.", color: "bg-orange-50 text-orange-600" }
];

const methodology: MethodologyStep[] = [
  { step: "01", title: "Diagnóstico", description: "Evaluamos tu situación actual y identificamos oportunidades de mejora." },
  { step: "02", title: "Plan Estratégico", description: "Diseñamos una hoja de ruta personalizada con objetivos claros y medibles." },
  { step: "03", title: "Ejecución", description: "Implementamos las soluciones con nuestro equipo de expertos especializados." },
  { step: "04", title: "Acompañamiento", description: "Te acompañamos en el proceso para asegurar el éxito sostenible." }
];

const testimonials: Testimonial[] = [
  { name: "María González", company: "AlimentosPeru SAC", text: "ID360 nos ayudó a obtener nuestro registro sanitario en tiempo récord. Su expertise y acompañamiento fueron fundamentales.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
  { name: "Carlos Mendoza", company: "BioTech Innovation", text: "El equipo de I+D nos permitió desarrollar un producto revolucionario con todas las certificaciones necesarias.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { name: "Ana Ruiz", company: "FoodSafe Corp", text: "La implementación de HACCP fue impecable. Ahora tenemos procesos más seguros y eficientes.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" }
];

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePortalAccess = async () => {
    try {
      await UserEntity.login();
    } catch (error) {
      alert("Error al intentar acceder al portal. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <HeroSection onPortalAccess={handlePortalAccess} />
      <ServicesSection services={services} />
      <MethodologySection methodology={methodology} />
      <TestimonialsSection testimonials={testimonials} current={currentTestimonial} setCurrent={setCurrentTestimonial} />
      <CtaSection />
    </div>
  );
};

export default Home; 