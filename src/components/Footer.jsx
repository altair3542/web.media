import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`p-4 text-center transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"
      }`}
    >
      <p>© 2024 Santiago Mesa Serna - Todos los derechos reservados</p>
      <p>Hecho con React <span role="img" aria-label="React">⚛️</span></p>
    </footer>
  );
}

export default Footer;
