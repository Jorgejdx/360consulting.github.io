import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactSuccess from '@/components/contact/ContactSuccess';
import { 
  ContactFormData, 
  ContactFormErrors, 
  ServiceOption, 
  ContactInfo as ContactInfoType 
} from '@/entities/Contact';

// Datos de servicios disponibles
const services: ServiceOption[] = [
  { value: "registro_sanitario", label: "Registro Sanitario" },
  { value: "id_producto", label: "I+D de Producto" },
  { value: "auditorias_haccp", label: "Auditorías HACCP" },
  { value: "capacitacion_compliance", label: "Capacitación & Compliance" },
  { value: "otro", label: "Otro servicio" }
];

// Información de contacto
const contactInfo: ContactInfoType = {
  email: "info@id360consulting.pe",
  phone: "+51 999 999 999",
  location: "Lima, Perú",
  hours: {
    weekdays: "Lun - Vie: 9:00 AM - 6:00 PM",
    saturday: "Sáb: 9:00 AM - 1:00 PM"
  }
};

// Estado inicial del formulario
const initialFormData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  // Manejar cambios en el formulario
  const handleFormDataChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo si existe
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Validar formulario
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "La empresa es requerida";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    
    if (!formData.service) {
      newErrors.service = "Selecciona un servicio";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Aquí iría la lógica real de envío
      // await Lead.create(formData);
      
      // Simular envío exitoso
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Manejar navegación al inicio
  const handleBackToHome = () => {
    navigate('/');
  };

  // Manejar envío de otro mensaje
  const handleSendAnother = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  // Mostrar pantalla de éxito
  if (submitted) {
    return (
      <ContactSuccess 
        onBackToHome={handleBackToHome}
        onSendAnother={handleSendAnother}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ContactHero 
        title="Solicita tu Diagnóstico Gratuito"
        subtitle="Cuéntanos sobre tu proyecto y nuestro equipo de expertos te ayudará a encontrar la mejor solución para tus necesidades."
        badgeText="Contacto"
      />

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                services={services}
                onFormDataChange={handleFormDataChange}
                onSubmit={handleSubmit}
              />
            </div>

            {/* Contact Information */}
            <ContactInfo contactInfo={contactInfo} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 