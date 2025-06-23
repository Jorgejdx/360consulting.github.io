import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onPortalAccess: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPortalAccess }) => (
  <section className="gradient-hero text-white relative" aria-labelledby="hero-heading">
    <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
    <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <Badge className="bg-accent text-black font-medium px-4 py-2">
              95% de expedientes aprobados en 1ª revisión
            </Badge>
            <h1 id="hero-heading" className="font-poppins text-4xl lg:text-6xl font-bold leading-tight">
              Consultoría en I+D y Cumplimiento Regulatorio
              <span className="text-accent"> 360°</span>
            </h1>
            <p className="font-lato text-xl text-gray-200 leading-relaxed">
              Transformamos ideas en productos exitosos. Especialistas en registro sanitario,
              investigación & desarrollo, y cumplimiento normativo para empresas peruanas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" aria-label="Solicita diagnóstico gratuito">
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 h-auto">
                Solicita diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 h-auto"
              onClick={onPortalAccess}
              aria-label="Acceso al portal cliente"
            >
              Portal cliente
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop"
              alt="Laboratorio de investigación, científicos trabajando en un laboratorio moderno"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-poppins font-bold text-2xl text-primary">150+</div>
                  <div className="font-lato text-sm text-gray-600">Proyectos exitosos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 