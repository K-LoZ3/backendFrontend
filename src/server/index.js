require('ignore-styles');
require('@babel/polyfill'); // Para poder trabajar con async y await sin problemas.

// Instalamos @babel/register para usarlo en el servidor.
// Lo cargamos con los presets para que tenga toda la funcionalidad
// necesaria para react. Esta dependencia se insatala como  desarrollo.
require('@babel/register')({
  presets: [
  "@babel/preset-env",
  "@babel/preset-react"
  ],
});

// Con esto le decimos al servidor de donde estan las imagenes y como se llaman.
// Para esto necesitamos el file-loader este en la version 5.1.0 ya que la version 6 no funciona.
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

// Importamos el archivo server dentro de index.
require('./server');