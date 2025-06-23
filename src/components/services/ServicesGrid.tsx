import React from 'react';
import ServiceCard from './ServiceCard';
import { ServicesGridProps } from '@/entities/Services';

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <section className="py-20 lg:py-32" aria-labelledby="services-grid-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid; 