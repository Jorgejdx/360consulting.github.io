import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => (
  <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="bg-secondary/10 text-secondary font-medium px-4 py-2 mb-6">
          Nuestros Servicios
        </Badge>
        <h2 id="services-heading" className="font-poppins text-3xl lg:text-5xl font-bold text-primary mb-6">
          Soluciones Integrales de Consultoría
        </h2>
        <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos un enfoque 360° para llevar tu empresa al siguiente nivel de cumplimiento y competitividad.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="card-hover border-0 shadow-lg h-full">
            <CardContent className="p-8 text-center">
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mx-auto mb-6`}>
                <service.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-4">
                {service.title}
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/services" aria-label="Ver todos los servicios">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold px-8 py-4 h-auto">
            Ver todos los servicios
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection; 