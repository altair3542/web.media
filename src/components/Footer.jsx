import React from 'react';
import { FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 text-gray-300 w-full">
      <p>© 2024 Santiago Mesa Serna - Todos los derechos reservados</p>
      <p className="flex justify-center items-center">
        Hecho con React <FaReact className="ml-2" size={20} color="cyan" />
      </p>
    </footer>
  );
};

export default Footer;
