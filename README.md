CRUD de Tareas - Prueba Técnica

Autor
Marcela Hidalgo Ospina

1. Descripción
Aplicación web para gestionar tareas con las siguientes funcionalidades:

Crear, listar, editar y eliminar tareas.

Validaciones en formularios y manejo de errores HTTP.

Backend documentado con Swagger.

Frontend moderno en React + TypeScript con diseño limpio.

2. Tecnologías usadas

Backend:

NestJS

Prisma ORM

SQLite

Swagger para documentación

Frontend:

React

TypeScript

Axios para llamadas HTTP

CSS para estilo personalizado

3. Instalación y ejecución:

Ir al directorio del backend:

cd backend


Instalar dependencias:

npm install


Ejecutar la base de datos (Prisma):

npx prisma migrate dev 


Ejecutar el servidor:

npm run start:dev


El backend correrá en: http://localhost:4000

Swagger: http://localhost:4000/api

Frontend

Ir al directorio del frontend:

cd frontend


Instalar dependencias:

npm install


Ejecutar la app:

npm start


El frontend correrá en: http://localhost:3000

4. Dependencias y scripts

Backend:

npm install → Instala dependencias

npx prisma migrate dev → Aplica migraciones a la base de datos

npm run start:dev → Ejecuta el servidor en modo desarrollo

Frontend:

npm install → Instala dependencias

npm start → Ejecuta la app en modo desarrollo

5. Estructura de carpetas
backend/
  src/
    tasks/
      dto/
        create-task.dto.ts
        update-task.dto.ts
      tasks.controller.ts
      tasks.service.ts
    main.ts
    prisma.service.ts
frontend/
  src/
    components/
      TaskForm.tsx      # Formulario para crear/editar tareas
      TaskList.tsx      # Lista de tareas
      api.ts            # Funciones para conectar con backend (GET, POST, PUT, DELETE)
      types.ts          # Tipos TypeScript para Task
    App.tsx
    index.tsx

6. Flujo de la aplicación

El frontend envía solicitudes HTTP al backend mediante Axios. Las tareas se crean, actualizan o eliminan desde el frontend y se almacenan en la base de datos SQLite gestionada por Prisma. Los errores se muestran en pantalla si alguna petición falla.

7. Funcionalidades del proyecto

Listar tareas: Muestra todas las tareas registradas.

Crear tarea: Agrega nuevas tareas con título, descripción, prioridad, estado y fecha límite.

Editar tarea: Actualiza cualquier dato de una tarea existente.

Eliminar tarea: Borra tareas del sistema.

Validaciones: Título obligatorio, descripción opcional, estados y prioridades controladas.

Manejo de errores HTTP: Mensajes si falla alguna petición al backend.

Documentación Swagger: Para probar y validar todas las rutas del backend.

El formulario de creación/edición valida que el título no esté vacío y que la prioridad y estado sean válidos. Si alguna petición al backend falla, se muestra un mensaje de error en la interfaz.

8. Modelo de datos

Campo	Tipo	Notas
id	string (uuid)	Generado automáticamente por backend
title	string	Obligatorio, 1–100 caracteres
description	string	Opcional, 0–500 caracteres
status	enum	'todo', 'in_progress', 'done'. Por defecto 'todo'
priority	enum	'low', 'medium', 'high'. Por defecto 'medium'
dueDate	ISO date string	Opcional
createdAt	datetime	Autogestionado por backend
updatedAt	datetime	Autogestionado por backend

La base de datos SQLite se encuentra en backend/dev.db. Todos los cambios realizados en las tareas se almacenan allí.

9. API Endpoints (Backend)

POST /tasks → Crear tarea

GET /tasks → Listar todas las tareas

GET /tasks/:id → Obtener tarea por ID

PATCH /tasks/:id → Actualizar tarea

DELETE /tasks/:id → Eliminar tarea

Swagger documenta todas estas rutas en: http://localhost:4000/api

10. Notas finales

Código organizado y comentado.

Diseño responsive y limpio.

Backend y frontend comunicados correctamente.

Validaciones y manejo de errores implementados.

README con toda la información para ejecutar el proyecto correctamente.
