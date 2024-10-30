import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sessions = [
  {
    title: "Sesión 1: Introducción a JavaScript y Estructuras Básicas",
    description: "Familiarizarse con la sintaxis básica de JavaScript.",
    date: "12.10.1999",
  },
  {
    title: "Sesión 2: Manipulación del DOM y Eventos en JavaScript",
    description: "Entender cómo interactuar con el DOM y manejar eventos.",
    date: "15.10.1999",
  },
  {
    title: "Sesión 3: Introducción a React/Angular",
    description: "Introducir el concepto de componentes y estado en React.",
    date: "20.10.1999",
  },
  {
    title: "Sesión 4: Formularios y validaciones",
    description:
      "Aprender a trabajar con formularios dinámicos y validar entradas de usuario.",
    date: "25.10.1999",
  },
  {
    title: "Sesión 5: Introducción a Django y Django Rest Framework (DRF)",
    description:
      "Crear una API funcional en Django para que el frontend (React) pueda interactuar con ella.",
    date: "30.10.1999",
  },
  {
    title: "Sesión 6: Integración de Frontend con Backend",
    description:
      "Lograr la comunicación total entre frontend y backend, gestionando el estado de la aplicación y la autenticación.",
    date: "05.11.1999",
  },
  {
    title: "Sesión 7: Optimización y despliegue",
    description:
      "Optimizar y desplegar la aplicación completa, tanto el frontend como el backend, en un entorno de producción.",
    date: "10.11.1999",
  },
  {
    title: "Sesión 8: Examen Final",
    description: "Prueba lo que sabes.",
    date: "15.11.1999",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true); // Estado para el tema

  return (
    <div
      className={`${
        darkMode ? "bg-dark text-gray-300" : "bg-gray-100 text-gray-900"
      } min-h-screen transition-all duration-500 ease-in-out`}
    >
      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Contenido principal */}
      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`col-span-1 ${
                index === 0
                  ? "lg:col-span-2 row-span-2"
                  : index === 7
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
              } ${
                darkMode ? "bg-gray-700" : "bg-white"
              } rounded-lg p-4 shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg`}
            >
              <h2 className="text-xl font-bold">{session.title}</h2>
              <p>{session.description}</p>
              <span className="text-sm text-gray-500">{session.date}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
