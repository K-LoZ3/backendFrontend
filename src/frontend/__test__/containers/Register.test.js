/*
  Probando el componente de Register
*/
import React from 'react';
import { mount } from 'enzyme';
import Register from '../../containers/Register';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Register/>', () => {
  test('Register form', () => {
    const preventDefault = jest.fn();
    const register = mount(
      <ProviderMock>
        <Register/>
      </ProviderMock>
    );

    // Simulamos que le damos a submit (boton de enviar form).
    register.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(1);

    register.unmount();
  });
});