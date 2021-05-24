// importamos dotenv para el manejo de variables de entorno.
import dotenv from 'dotenv';

// Con esto configuramos las variables.
// Basicamente busca en el proyecto el archivo .env y lo configura para usar
// estas variables aqui.
dotenv.config();

// Estas salen de process.env ya que con dotenv configuramos para que esto
// fuera posible.
const config = {
    env: process.env.ENV,
    port: process.env.PORT,
    apiUrl: process.env.API_URL,
}

// Exportamos para usarlas en los demas archivos.
export default {
    config: config,
}