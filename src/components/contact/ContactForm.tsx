import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';
import { ContactFormProps } from '@/entities/Contact';

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  isSubmitting,
  services,
  onFormDataChange,
  onSubmit
}) => {
  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onFormDataChange(field, e.target.value);
  };

  const handleSelectChange = (value: string) => {
    onFormDataChange('service', value);
  };

  return (
    <Card className="shadow-xl border-0">
      <CardHeader className="p-8">
        <CardTitle className="font-poppins text-2xl text-primary">
          Formulario de Contacto
        </CardTitle>
        <p className="font-lato text-gray-600">
          Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
        </p>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Nombre y Empresa */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-lato font-medium">
                Nombre completo *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder="Tu nombre"
                className={`font-lato ${errors.name ? 'border-red-500' : ''}`}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="font-lato font-medium">
                Empresa *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={handleInputChange('company')}
                placeholder="Nombre de tu empresa"
                className={`font-lato ${errors.company ? 'border-red-500' : ''}`}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />
              {errors.company && (
                <p id="company-error" className="text-sm text-red-600" role="alert">
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          {/* Email y Teléfono */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-lato font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="tu@empresa.com"
                className={`font-lato ${errors.email ? 'border-red-500' : ''}`}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-lato font-medium">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="+51 999 999 999"
                className="font-lato"
              />
            </div>
          </div>

          {/* Servicio */}
          <div className="space-y-2">
            <Label htmlFor="service" className="font-lato font-medium">
              Servicio de interés *
            </Label>
            <Select value={formData.service} onValueChange={handleSelectChange}>
              <SelectTrigger 
                className={`font-lato ${errors.service ? 'border-red-500' : ''}`}
                aria-describedby={errors.service ? 'service-error' : undefined}
              >
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p id="service-error" className="text-sm text-red-600" role="alert">
                {errors.service}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div className="space-y-2">
            <Label htmlFor="message" className="font-lato font-medium">
              Mensaje *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange('message')}
              placeholder="Cuéntanos más sobre tu proyecto, necesidades específicas o cualquier pregunta que tengas..."
              rows={6}
              className={`font-lato ${errors.message ? 'border-red-500' : ''}`}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {/* Botón de envío */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-secondary/90 font-semibold py-3 h-auto"
            aria-describedby={isSubmitting ? 'submitting-status' : undefined}
          >
            {isSubmitting ? (
              <>
                <div 
                  className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" 
                  aria-hidden="true"
                />
                Enviando mensaje...
                <span id="submitting-status" className="sr-only">
                  Enviando formulario, por favor espera...
                </span>
              </>
            ) : (
              <>
                <Send className="mr-2 w-4 h-4" aria-hidden="true" />
                Enviar mensaje
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm; 