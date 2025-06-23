import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle 
} from 'lucide-react';
import { ContactInfoProps } from '@/entities/Contact';

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  const benefits = [
    "95% de expedientes aprobados en primera revisión",
    "Más de 5 años de experiencia especializada",
    "Equipo multidisciplinario de expertos",
    "Acompañamiento personalizado"
  ];

  return (
    <div className="space-y-8">
      {/* Información de contacto */}
      <Card className="shadow-xl border-0">
        <CardHeader className="p-6">
          <CardTitle className="font-poppins text-xl text-primary">
            Información de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-secondary" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-1">Email</h4>
              <p className="font-lato text-gray-600">{contactInfo.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-black" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-1">Teléfono</h4>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">+51981596726</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-1">Ubicación</h4>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">San Isidro, Perú</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-green-600" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-1">Horarios</h4>
              <p className="font-lato text-gray-600">
                {contactInfo.hours.weekdays}<br />
                {contactInfo.hours.saturday}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beneficios */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-secondary/5 to-accent/5">
        <CardContent className="p-6">
          <h3 className="font-poppins font-semibold text-lg text-primary mb-4">
            ¿Por qué elegirnos?
          </h3>
          <ul className="space-y-3 font-lato text-gray-600">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle 
                  className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" 
                  aria-hidden="true" 
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo; 