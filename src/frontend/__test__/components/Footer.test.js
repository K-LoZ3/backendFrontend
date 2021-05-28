import React from 'react';
import { shallow } from 'enzyme'; // Para montar el componente y poder hacer las pruebas.
import Footer from '../../components/Footer'; // El componente.

// Descriccion de un grupo de pruebas (Grupo de pruebas).
describe('<Footer />', () => {
  // Montamos el componente para hacer las pruebas.
  // Lo hice con shallow ya que mount no me lo permitia.
  // En la clase era const footer = mount(<Footer />);
  const footer = shallow(<Footer />);

  // Prueba 1. Comprobamos que el componente si se este montando.
  // Que el componente tenga un nodo.
  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  // Comprobamos que tenga 3 etiquetas 'a'.
  test('Footer haves 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });
});