import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

function Session3() {
  const sessionTitle = "Introducción a React - Conceptos Básicos y Componentes";
  const pdfName = "sesion3.pdf";

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      <header className="flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-center md:text-left">{sessionTitle}</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-lg text-center"
          >
            Volver al Índice
          </Link>
          <a
            href={`/sessions/${pdfName}`}
            download
            className="py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg text-center"
          >
            Descargar PDF
          </a>
        </div>
      </header>

      {/* Objetivo General */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Objetivo General</h2>
        <p className="text-lg leading-relaxed">
          Al finalizar esta sesión, los estudiantes comprenderán los conceptos básicos de React, incluyendo componentes, estado, y props. También aprenderán a construir una aplicación básica y a manejar la estructura de un proyecto en React.
        </p>
      </section>

      {/* Introducción a React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introducción a React</h2>
        <p className="text-lg leading-relaxed">
          React es una biblioteca de JavaScript desarrollada por Facebook para crear interfaces de usuario interactivas. A través de componentes reutilizables, React permite crear aplicaciones web y móviles de manera eficiente.
        </p>
        <ul className="list-disc ml-6 mt-4 text-lg leading-relaxed">
          <li><strong>Componentes:</strong> Divide la interfaz en partes modulares y reutilizables.</li>
          <li><strong>Virtual DOM:</strong> Usa una representación virtual para optimizar el rendimiento.</li>
          <li><strong>Unidireccionalidad:</strong> Los datos fluyen de forma predecible, facilitando la depuración.</li>
        </ul>
      </section>

      {/* Configuración del Entorno */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">2. Configuración del Entorno y Creación de un Proyecto</h2>
        <p className="text-lg leading-relaxed">
          Para comenzar, instala Node.js. Luego, usa <code>create-react-app</code> para crear un proyecto de React básico.
        </p>
        <pre className="language-bash mt-4 rounded-lg">
          <code>{`node -v
npx create-react-app my-app
cd my-app
npm start`}</code>
        </pre>
        <p className="text-lg leading-relaxed mt-4">
          La estructura del proyecto incluye:
        </p>
        <ul className="list-disc ml-6 mt-2 text-lg leading-relaxed">
          <li><code>src/</code>: Código fuente principal.</li>
          <li><code>public/</code>: Archivos estáticos, incluyendo <code>index.html</code>.</li>
          <li><code>App.js</code>: Componente raíz de la aplicación.</li>
        </ul>
      </section>

      {/* Componentes en React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">3. Componentes en React</h2>
        <p className="text-lg leading-relaxed">
          Los componentes son la base de cualquier aplicación React, y pueden ser de dos tipos: funcionales y de clase.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`function Saludo() {
  return <h1>¡Hola, mundo!</h1>;
}

export default Saludo;`}</code>
        </pre>
        <p className="text-lg leading-relaxed mt-4">
          También pueden definirse como clases, aunque hoy en día los hooks permiten mayor flexibilidad en componentes funcionales.
        </p>
      </section>

      {/* Props en React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">4. Props en React</h2>
        <p className="text-lg leading-relaxed">
          Las props (propiedades) permiten que los componentes reciban datos de sus componentes padres, haciéndolos dinámicos y reutilizables.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`function Saludo(props) {
  return <h1>¡Hola, {props.nombre}!</h1>;
}

function App() {
  return <Saludo nombre="Juan" />;
}`}</code>
        </pre>
      </section>

      {/* Estado en React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">5. Estado en React</h2>
        <p className="text-lg leading-relaxed">
          El estado permite manejar datos internos que pueden cambiar en respuesta a eventos.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Clic</button>
    </div>
  );
}`}</code>
        </pre>
      </section>

      {/* Renderizado Condicional */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">6. Renderizado Condicional</h2>
        <p className="text-lg leading-relaxed">
          El renderizado condicional permite mostrar distintos elementos dependiendo del estado o las props.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`function Mensaje(props) {
  return props.esUsuarioRegistrado ? <h1>Bienvenido de nuevo</h1> : <h1>Por favor, regístrate</h1>;
}`}</code>
        </pre>
      </section>

      {/* Actividad Final */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Actividad Final</h2>
        <p className="text-lg leading-relaxed">
          Crear un componente <code>FormularioRegistro</code> con campos para nombre y correo. Al enviar, debe mostrar un mensaje de bienvenida personalizado.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import React, { useState } from 'react';

function FormularioRegistro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(\`Bienvenido, \${nombre}. Tu correo es \${correo}\`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default FormularioRegistro;`}</code>
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="mb-4 text-lg font-medium">
          ¿Quieres guardar esta lección para más tarde? Descarga el PDF aquí:
        </p>
        <a
          href={`/sessions/${pdfName}`}
          download
          className="py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg"
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
}

export default Session3;

