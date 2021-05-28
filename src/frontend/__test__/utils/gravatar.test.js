import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'carlos@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/db1e0a3750e0399df3eeee808187d9b4';
  // Esta url sale de la pagina de gravatar. Esta es la imagen que nos devuelve
  // cuando usamos gravatar.

  expect(gravatarUrl).toEqual(gravatar(email));
})