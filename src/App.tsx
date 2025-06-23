import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = () => {
    // Aquí iría la lógica de login
    console.log("Iniciando proceso de login...");
    // Por ahora simulamos un usuario
    setUser({ id: 1, name: "Usuario Demo" });
  };

  return (
    <HashRouter>
      <Layout user={user} handleLogin={handleLogin}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
