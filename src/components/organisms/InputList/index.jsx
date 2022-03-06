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

const InputList = ({ flex, list }) => {
  console.log(list);
  return (
    <StyledInputList flex={flex}>
      {list.map(({ name, ...rest }) => {
        return <Input key={name} name={name} {...rest} />;
      })}
    </StyledInputList>
  );
};

export default InputList;
