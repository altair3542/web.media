// Header.js
import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-300"
      } py-8 text-center shadow-md transition-all duration-500 ease-in-out`}
    >
      <h1 className="text-4xl font-bold mb-4">
        Temario de Clases de Programación Web
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        {darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
      </button>
    </header>
  );
};

export default Header;

