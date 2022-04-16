import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('accessToken');
  return loggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
