import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Settings, LogOut, Bell, Search } from 'lucide-react';

interface PortalNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const portalNavItems: PortalNavItem[] = [
  { label: 'Dashboard', href: '/portal/dashboard' },
  { label: 'Proyectos', href: '/portal/proyectos' },
  { label: 'Documentos', href: '/portal/documentos' },
  { label: 'Reportes', href: '/portal/reportes' },
  { label: 'Calendario', href: '/portal/calendario' }
];

export const PortalNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  // Mock user data - en una app real vendría de un contexto o estado global
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@empresa.com',
    avatar: null
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/portal" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="text-xl font-bold">Portal ID360</span>
            </a>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {portalNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar en el portal..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Notificaciones y Usuario */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notificaciones */}
            <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
            </button>

            {/* Menú de usuario */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
              >
                {user.avatar ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.avatar}
                    alt={user.name}
                  />
                ) : (
                  <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                )}
                <span className="text-sm font-medium">{user.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown de usuario */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <a
                    href="/portal/perfil"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Mi Perfil
                  </a>
                  <a
                    href="/portal/configuracion"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Configuración
                  </a>
                  <a
                    href="/logout"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            {/* Barra de búsqueda móvil */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar en el portal..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Navegación móvil */}
            {portalNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Usuario móvil */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-3 py-2">
                {user.avatar ? (
                  <img
                    className="h-8 w-8 rounded-full mr-3"
                    src={user.avatar}
                    alt={user.name}
                  />
                ) : (
                  <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <User className="h-4 w-4" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <a
                  href="/portal/perfil"
                  className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Mi Perfil
                </a>
                <a
                  href="/portal/configuracion"
                  className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración
                </a>
                <a
                  href="/logout"
                  className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}; 