import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-synthwave84.css"; // Puedes cambiar el tema aquí
import "prismjs/components/prism-javascript";

function Session1() {
  const sessionTitle = "Introducción a JavaScript y Estructuras Básicas";
  const pdfName = "sesion1.pdf"; // Nombre del archivo PDF

  useEffect(() => {
    Prism.highlightAll(); // Aplica Prism a todos los bloques de código
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      {/* Header con botones para regresar al índice y descargar PDF */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">{sessionTitle}</h1>
        <div className="flex space-x-4">
          <Link to="/" className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-lg">
            Volver al Índice
          </Link>
          <a
            href={`/sessions/${pdfName}`}
            download
            className="py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg"
          >
            Descargar PDF
          </a>
        </div>
      </header>

      {/* Contenido de la sesión 1 */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Objetivo general</h2>
        <p className="mt-2">
          Al finalizar la clase, los estudiantes comprenderán los fundamentos de JavaScript,
          incluyendo la sintaxis básica, tipos de datos, estructuras de control, ciclos y la creación de funciones.
        </p>

        <h3 className="text-xl font-semibold mt-6">Sintaxis básica de JavaScript</h3>
        <p className="mt-2">
          JavaScript es un lenguaje de programación que se ejecuta en el navegador y permite
          agregar interactividad a las páginas web. Un programa en JavaScript está compuesto de una
          serie de instrucciones que se ejecutan en secuencia.
        </p>

        {/* Bloque de código de ejemplo con Prism */}
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`// Este es un comentario en JavaScript
console.log('Hola, mundo!'); // Esto imprimirá "Hola, mundo!" en la consola`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Variables y Tipos de Datos</h3>
        <p className="mt-2">
          Las variables en JavaScript se utilizan para almacenar valores. Existen tres formas de
          declarar variables: <code>var</code>, <code>let</code> y <code>const</code>.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`var nombre = 'Juan'; // variable que puede ser redeclarada
let edad = 30;       // variable que puede cambiar de valor, pero no ser redeclarada
const pi = 3.1416;   // constante cuyo valor no puede cambiar`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Tipos de Datos</h3>
        <p className="mt-2">
          En JavaScript existen diferentes tipos de datos, tales como:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Number</strong>: Números, ya sean enteros o decimales.</li>
          <li><strong>String</strong>: Cadenas de texto entre comillas.</li>
          <li><strong>Boolean</strong>: Valores lógicos (<code>true</code> o <code>false</code>).</li>
          <li><strong>Object</strong>: Estructuras más complejas, como arreglos y objetos.</li>
          <li><strong>Undefined</strong>: Variable que ha sido declarada pero no tiene valor.</li>
        </ul>

        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`let numero = 42;          // Tipo Number
let texto = 'Hola, mundo'; // Tipo String
let esVerdadero = true;    // Tipo Boolean
let objeto = { nombre: 'Juan', edad: 30 }; // Tipo Object
let indefinido;            // Tipo Undefined`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Ciclos: for y while</h3>
        <p className="mt-2">
          Los ciclos se utilizan para repetir un bloque de código. Los ciclos más comunes en
          JavaScript son <code>for</code> y <code>while</code>.
        </p>

        <h4 className="text-lg font-semibold mt-4">Ciclo for</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`for (let i = 0; i < 5; i++) {
    console.log('Iteración número ' + i);
}
// Este código imprimirá los números del 0 al 4`}
          </code>
        </pre>

        <h4 className="text-lg font-semibold mt-4">Ciclo while</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`let contador = 0;
while (contador < 5) {
    console.log('Contador: ' + contador);
    contador++;
}
// Este código imprimirá los números del 0 al 4`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Funciones y Arrow Functions</h3>
        <p className="mt-2">
          Las funciones en JavaScript son bloques de código que se pueden definir y reutilizar.
          Puedes crear una función con la palabra clave <code>function</code>, seguida del nombre de
          la función.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`function saludar(nombre) {
    return 'Hola, ' + nombre;
}

console.log(saludar('Ana')); // Esto imprimirá "Hola, Ana"`}
          </code>
        </pre>

        <p className="mt-4">
          También puedes escribir funciones usando <strong>Arrow Functions</strong> (funciones
          flecha), que son una sintaxis más concisa.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`const saludar = (nombre) => 'Hola, ' + nombre;

console.log(saludar('Carlos')); // Esto imprimirá "Hola, Carlos"`}
          </code>
        </pre>
      </section>

      <div className="mt-8 text-center">
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

export default Session1;
