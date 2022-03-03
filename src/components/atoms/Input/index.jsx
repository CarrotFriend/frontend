import React from 'react';
import './Input.css';

const Input = ({ type, name, placeholder, accept }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} accept={accept} />
  );
};

export default Input;
