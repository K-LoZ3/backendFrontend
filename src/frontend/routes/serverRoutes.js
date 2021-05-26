// Importamos todos los containers para crear la misma estructura de
// Rutas del lado del servidor.
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

// Creamos un arreglo con toda las rutas.
// Lo cambiamos a una funcion ya que queremos revisar si hay un user
// antes de establecer lo que se mostrara en cada ruta.
const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: isLogged ? Home : Login,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: Register,
    },
    {
      exact: true,
      path: '/player/:id',
      component: isLogged ? Player : Login,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
}

export default serverRoutes;
