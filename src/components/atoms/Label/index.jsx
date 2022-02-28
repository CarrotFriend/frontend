import React from 'react';
import './Label.css';

const Label = ({ text, linked }) => {
  return <label for={linked}>{text}</label>;
};

export default Label;
