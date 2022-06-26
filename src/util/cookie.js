import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const refreshTokenOption = {
  // httpOnly: true,
  // secure: true,
};
export const setRefreshToken = (value) => {
  return cookies.set('refreshToken', value, { ...refreshTokenOption });
};

export const getRefreshToken = () => {
  return cookies.get('refreshToken');
};
