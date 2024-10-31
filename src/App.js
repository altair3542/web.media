import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Session1 from "./components/Session1"; // Página de la sesión 1
// Importa más sesiones conforme se habiliten

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col justify-between ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"
        } transition-all duration-500 ease-in-out`}
      >
        {/* Header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Definimos las rutas usando Routes */}
        <Routes>
          {/* Ruta del índice */}
          <Route path="/" element={<HomeContent />} />

          {/* Solo rutas para las sesiones disponibles */}
          <Route path="/session/1" element={<Session1 />} />
          {/* Agrega más rutas aquí cuando las sesiones estén disponibles */}
        </Routes>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
