import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => (
  <section className="py-20 lg:py-32 gradient-hero text-white" aria-labelledby="cta-heading">
    <div className="container mx-auto px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 id="cta-heading" className="font-poppins text-3xl lg:text-5xl font-bold leading-tight">
          ¿Listo para transformar tu empresa?
        </h2>
        <p className="font-lato text-xl text-gray-200 leading-relaxed">
          Solicita tu diagnóstico gratuito y descubre cómo podemos ayudarte a alcanzar tus objetivos regulatorios y de innovación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" aria-label="Comenzar ahora">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 h-auto">
              Comenzar ahora
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
          <Link to="/services" aria-label="Conocer servicios">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 h-auto"
            >
              Conocer servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection; 