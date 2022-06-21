import React from 'react';
import styled, { css } from 'styled-components';

const onlyBottomline = css`
  ${({ onlyBottomline }) =>
    onlyBottomline &&
    css`
      border: none;
      &:focus {
        outline: none;
      }
    `}
`;
const inputSize = css`
  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 25rem;
      height: 2.5rem;
      font-size: 1.25rem;
      padding-left: 0.7rem;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 50vw;
      height: 3rem;
      font-size: 1.5rem;
      padding: 0 1rem;
    `}
  ${({ size }) =>
    size === 'checkbox' &&
    css`
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    `}
`;
const _customStyles = css`
  ${({ customStyles }) =>
    // custom할 Style의 배열을 받아 reduce 함수로 하나의 css 문자열로 만듦
    customStyles &&
    customStyles.reduce((acc, { key, value }) => {
      return (
        acc +
        `
          ${key}: ${value};
        `
      );
    }, css``)}
`;
const StyledInput = styled.input`
  height: 2rem;
  font-size: 0.75rem;
  padding-left: 0.5rem;
  ${inputSize}
  ${onlyBottomline}
  ${_customStyles}
`;

const Input = ({ value, setValue, code, ...rest }) => {
  const handle = (e) => {
    setValue && setValue(e.target.value);
  };
  return (
    <StyledInput data-code={code} value={value} {...rest} onChange={handle} />
  );
};

export default Input;
