# Primer examen de Tecnologías Web II

Backend desarrollado con Node.js, Express.js y MongoDB para gestionar las colecciones `Usuarios` y `Productos`.

## Requisitos
- Node.js (v22)
- MongoDB (local o en la nube)
- Postman o Insomnia (para pruebas)

## Instalación
1. Clonar este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd PrimerExamen

2. Instalar las dependencias:
   ```bash
   npm install


3. Modificar el archivo .env duplicado de acuerdo a las necesidades con el ejemplo:
   ```bash
   MONGO_URI=mongodb+srv://<db_username>:<db_password>@bdprimerexamen.oegib.mongodb.net/
   PORT=3000

4. Iniciar el servidor:
   ```bash
   npm start


Lista de URLs disponibles en la API (prefijo: `/api`). Todas las rutas están diseñadas para gestionar usuarios, productos, estadísticas y un contador de operaciones. Usa `http://localhost:3000` como base URL (ajusta el puerto según el valor de `PORT` declarado en el `.env`).

- **POST /api/usuarios** - Crea un nuevo usuario con los datos proporcionados en el cuerpo de la solicitud.
- **GET /api/usuarios** - Devuelve una lista de todos los usuarios registrados en la base de datos.
- **PUT /api/usuarios/:id** - Actualiza los datos de un usuario existente identificado por su ID.
- **DELETE /api/usuarios/:id** - Elimina un usuario específico de la base de datos usando su ID.
- **POST /api/productos** - Crea un nuevo producto con los detalles enviados en el cuerpo de la solicitud.
- **GET /api/productos** - Lista todos los productos almacenados en la base de datos.
- **PUT /api/productos/:id** - Actualiza un producto existente identificado por su ID.
- **DELETE /api/productos/:id** - Elimina un producto específico de la base de datos usando su ID.
- **GET /api/contadores** - Devuelve el número total de productos y usuarios registrados.
- **GET /api/operaciones** - Muestra el contador de operaciones realizadas en la API.

**Nota**: Los endpoints con `:id` requieren un ID válido de MongoDB en la URL. Las solicitudes `POST` y `PUT` deben incluir un cuerpo JSON con los campos requeridos.
