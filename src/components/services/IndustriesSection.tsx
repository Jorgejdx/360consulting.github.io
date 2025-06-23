import React from 'react';
import { Badge } from '@/components/ui/badge';
import IndustryCard from './IndustryCard';
import { IndustriesSectionProps } from '@/entities/Services';

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  industries, 
  title, 
  subtitle, 
  badgeText 
}) => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="industries-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary font-medium px-4 py-2 mb-6">
            {badgeText}
          </Badge>
          <h2 
            id="industries-heading" 
            className="font-poppins text-3xl lg:text-5xl font-bold text-primary mb-6"
          >
            {title}
          </h2>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection; 