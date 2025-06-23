import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ServicesHeroProps } from '@/entities/Services';

const ServicesHero: React.FC<ServicesHeroProps> = ({ 
  title, 
  subtitle, 
  badgeText, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <section className="gradient-hero text-white py-20 lg:py-32" aria-labelledby="services-hero-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-accent text-black font-medium px-4 py-2 mb-6">
            {badgeText}
          </Badge>
          <h1 
            id="services-hero-heading" 
            className="font-poppins text-4xl lg:text-6xl font-bold mb-6"
          >
            {title}
          </h1>
          <p className="font-lato text-xl text-gray-200 leading-relaxed mb-8">
            {subtitle}
          </p>
          <Link to={ctaLink} aria-label={ctaText}>
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 h-auto">
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero; 