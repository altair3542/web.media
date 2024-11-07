import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function Session4() {
  const sessionTitle = "Formularios y Validaciones en React";
  const pdfName = "sesion4.pdf";

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

      {/* Parte 1: Manejo de Formularios en React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 1: Manejo de Formularios en React</h2>
        <p className="text-lg leading-relaxed">
          En esta sección, aprenderás cómo manejar formularios en React mediante formularios controlados, lo que permite gestionar el estado de cada campo directamente en React.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleNombreChange = (event) => setNombre(event.target.value);
  const handleCorreoChange = (event) => setCorreo(event.target.value);

  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" value={correo} onChange={handleCorreoChange} />
      </div>
    </form>
  );
}

export default Formulario;`}</code>
        </pre>
        <p className="text-lg leading-relaxed mt-4">
          En este ejemplo, cada campo de entrada se sincroniza con el estado usando el hook <code>useState</code>.
        </p>
      </section>

      {/* Parte 2: Estado Centralizado para Formularios Complejos */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 2: Estado Centralizado para Formularios Complejos</h2>
        <p className="text-lg leading-relaxed">
          Cuando un formulario tiene varios campos, es más eficiente centralizar el estado en un solo objeto.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({ nombre: '', correo: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
      </div>
    </form>
  );
}

export default Formulario;`}</code>
        </pre>
      </section>

      {/* Parte 3: Validaciones en Formularios */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 3: Validaciones en Formularios de React</h2>
        <p className="text-lg leading-relaxed">
          Las validaciones en formularios permiten asegurar que los datos ingresados cumplan ciertos criterios. Este ejemplo añade validación en tiempo real a los campos de nombre y correo.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({ nombre: '', correo: '' });
  const [errors, setErrors] = useState({ nombre: '', correo: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    if (name === 'nombre') {
      if (value.trim() === '') errorMessage = 'El nombre es obligatorio.';
      else if (value.length < 3) errorMessage = 'Debe tener al menos 3 caracteres.';
    }
    if (name === 'correo') {
      const correoRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (value.trim() === '') errorMessage = 'El correo es obligatorio.';
      else if (!correoRegex.test(value)) errorMessage = 'El correo no es válido.';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
        {errors.correo && <p className="error">{errors.correo}</p>}
      </div>
    </form>
  );
}

export default Formulario;`}</code>
        </pre>
      </section>

      {/* Parte 4: Gestión del Evento submit */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 4: Gestión de Eventos en el Envío del Formulario</h2>
        <p className="text-lg leading-relaxed">
          Al enviar el formulario, es posible realizar validaciones adicionales y mostrar un mensaje de éxito si el formulario es válido.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({ nombre: '', correo: '' });
  const [errors, setErrors] = useState({ nombre: '', correo: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    if (name === 'nombre') {
      if (value.trim() === '') errorMessage = 'El nombre es obligatorio.';
      else if (value.length < 3) errorMessage = 'Debe tener al menos 3 caracteres.';
    }
    if (name === 'correo') {
      const correoRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (value.trim() === '') errorMessage = 'El correo es obligatorio.';
      else if (!correoRegex.test(value)) errorMessage = 'El correo no es válido.';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) isValid = false;
    });
    if (isValid) setIsSubmitted(true);
    else setIsSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
        {errors.correo && <p className="error">{errors.correo}</p>}
      </div>
      <button type="submit">Enviar</button>
      {isSubmitted && <p className="success">Formulario enviado con éxito</p>}
    </form>
  );
}

export default Formulario;`}</code>
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

export default Session4;
