import React, { useState, useEffect } from 'react';

function App() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sessions = [
    {
      title: 'Sesión 1: Introducción a JavaScript y Estructuras Básicas',
      objective: 'Familiarizarse con la sintaxis básica de JavaScript.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 2: Manipulación del DOM y Eventos en JavaScript',
      objective: 'Entender cómo interactuar con el DOM y manejar eventos.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 3: Introducción a React/Angular',
      objective: 'Introducir el concepto de componentes y estado en React.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 4: Formularios y validaciones',
      objective: 'Aprender a trabajar con formularios dinámicos y cómo validar las entradas de usuario.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 5: Introducción a Django y Django Rest Framework (DRF)',
      objective: 'Crear una API funcional en Django para que el frontend (React) pueda interactuar con ella.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 6: Integración de Frontend con Backend',
      objective: 'Lograr la comunicación total entre frontend y backend, gestionando el estado de la aplicación y la autenticación.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 7: Optimización y despliegue',
      objective: 'Optimizar y desplegar la aplicación completa, tanto el frontend como el backend, en un entorno de producción.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Sesión 8: Examen Final',
      objective: 'Prueba lo que sabes.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <div style={containerStyle}>
      <h1>Temario de Clases Programación Web Media</h1>
      <div style={isMobile ? mobileGridStyle : gridStyle}>
        {sessions.map((session, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredCardIndex === index ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <img src={session.image} alt={session.title} style={imgStyle} />
            <h3>{session.title}</h3>
            <p>{session.objective}</p>
            <a
              href={session.link}
              style={{
                ...buttonStyle,
                ...(hoveredButtonIndex === index ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredButtonIndex(index)}
              onMouseLeave={() => setHoveredButtonIndex(null)}
            >
              Ver la clase
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  backgroundColor: '#0f172a',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  justifyContent: 'center',
  padding: '20px',
};

const mobileGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '20px',
  justifyContent: 'center',
  padding: '20px',
};

const cardStyle = {
  backgroundColor: '#1e293b',
  color: 'white',
  borderRadius: '10px',
  padding: '20px',
  width: '300px',
  margin: '20px',
  textAlign: 'center',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
};

const imgStyle = {
  width: '100%',
  borderRadius: '10px',
};

const buttonStyle = {
  backgroundColor: '#9f7aea',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  textDecoration: 'none',
  transition: 'background-color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#7c3aed',
};

export default App;
