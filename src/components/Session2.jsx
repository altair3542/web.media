import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

function Session2() {
  const sessionTitle = "Manipulación del DOM y Eventos en JavaScript";
  const pdfName = "sesion2.pdf";

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
          Al finalizar la clase, los estudiantes serán capaces de manipular el DOM de una página web usando JavaScript,
          manejar eventos en elementos HTML e interactuar con el DOM de manera eficiente.
        </p>
      </section>

      {/* Introducción al DOM */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introducción al DOM</h2>
        <p className="text-lg leading-relaxed">
          El Document Object Model (DOM) es una representación estructural de un documento HTML o XML. Cada elemento HTML
          se convierte en un objeto accesible y manipulable mediante JavaScript.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          <strong>Relación entre HTML y el DOM:</strong> Cuando un navegador carga una página web, convierte el archivo HTML
          en una estructura jerárquica de nodos conocida como DOM.
        </p>
        <pre className="language-html mt-6 rounded-lg">
          <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo DOM</title>
  </head>
  <body>
    <h1 id="titulo">Bienvenido</h1>
    <p class="parrafo">Este es un párrafo.</p>
    <p class="parrafo">Este es otro párrafo.</p>
  </body>
</html>`}
          </code>
        </pre>
      </section>

      {/* Selección de Elementos en el DOM */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">2. Selección de Elementos en el DOM</h2>
        <p className="text-lg leading-relaxed">
          Para manipular el DOM, primero necesitamos seleccionar los elementos con los que queremos trabajar.
        </p>
        <ul className="list-disc ml-6 mt-4 text-lg leading-relaxed">
          <li className="mt-4">
            <strong>getElementById()</strong>: Selecciona un elemento por su ID.
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const titulo = document.getElementById("titulo");
console.log(titulo.textContent);  // Muestra el texto "Bienvenido"`}</code>
            </pre>
          </li>
          <li className="mt-4">
            <strong>getElementsByClassName()</strong>: Selecciona todos los elementos que tienen una clase específica.
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos.length);  // Muestra 2, ya que hay dos párrafos con la clase "parrafo"`}</code>
            </pre>
          </li>
          <li className="mt-4">
            <strong>querySelector() y querySelectorAll()</strong>:
            <ul className="list-disc ml-6 mt-2">
              <li>querySelector(): Selecciona el primer elemento que coincida con un selector CSS.</li>
              <li>querySelectorAll(): Selecciona todos los elementos que coincidan con un selector CSS.</li>
            </ul>
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const primerParrafo = document.querySelector(".parrafo");
const todosLosParrafos = document.querySelectorAll(".parrafo");
console.log(primerParrafo.textContent);
console.log(todosLosParrafos.length);  // Muestra 2`}</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Manipulación del DOM */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">3. Manipulación del DOM</h2>
        <p className="text-lg leading-relaxed">
          Podemos cambiar el contenido, las clases, los estilos o incluso agregar y eliminar elementos del DOM.
        </p>

        <ul className="list-disc ml-6 mt-4 text-lg leading-relaxed">
          <li className="mt-4">
            <strong>Manipulación de texto y contenido HTML:</strong>
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const titulo = document.getElementById("titulo");
titulo.textContent = "¡Bienvenido al DOM!";`}</code>
            </pre>
          </li>
          <li className="mt-4">
            <strong>Manipulación de estilos:</strong> Cambiando el estilo de un elemento mediante la propiedad <code>style</code>.
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`titulo.style.color = "blue";
titulo.style.fontSize = "30px";`}</code>
            </pre>
          </li>
          <li className="mt-4">
            <strong>Agregar y eliminar clases:</strong>
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const parrafo = document.querySelector(".parrafo");
parrafo.classList.add("resaltado");`}</code>
            </pre>
          </li>
          <li className="mt-4">
            <strong>Crear y eliminar elementos del DOM:</strong>
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo creado dinámicamente.";
document.body.appendChild(nuevoParrafo);
nuevoParrafo.remove();`}</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Manejo de Eventos */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">4. Manejo de Eventos</h2>
        <p className="text-lg leading-relaxed">
          Los eventos permiten a JavaScript reaccionar a las acciones del usuario.
        </p>

        <ul className="list-disc ml-6 mt-4 text-lg leading-relaxed">
          <li className="mt-4">
            <strong>click:</strong> Se dispara cuando el usuario hace clic en un elemento.
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
  alert("¡Hiciste clic en el botón!");
});`}</code>
            </pre>
          </li>
          <li className="mt-4">
            <strong>submit:</strong> Prevención del comportamiento predeterminado de los formularios.
            <pre className="language-javascript mt-4 rounded-lg">
              <code>{`const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Formulario enviado sin recargar la página");
});`}</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Actividad Final */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Actividad Final</h2>
        <p className="text-lg leading-relaxed">
          Crear una mini aplicación interactiva que incluya un formulario con un campo de texto y un botón de enviar. Al hacer clic,
          el texto se agrega como un nuevo elemento en la lista.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`const form = document.querySelector("form");
const input = document.querySelector("input");
const lista = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = input.value;
  nuevoElemento.style.backgroundColor = "lightblue";
  lista.appendChild(nuevoElemento);
  input.value = "";  // Limpia el campo de texto
});`}</code>
        </pre>
      </section>

      {/* Material Adicional */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Material adicional para consulta</h2>
        <ul className="list-disc ml-6 mt-4 text-lg leading-relaxed">
          <li><a href="https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model" className="text-blue-500">MDN Web Docs - DOM</a></li>
          <li><a href="https://developer.mozilla.org/es/docs/Web/Events" className="text-blue-500">Event Reference</a></li>
        </ul>
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

export default Session2;
