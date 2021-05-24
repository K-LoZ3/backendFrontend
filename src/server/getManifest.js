// Importamos fs para leer el archivo manifest.js
import fs from 'fs';

const getManifest = () => {
  try {
    // Leemos el archivo manifest.json y retornamos los datos parseados de un json a objeto.
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (err) {
    console.log(err); // Manejamos el error.
  }
}

// Exportamos.
export default getManifest;