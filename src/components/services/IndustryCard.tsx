import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IndustryCardProps } from '@/entities/Services';

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <Card className="card-hover border-0 shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardContent className="p-8 text-center">
        <div className="text-4xl mb-4" role="img" aria-label={industry.name}>
          {industry.icon}
        </div>
        <h3 className="font-poppins font-semibold text-lg text-primary">
          {industry.name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default IndustryCard; 