import React from 'react';
import styled, { css } from 'styled-components';

const inputSize = css`
  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 30rem;
      height: 2rem;
      font-size: 1rem;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 40rem;
      height: 4rem;
      font-size: 1.5rem;
    `}
`;
const StyledInput = styled.input`
  width: 20rem;
  height: 2rem;
  font-size: 0;75rem;
  padding-left: 2rem;
  ${inputSize}
`;

const Input = ({ value, setValue, ...rest }) => {
  const handle = (e) => {
    setValue(e.target.value);
  };
  return <StyledInput value={value} {...rest} onChange={handle} />;
};

export default Input;
