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
   MONGO_URI=mongodb://localhost:27017/sample
   PORT=3000

4. Iniciar el servidor:
   ```bash
   npm start


# Lista de endpoints de la API

POST /api/usuarios - Crear un usuario
GET /api/usuarios - Obtener todos los usuarios
PUT /api/usuarios/:id - Actualizar un usuario por ID
DELETE /api/usuarios/:id - Eliminar un usuario por ID
POST /api/productos - Crear un producto
GET /api/productos - Obtener todos los productos
PUT /api/productos/:id - Actualizar un producto por ID
DELETE /api/productos/:id - Eliminar un producto por ID
GET /api/contadores - Obtener conteos de productos y usuarios
GET /api/operaciones - Obtener el contador de operaciones
