import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Asegúrate de que la ruta esté correcta

function Card({ title, description, image, link }) {
  const { darkMode } = useTheme(); // Accedemos al estado de darkMode

  return (
    <div
      className={`rounded-lg p-6 w-72 mx-auto my-4 shadow-lg text-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'
      }`}
    >
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
      <a
        href={link}
        className={`inline-block py-2 px-4 rounded-md transition-colors duration-300 ${
          darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Ver la clase
      </a>
    </div>
  );
}

export default Card;
