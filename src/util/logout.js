const logout = () => {
  localStorage.removeItem('accessToken');
  window.location.href = '/login';
};

export default logout;
