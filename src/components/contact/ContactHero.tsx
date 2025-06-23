import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ContactHeroProps } from '@/entities/Contact';

const ContactHero: React.FC<ContactHeroProps> = ({ title, subtitle, badgeText }) => {
  return (
    <section className="gradient-hero text-white py-20" aria-labelledby="contact-hero-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-accent text-black font-medium px-4 py-2 mb-6">
            {badgeText}
          </Badge>
          <h1 
            id="contact-hero-heading" 
            className="font-poppins text-4xl lg:text-5xl font-bold mb-6"
          >
            {title}
          </h1>
          <p className="font-lato text-xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero; 