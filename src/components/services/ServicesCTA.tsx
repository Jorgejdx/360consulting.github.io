import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServicesCTAProps } from '@/entities/Services';

const ServicesCTA: React.FC<ServicesCTAProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="py-20 lg:py-32 gradient-hero text-white" aria-labelledby="services-cta-heading">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 
            id="services-cta-heading" 
            className="font-poppins text-3xl lg:text-5xl font-bold leading-tight"
          >
            {title}
          </h2>
          <p className="font-lato text-xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ctaLink} aria-label={ctaText}>
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 h-auto">
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA; 