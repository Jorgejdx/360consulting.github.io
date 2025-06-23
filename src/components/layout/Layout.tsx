import React from 'react';
import { PublicNav } from './PublicNav';
import { PortalNav } from './PortalNav';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isPortal?: boolean;
  user?: any;
  handleLogin?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isPortal = false, 
  user, 
  handleLogin 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navegación */}
      {isPortal ? <PortalNav /> : <PublicNav user={user} handleLogin={handleLogin} />}
      
      {/* Contenido principal */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}; 