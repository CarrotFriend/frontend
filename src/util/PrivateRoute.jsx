import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('user');
  return loggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
