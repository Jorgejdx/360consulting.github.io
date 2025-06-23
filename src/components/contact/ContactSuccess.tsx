import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { ContactSuccessProps } from '@/entities/Contact';

const ContactSuccess: React.FC<ContactSuccessProps> = ({ onBackToHome, onSendAnother }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <Card className="max-w-md w-full shadow-xl border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />
          </div>
          <h2 className="font-poppins text-2xl font-bold text-primary mb-4">
            ¡Mensaje enviado!
          </h2>
          <p className="font-lato text-gray-600 mb-6 leading-relaxed">
            Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo 
            en las próximas 24 horas para agendar tu consulta gratuita.
          </p>
          <div className="space-y-3">
            <Button 
              onClick={onBackToHome}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Volver al inicio
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onSendAnother}
            >
              Enviar otro mensaje
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSuccess; 