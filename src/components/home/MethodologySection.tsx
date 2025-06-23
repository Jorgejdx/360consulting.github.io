import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap } from "lucide-react";

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

interface MethodologySectionProps {
  methodology: MethodologyStep[];
}

const MethodologySection: React.FC<MethodologySectionProps> = ({ methodology }) => (
  <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="methodology-heading">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="bg-primary/10 text-primary font-medium px-4 py-2 mb-6">
          Nuestra Metodología
        </Badge>
        <h2 id="methodology-heading" className="font-poppins text-3xl lg:text-5xl font-bold text-primary mb-6">
          Proceso Probado de Éxito
        </h2>
        <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Un enfoque estructurado que garantiza resultados excepcionales en cada proyecto.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {methodology.map((step, index) => (
          <div key={index} className="relative">
            <Card className="card-hover border-0 shadow-md h-full bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-poppins font-bold text-2xl text-black">{step.step}</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-4">
                  {step.title}
                </h3>
                <p className="font-lato text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            {index < methodology.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0 border-t-2 border-dashed border-secondary transform -translate-y-1/2 z-10" aria-hidden="true"></div>
            )}
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <div className="font-poppins text-4xl font-bold text-primary mb-2">95%</div>
          <div className="font-lato text-gray-600">Expedientes aprobados en 1ª revisión</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-black" aria-hidden="true" />
          </div>
          <div className="font-poppins text-4xl font-bold text-primary mb-2">150+</div>
          <div className="font-lato text-gray-600">Empresas confiaron en nosotros</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <div className="font-poppins text-4xl font-bold text-primary mb-2">5+</div>
          <div className="font-lato text-gray-600">Años de experiencia especializada</div>
        </div>
      </div>
    </div>
  </section>
);

export default MethodologySection; 