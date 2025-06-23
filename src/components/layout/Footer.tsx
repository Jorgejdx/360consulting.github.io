import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Consultoría Digital', href: '/servicios/consultoria-digital' },
      { label: 'Transformación Digital', href: '/servicios/transformacion-digital' },
      { label: 'Innovación Tecnológica', href: '/servicios/innovacion-tecnologica' },
      { label: 'Estrategia Digital', href: '/servicios/estrategia-digital' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { label: 'Nuestro Equipo', href: '/equipo' },
      { label: 'Casos de Éxito', href: '/casos-exito' },
      { label: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Metodología ID360', href: '/metodologia' },
      { label: 'Herramientas', href: '/herramientas' },
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'Webinars', href: '/webinars' }
    ]
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Portal Cliente', href: '/portal' },
      { label: 'Centro de Ayuda', href: '/ayuda' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Solicitar Demo', href: '/demo' }
    ]
  }
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/id360-consulting', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/id360consulting', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/id360consulting', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/id360consulting', label: 'Instagram' }
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="text-xl font-bold">ID360 Consulting</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos empresas a través de la innovación digital. 
              Nuestro enfoque ID360 combina estrategia, tecnología y experiencia 
              para impulsar el crecimiento sostenible.
            </p>
            
            {/* Información de contacto */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@id360consulting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+51981596726</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">San Isidro, Perú</span>
              </div>
            </div>
          </div>

          {/* Enlaces del footer */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} ID360 Consulting. Todos los derechos reservados.
            </div>

            {/* Enlaces legales */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-gray-400 hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Cookies
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter signup - opcional */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Mantente actualizado
              </h3>
              <p className="text-gray-300">
                Suscríbete a nuestro newsletter para recibir las últimas noticias y insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 md:w-64 px-4 py-2 border border-gray-600 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-md transition-colors duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 