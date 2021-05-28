import { setFavorite, loginRequest } from '../../actions';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  test('set favorite', () => {
    const payload = movieMock;
    const expectAction = {
      type: 'SET_FAVORITE',
      payload,
    }

    expect(setFavorite(payload)).toEqual(expectAction);
  });

  test('Login', () => {
    const payload = {
      email: 'test@test.com',
      password: 'password',
    }
    
    const expectAction = {
      type: 'LOGIN_REQUEST',
      payload,
    }

    expect(loginRequest(payload)).toEqual(expectAction);
  })
});