import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios";

function Session5() {
  const sessionTitle = "Integración de Django API con React";
  const pdfName = "sesion5.pdf";

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

      {/* Parte 1: Introducción a Django y DRF */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 1: Introducción a Django y Django Rest Framework (DRF)</h2>
        <p className="text-lg leading-relaxed">
          Django es un framework de desarrollo web de alto nivel en Python, ideal para crear aplicaciones rápidas y escalables. Django Rest Framework (DRF) extiende Django para facilitar la creación de APIs RESTful.
        </p>
        <ul className="list-disc ml-6 mt-4 text-lg leading-relaxed">
          <li><strong>ORM:</strong> Permite interactuar con la base de datos mediante Python, evitando SQL directo.</li>
          <li><strong>Serializadores:</strong> Convierte los modelos de Django en JSON para transferir datos mediante la API.</li>
          <li><strong>Autenticación:</strong> Facilita el control de acceso mediante autenticación y permisos.</li>
        </ul>
      </section>

      {/* Parte 2: Configuración y creación de una API en Django */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 2: Configuración y Creación de una API en Django</h2>
        <p className="text-lg leading-relaxed">
          Para configurar una API en Django, se recomienda crear un entorno virtual, instalar Django y DRF, y organizar el proyecto en aplicaciones modulares.
        </p>
        <pre className="language-bash mt-4 rounded-lg">
          <code>{`# Crear entorno virtual
python -m venv env
source env/bin/activate  # Mac/Linux
env\\Scripts\\activate   # Windows

# Instalar Django y DRF
pip install django djangorestframework`}</code>
        </pre>
      </section>

      {/* Parte 3: Creación del Modelo de Tarea en Django */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 3: Creación del Modelo de Tarea en Django</h2>
        <p className="text-lg leading-relaxed">
          Para nuestra API de gestión de tareas, definimos el modelo <code>Tarea</code> en Django con campos como título, descripción y estado.
        </p>
        <pre className="language-python mt-4 rounded-lg">
          <code>{`# models.py
from django.db import models

class Tarea(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    completada = models.BooleanField(default=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True)`}</code>
        </pre>
      </section>

      {/* Parte 4: Creación del Serializador y Vistas */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 4: Creación del Serializador y Vistas</h2>
        <p className="text-lg leading-relaxed">
          DRF permite crear serializadores para convertir modelos en JSON. En este ejemplo, se usa <code>TareaSerializer</code> para el modelo Tarea.
        </p>
        <pre className="language-python mt-4 rounded-lg">
          <code>{`# serializers.py
from rest_framework import serializers
from .models import Tarea

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = ['id', 'titulo', 'descripcion', 'completada', 'fecha_creacion']`}</code>
        </pre>
      </section>

      {/* Parte 5: Creación de Endpoints y Rutas */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 5: Creación de Endpoints y Rutas</h2>
        <p className="text-lg leading-relaxed">
          Se configuran las rutas de la API en <code>urls.py</code> para exponer las vistas de Django, permitiendo realizar operaciones CRUD sobre las tareas.
        </p>
        <pre className="language-python mt-4 rounded-lg">
          <code>{`# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TareaViewSet

router = DefaultRouter()
router.register(r'tareas', TareaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]`}</code>
        </pre>
      </section>

      {/* Parte 6: Autenticación con JWT */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 6: Autenticación con JWT en DRF</h2>
        <p className="text-lg leading-relaxed">
          Para proteger la API, utilizamos JSON Web Tokens (JWT). Se pueden obtener tokens con los endpoints de <code>/api/token/</code> y <code>/api/token/refresh/</code>.
        </p>
        <pre className="language-bash mt-4 rounded-lg">
          <code>{`# Instalar simplejwt para autenticación con JWT
pip install djangorestframework-simplejwt`}</code>
        </pre>
      </section>

      {/* Parte 7: Integración de la API en React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 7: Integración de la API en React</h2>
        <p className="text-lg leading-relaxed">
          Usando Axios en React, podemos hacer solicitudes a la API de Django para crear, leer, actualizar y eliminar tareas. Aquí mostramos cómo realizar una solicitud GET.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    axios.get('/api/tareas/')
      .then(response => {
        setTareas(response.data);
      })
      .catch(error => {
        console.error("Error al obtener las tareas:", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>{tarea.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;`}</code>
        </pre>
      </section>

      {/* Parte 8: Ejemplo de Autenticación en React */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parte 8: Ejemplo de Autenticación con JWT en React</h2>
        <p className="text-lg leading-relaxed">
          Para autenticarse en la API, el usuario envía sus credenciales y recibe un token JWT que se usa en las solicitudes. Aquí mostramos cómo obtener y almacenar el token.
        </p>
        <pre className="language-javascript mt-4 rounded-lg">
          <code>{`import axios from 'axios';

function login(username, password) {
  axios.post('/api/token/', { username, password })
    .then(response => {
      localStorage.setItem('token', response.data.access);
    })
    .catch(error => {
      console.error("Error en autenticación:", error);
    });
}`}</code>
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

export default Session5;
