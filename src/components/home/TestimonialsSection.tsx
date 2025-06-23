import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, current, setCurrent }) => (
  <section className="py-20 lg:py-32 bg-white" aria-labelledby="testimonials-heading">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="bg-accent/10 text-black font-medium px-4 py-2 mb-6">
          Testimonios
        </Badge>
        <h2 id="testimonials-heading" className="font-poppins text-3xl lg:text-5xl font-bold text-primary mb-6">
          Lo que dicen nuestros clientes
        </h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50" role="region" aria-label="Testimonio actual">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-8" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="font-lato text-2xl text-gray-700 leading-relaxed mb-8">
              "{testimonials[current].text}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[current].avatar}
                alt={`Foto de ${testimonials[current].name}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-poppins font-semibold text-lg text-primary">
                  {testimonials[current].name}
                </div>
                <div className="font-lato text-gray-600">
                  {testimonials[current].company}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Indicadores de testimonios */}
        <div className="flex justify-center space-x-2 mt-8" role="tablist" aria-label="Selector de testimonios">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-secondary' : 'bg-gray-300'}`}
              onClick={() => setCurrent(index)}
              aria-label={`Ver testimonio ${index + 1}`}
              aria-selected={index === current}
              role="tab"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 