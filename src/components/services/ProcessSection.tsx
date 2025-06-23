import React from 'react';
import { Badge } from '@/components/ui/badge';
import ProcessStepCard from './ProcessStepCard';
import { ProcessSectionProps } from '@/entities/Services';

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps, title, badgeText }) => {
  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="process-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-black font-medium px-4 py-2 mb-6">
            {badgeText}
          </Badge>
          <h2 
            id="process-heading" 
            className="font-poppins text-3xl lg:text-5xl font-bold text-primary mb-6"
          >
            {title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <ProcessStepCard key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 