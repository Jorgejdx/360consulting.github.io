import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/lib/utils';
import logo from '@/assets/logo.svg';

interface PublicNavProps {
  user?: any;
  handleLogin?: () => void;
}

export const PublicNav: React.FC<PublicNavProps> = ({ user, handleLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="ID360 Consulting Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="font-poppins">
              <div className="text-xl font-bold text-primary">ID360</div>
              <div className="text-xs text-secondary font-medium -mt-1">CONSULTING</div>
            </div>
          </Link>

          {/* Enlaces Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to={createPageUrl("Home")} className="font-lato text-gray-700 hover:text-primary transition-colors duration-200">
              Inicio
            </Link>
            <Link to={createPageUrl("Services")} className="font-lato text-gray-700 hover:text-primary transition-colors duration-200">
              Servicios
            </Link>
            <Link to={createPageUrl("Blog")} className="font-lato text-gray-700 hover:text-primary transition-colors duration-200">
              Blog
            </Link>
            <Link to={createPageUrl("Contact")} className="font-lato text-gray-700 hover:text-primary transition-colors duration-200">
              Contacto
            </Link>
          </div>

          {/* Botones de acción Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Solicita diagnóstico
              </Button>
            </Link>
            {user ? (
              <Link to={createPageUrl("Dashboard")}>
                <Button className="bg-secondary hover:bg-secondary/90">Portal cliente</Button>
              </Link>
            ) : (
              <Button onClick={handleLogin} className="bg-secondary hover:bg-secondary/90">
                Portal cliente
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-6 py-4 space-y-4 bg-white border-t border-gray-100">
            {/* Enlaces móviles */}
            <div className="space-y-3">
              <Link 
                to={createPageUrl("Home")} 
                className="block font-lato text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to={createPageUrl("Services")} 
                className="block font-lato text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to={createPageUrl("Blog")} 
                className="block font-lato text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to={createPageUrl("Contact")} 
                className="block font-lato text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
            
            {/* Botones móviles */}
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <Link to={createPageUrl("Contact")} onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Solicita diagnóstico
                </Button>
              </Link>
              {user ? (
                <Link to={createPageUrl("Dashboard")} onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Portal cliente
                  </Button>
                </Link>
              ) : (
                <Button 
                  onClick={() => {
                    handleLogin?.();
                    setIsMenuOpen(false);
                  }} 
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  Portal cliente
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}; 