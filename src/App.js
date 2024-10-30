import React, { useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';

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
  const [darkMode, setDarkMode] = useState(true);  // Definimos el estado para darkMode
  const [hoveredIndex, setHoveredIndex] = useState(null);  // Definimos el estado para hoveredIndex

  return (
    <div
      className={`min-h-screen flex flex-col justify-between ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"
      } transition-all duration-500 ease-in-out`}
    >
      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Pasamos darkMode y setDarkMode */}

      {/* Main content */}
      <main className="flex-grow container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${
                index === 0
                  ? "lg:col-span-2 row-span-2"
                  : index === 7
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
              } bg-gray-700 rounded-lg p-4 shadow-md transition-all duration-500 ease-in-out hover:shadow-lg`}
              style={{ minHeight: "250px", position: "relative" }}
              onMouseEnter={() => setHoveredIndex(index)}  // Cambia hoveredIndex al hacer hover
              onMouseLeave={() => setHoveredIndex(null)}  // Restablece hoveredIndex al salir del hover
            >
              {/* Contenido inicial: Título y fecha */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-transform duration-500 ease-in-out transform ${
                  hoveredIndex === index ? "-translate-y-full" : "translate-y-0"
                }`}
              >
                <h2 className="text-xl font-bold mb-2 break-words">
                  {session.title}
                </h2>
                <span className="text-sm text-gray-500">{session.date}</span>
              </div>

              {/* Contenido que aparece en el hover: Imagen, descripción y botón */}
              <div
                className={`absolute inset-0 bg-cover bg-center flex flex-col justify-end items-center text-center p-4 transition-transform duration-500 ease-in-out transform ${
                  hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                }`}
                style={{
                  backgroundImage: `url(/images/imagen${index + 1}.jpg)`,  // Ruta de imágenes en public
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              >
                <div className="bg-opacity-80 bg-black p-4 rounded-lg w-full">
                  <p className="text-lg text-white mb-4">{session.description}</p>
                  <a
                    href={session.link ? session.link : "#"}  // Condicional para el link
                    className={`py-2 px-4 rounded-lg shadow-lg ${
                      session.link
                        ? "bg-blue-500 text-white"
                        : "bg-gray-500 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {session.link ? "Ver Sesión" : "Próximamente..."}  {/* Texto condicional */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} /> {/* Pasamos darkMode si es necesario */}
    </div>
  );
}

export default App;
