import React, { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa'; // Importar el icono de React

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
      link: '#', // Simula un link válido
    },
    {
      title: 'Sesión 2: Manipulación del DOM y Eventos en JavaScript',
      objective: 'Entender cómo interactuar con el DOM y manejar eventos.',
      image: 'https://via.placeholder.com/300',
      link: '', // Simula que no hay link disponible
    },
    {
      title: 'Sesión 3: Introducción a React/Angular',
      objective: 'Introducir el concepto de componentes y estado en React.',
      image: 'https://via.placeholder.com/300',
      link: '#', // Simula un link válido
    },
    {
      title: 'Sesión 4: Formularios y validaciones',
      objective: 'Aprender a trabajar con formularios dinámicos y cómo validar las entradas de usuario.',
      image: 'https://via.placeholder.com/300',
      link: '', // Simula que no hay link disponible
    },
    {
      title: 'Sesión 5: Introducción a Django y Django Rest Framework (DRF)',
      objective: 'Crear una API funcional en Django para que el frontend (React) pueda interactuar con ella.',
      image: 'https://via.placeholder.com/300',
      link: '#', // Simula un link válido
    },
    {
      title: 'Sesión 6: Integración de Frontend con Backend',
      objective: 'Lograr la comunicación total entre frontend y backend, gestionando el estado de la aplicación y la autenticación.',
      image: 'https://via.placeholder.com/300',
      link: '', // Simula que no hay link disponible
    },
    {
      title: 'Sesión 7: Optimización y despliegue',
      objective: 'Optimizar y desplegar la aplicación completa, tanto el frontend como el backend, en un entorno de producción.',
      image: 'https://via.placeholder.com/300',
      link: '#', // Simula un link válido
    },
    {
      title: 'Sesión 8: Examen Final',
      objective: 'Prueba lo que sabes.',
      image: 'https://via.placeholder.com/300',
      link: '', // Simula que no hay link disponible
    },
  ];


  const notMultipleOfThree = sessions.length % 3 !== 0;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col justify-between">
      <main>
        <h1 className="text-4xl font-bold text-center mb-8">Temario de Clases Programación Web Media</h1>
        <div className="max-w-screen-xl mx-auto">
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} justify-center`}>
            {sessions.map((session, index) => {
              const isLastTwo = notMultipleOfThree && index >= sessions.length - 2 && !isMobile;
              const buttonText = session.link ? 'Ver la clase' : 'Próximamente...';

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
                        href={session.link ? session.link : '#'}
                        className={`inline-block px-4 py-2 rounded-lg transition-colors ${session.link ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                      >
                        {buttonText}
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
                        href={sessions[index + 1].link ? sessions[index + 1].link : '#'}
                        className={`inline-block px-4 py-2 rounded-lg transition-colors ${sessions[index + 1].link ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                      >
                        {sessions[index + 1].link ? 'Ver la clase' : 'Próximamente...'}
                      </a>
                    </div>
                  </div>
                );
              }

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
                      href={session.link ? session.link : '#'}
                      className={`inline-block px-4 py-2 rounded-lg transition-colors ${session.link ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                    >
                      {buttonText}
                    </a>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </main>

      {/* Footer global */}
      <footer className="bg-gray-800 text-center p-6 mt-8">
        <p className="text-gray-400 mb-2">© 2024 Santiago Mesa Serna - Todos los derechos reservados</p>
        <p className="text-gray-400 flex justify-center items-center">
          Hecho con React <FaReact className="text-blue-500 ml-2" size={20} />
        </p>
      </footer>
    </div>
  );
}

export default App;
