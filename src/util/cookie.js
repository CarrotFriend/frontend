import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const option = {
  httpOnly: true,
  secure: true,
};
export const setCookie = (name, value) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};
