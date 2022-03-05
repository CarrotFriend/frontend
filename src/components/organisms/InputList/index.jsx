import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../../atoms/Input';

const flex = css`
  ${({ flex }) =>
    flex === 'column' &&
    css`
      flex-direction: column;
    `}
`;

const StyledInputList = styled.div`
  display: flex;
  ${flex}
`;

const InputList = ({ list, flex }) => {
  return (
    <StyledInputList flex={flex}>
      {list.map(({ type, placeholder, name, value, size }) => {
        return (
          <Input
            key={name}
            value={value}
            type={type}
            placeholder={placeholder}
            name={name}
            size={size}
          />
        );
      })}
    </StyledInputList>
  );
};

export default InputList;
