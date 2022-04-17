const invalidate = () => {
  localStorage.removeItem('accessToken');
  window.location.href = '/login';
};

export default invalidate;
