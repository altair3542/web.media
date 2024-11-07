import React from "react";
import sessions from "../sessions.json"; // Asegúrate de que la ruta sea correcta
import SessionCard from "./SessionCard";

function HomeContent({ darkMode }) {
  return (
    <main className="flex-grow container mx-auto py-8 px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session, index) => (
          <SessionCard
            key={index}
            session={session}
            darkMode={darkMode}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}

export default HomeContent;
