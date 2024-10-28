import React, { useState, useEffect } from 'react';

function App() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sessions = [
    {
      title: 'Sesión 1: Introducción a JavaScript y Estructuras Básicas',
      objective: 'Familiarizarse con la sintaxis básica de JavaScript.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 2: Manipulación del DOM y Eventos en JavaScript',
      objective: 'Entender cómo interactuar con el DOM y manejar eventos.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 3: Introducción a React/Angular',
      objective: 'Introducir el concepto de componentes y estado en React.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 4: Formularios y validaciones',
      objective: 'Aprender a trabajar con formularios dinámicos y cómo validar las entradas de usuario.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 5: Introducción a Django y Django Rest Framework (DRF)',
      objective: 'Crear una API funcional en Django para que el frontend (React) pueda interactuar con ella.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 6: Integración de Frontend con Backend',
      objective: 'Lograr la comunicación total entre frontend y backend, gestionando el estado de la aplicación y la autenticación.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 7: Optimización y despliegue',
      objective: 'Optimizar y desplegar la aplicación completa, tanto el frontend como el backend, en un entorno de producción.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 8: Examen Final',
      objective: 'Prueba lo que sabes.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  // Verificar si el número de tarjetas no es múltiplo de 3
  const notMultipleOfThree = sessions.length % 3 !== 0;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Temario de Clases Programación Web Media</h1>
      <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} justify-center`}>
        {sessions.map((session, index) => {
          // Si el número de tarjetas no es múltiplo de 3 y estamos en las dos últimas tarjetas
          const isLastTwo = notMultipleOfThree && index >= sessions.length - 2 && !isMobile;

          // Si estamos en las dos últimas tarjetas, renderizar solo dentro del contenedor `flex`
          if (isLastTwo && index === sessions.length - 2) {
            return (
              <div className="flex justify-center w-full col-span-3" key={index}>
                <div
                  className={`bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform w-1/2 ${hoveredCardIndex === index ? 'scale-105 shadow-xl' : ''}`}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  <img src={session.image} alt={session.title} className="rounded-lg w-full mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{session.title}</h3>
                  <p className="text-gray-400 mb-4">{session.objective}</p>
                  <a
                    href={session.link}
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors"
                  >
                    Ver la clase
                  </a>
                </div>
                <div
                  className={`bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform w-1/2 ml-6 ${hoveredCardIndex === index + 1 ? 'scale-105 shadow-xl' : ''}`}
                  onMouseEnter={() => setHoveredCardIndex(index + 1)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  key={index + 1}
                >
                  <img src={sessions[index + 1].image} alt={sessions[index + 1].title} className="rounded-lg w-full mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{sessions[index + 1].title}</h3>
                  <p className="text-gray-400 mb-4">{sessions[index + 1].objective}</p>
                  <a
                    href={sessions[index + 1].link}
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors"
                  >
                    Ver la clase
                  </a>
                </div>
              </div>
            );
          }

          // Mostrar las demás tarjetas
          if (index !== sessions.length - 1) {
            return (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform ${hoveredCardIndex === index ? 'scale-105 shadow-xl' : ''}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <img src={session.image} alt={session.title} className="rounded-lg w-full mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{session.title}</h3>
                <p className="text-gray-400 mb-4">{session.objective}</p>
                <a
                  href={session.link}
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors"
                >
                  Ver la clase
                </a>
              </div>
            );
          }

          return null; // Evitar renderizar la última tarjeta dos veces
        })}
      </div>
    </div>
  );
}

export default App;
