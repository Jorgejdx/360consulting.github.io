import React from 'react';
import { Clock, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceCardProps } from '@/entities/Services';

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <Card className="card-hover border-0 shadow-xl h-full transition-all duration-300 hover:shadow-2xl">
      <CardHeader className="p-8">
        <div className="flex items-start space-x-4">
          <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="w-8 h-8" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <CardTitle className="font-poppins text-2xl text-primary mb-2">
              {service.title}
            </CardTitle>
            <p className="font-lato text-secondary font-medium">
              {service.subtitle}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <p className="font-lato text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-poppins font-semibold text-primary mb-3">
              Lo que incluye:
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle 
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" 
                    aria-hidden="true" 
                  />
                  <span className="font-lato text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <span className="font-lato text-sm text-gray-600">{service.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <span className="font-lato text-sm text-gray-600">{service.experience}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard; 