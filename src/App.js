import React from 'react';
import { FaReact } from 'react-icons/fa'; // Para el icono de React

const SolidBento = () => {
  const sessions = [
    {
      title: 'Sesión 1: Introducción a JavaScript y Estructuras Básicas',
      objective: 'Familiarizarse con la sintaxis básica de JavaScript.',
      link: '/session1',
      date: '12.10.1999',
    },
    {
      title: 'Sesión 2: Manipulación del DOM y Eventos en JavaScript',
      objective: 'Entender cómo interactuar con el DOM y manejar eventos.',
      link: '/session2',
      date: '15.10.1999',
    },
    {
      title: 'Sesión 3: Introducción a React/Angular',
      objective: 'Introducir el concepto de componentes y estado en React.',
      link: '/session3',
      date: '20.10.1999',
    },
    {
      title: 'Sesión 4: Formularios y validaciones',
      objective: 'Aprender a trabajar con formularios dinámicos y cómo validar las entradas de usuario.',
      link: '/session4',
      date: '25.10.1999',
    },
    {
      title: 'Sesión 5: Introducción a Django y Django Rest Framework (DRF)',
      objective: 'Crear una API funcional en Django para que el frontend (React) pueda interactuar con ella.',
      link: '/session5',
      date: '30.10.1999',
    },
    {
      title: 'Sesión 6: Integración de Frontend con Backend',
      objective: 'Lograr la comunicación total entre frontend y backend, gestionando el estado de la aplicación y la autenticación.',
      link: '/session6',
      date: '05.11.1999',
    },
    {
      title: 'Sesión 7: Optimización y despliegue',
      objective: 'Optimizar y desplegar la aplicación completa, tanto el frontend como el backend, en un entorno de producción.',
      link: '/session7',
      date: '10.11.1999',
    },
    {
      title: 'Sesión 8: Examen Final',
      objective: 'Prueba lo que sabes.',
      link: '/session8',
      date: '15.11.1999',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Temario de Clases de Programación Web</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="grid h-[85%] w-[85%] gap-6 bg-gray-200 p-4 grid-cols-4 grid-rows-4 rounded-lg shadow-md">

          {/* Sesión 1 */}
          <a href={sessions[0].link} className="col-span-1 row-span-4 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[0].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[0].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[0].date}</p>
          </a>

          {/* Sesión 2 */}
          <a href={sessions[1].link} className="col-span-1 row-span-2 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[1].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[1].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[1].date}</p>
          </a>

          {/* Sesión 4 */}
          <a href={sessions[3].link} className="col-span-1 row-span-3 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[3].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[3].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[3].date}</p>
          </a>

          {/* Sesión 6 */}
          <a href={sessions[5].link} className="col-span-1 row-span-1 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[5].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[5].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[5].date}</p>
          </a>

          {/* Sesión 7 */}
          <a href={sessions[6].link} className="col-span-1 row-span-1 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[6].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[6].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[6].date}</p>
          </a>

          {/* Sesión 3 */}
          <a href={sessions[2].link} className="col-span-1 row-span-2 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[2].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[2].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[2].date}</p>
          </a>

          {/* Sesión 8 */}
          <a href={sessions[7].link} className="col-span-1 row-span-2 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[7].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[7].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[7].date}</p>
          </a>

          {/* Sesión 5 */}
          <a href={sessions[4].link} className="col-span-1 row-span-1 bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">{sessions[4].title}</h2>
            <p className="mt-2 text-gray-700">{sessions[4].objective}</p>
            <p className="mt-2 text-gray-500">{sessions[4].date}</p>
          </a>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-6">
        <p className="text-gray-400 mb-2">© 2024 Santiago Mesa Serna - Todos los derechos reservados</p>
        <p className="text-gray-400 flex justify-center items-center">
          Hecho con React <FaReact className="text-blue-500 ml-2" size={20} />
        </p>
      </footer>
    </div>
  );
};

export default SolidBento;

