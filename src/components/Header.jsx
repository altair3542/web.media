import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"} flex justify-between items-center`}>
      {/* Título principal */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        Temario de Clases de Programación Web
      </h1>

      {/* Botón de modo claro/oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`ml-4 py-2 px-4 rounded-lg ${
          darkMode ? "bg-blue-500 text-white" : "bg-gray-900 text-white"
        } transition-all duration-300 ease-in-out text-sm sm:text-base lg:text-lg`}
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </header>
  );
}

export default Header;
