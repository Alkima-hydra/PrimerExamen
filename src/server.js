import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from './config/database.js';
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en ${PORT}`);
    });
  } catch (error) {
    console.error('Error al momento de iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();