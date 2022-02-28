import React from 'react';
import './Input.css';

const Input = ({ type, id, placeholder, accept }) => {
  return (
    <input type={type} id={id} placeholder={placeholder} accept={accept} />
  );
};

export default Input;
