import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProcessStepCardProps } from '@/entities/Services';

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step }) => {
  return (
    <Card className="border-l-4 border-secondary shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-start space-x-6">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="font-poppins font-bold text-black">{step.step}</span>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
              {step.title}
            </h3>
            <p className="font-lato text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessStepCard; 