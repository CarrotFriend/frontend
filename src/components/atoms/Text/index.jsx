import React from 'react';
import './Text.css';

const Text = (props) => {
  return <div data-testid="text">{props.text}</div>;
};

export default Text;
