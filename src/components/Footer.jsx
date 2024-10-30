import React from 'react';
import { FaReact } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-300 text-gray-900"} text-center py-4 w-full absolute bottom-0`}>
      <p>© 2024 Santiago Mesa Serna - Todos los derechos reservados</p>
      <p className="flex justify-center items-center">
        Hecho con React <FaReact className="ml-2" size={20} color={darkMode ? "cyan" : "blue"} />
      </p>
    </footer>
  );
};

export default Footer;
