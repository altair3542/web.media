import React from "react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Temario de Clases de Programación Web</h1>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-md ${
          darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-white"
        } transition-colors duration-300`}
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </header>
  );
}

export default Header;
