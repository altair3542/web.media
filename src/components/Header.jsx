import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={darkMode ? "bg-gray-800 py-4" : "bg-gray-300 py-4"}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Temario de Clases de Programación Web</h1>

        {/* Botón de cambio de tema */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    </header>
  );
}

export default Header;
