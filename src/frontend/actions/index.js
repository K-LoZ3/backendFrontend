import axios from 'axios'; // Para las peticiones en registerUser.

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const searchRequest = (payload) => ({
  type: 'SEARCH_REQUEST',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

// Creamos un action que tiene una funcion. En este caso hace
// el llamado a una api para crear el user y al final nos regresa
// la data. Thunk identifica este tipo de actions que tienen una
// funcion internamente. Si el action no la tiene thunk no hace nada.
export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => { // Creamos la funcion que recive un dispatch.
    // Con axios hacemos una peticion a la api para crear el user.
    // Enviamos el payload ya que es la info que nos llega del frontend
    // cuando completa el formulario. Cuando la peticion finaliza nos retorna la data
    // como respuesta. Con ayuda del dispatch ejecutamos el action para
    // el registro de user que estaba originalmente que permitia manejar los
    // registros. Por ultimo, redirigimos al usuario a la ruta en enviamos
    // como segundo parametro.
    axios.post('/auth/sign-up', payload)
    .then(({ data }) => dispatch(registerRequest(data)))
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch(error => dispatch(setError(error)));
  }
}