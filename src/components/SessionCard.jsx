import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function SessionCard({ session, index }) {
  const { darkMode } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg p-4 shadow-md transition-all duration-500 ease-in-out hover:shadow-lg ${
        index === 0
          ? "lg:col-span-2 row-span-2"
          : index === 7
          ? "lg:col-span-2"
          : "lg:col-span-1"
      } ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      style={{ minHeight: "250px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-transform duration-500 ease-in-out transform ${
          hovered ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-2 break-words">{session.title}</h2>
        <span className="text-sm text-gray-500">{session.date}</span>
      </div>

      <div
        className={`absolute inset-0 bg-cover bg-center flex flex-col justify-end items-center text-center p-4 transition-transform duration-500 ease-in-out transform ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          backgroundImage: `url(/images/imagen${index + 1}.jpg)`,
          backgroundColor: darkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
        }}
      >
        <div className={`bg-opacity-80 ${darkMode ? "bg-black" : "bg-white"} p-4 rounded-lg w-full`}>
          <p className={`text-lg mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {session.description}
          </p>
          <a
            href={session.isAvailable ? session.link : "#"}
            className={`py-2 px-4 rounded-lg shadow-lg ${
              session.isAvailable
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            {session.isAvailable ? "Ver Sesión" : "Próximamente..."}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
