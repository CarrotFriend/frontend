import React from 'react';
import { Navigate } from 'react-router-dom';

const LoggedinPrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('user');
  return loggedIn ? <Navigate to="/" /> : children;
};

export default LoggedinPrivateRoute;
