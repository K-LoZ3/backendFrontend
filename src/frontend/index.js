import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom'; // Agregamos para poder incluir el historial.
import { createBrowserHistory } from 'history'; // Importamos para crear el historial dentro del frontend.
import reducer from './reducers';
import App from './routes/App';

const history = createBrowserHistory(); // Creamos el historial.
const preloadedState = window.__PRELOADED_STATE__; // Con esto accedemos al preload que se encrusto en el html del servidor.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// Usamos el preloadedState para no crear un store distinto.
const store = createStore(reducer, preloadedState, composeEnhancers);

delete window.__PRELOADED_STATE__;
// Esto porque el estado queda en el navegador. Si el usuario entra en la consola del navegador
// puede acceder a esta variable window.__PRELOADED_STATE__ y ver todo el stado de la app.
// Debemos borrarla despues de usarla para que esto no sea un problema.

// Cambiamos render por hydrate ya que no queremos que se renderice el react otra vez.
// Para resumir toda la configuracion en README.md
ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
