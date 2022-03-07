import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

const flex = css`
  ${({ flex }) =>
    flex === 'column' &&
    css`
      flex-direction: column;
      & + & {
        margin-top: 2rem;
      }
    `}
  ${({ flex }) =>
    flex === 'row' &&
    css`
      & + & {
        margin-left: 2rem;
      }
    `}
`;

const StyledInputLabel = styled.div`
  display: flex;
  ${flex}
`;

const StyledInputLabelList = styled.div`
  display: flex;
  ${flex}
`;

const InputLabelList = ({ flex, labelList, inputList }) => {
  return (
    <StyledInputLabelList flex={flex}>
      {labelList.map((label, idx) => {
        const { name, ...inputRest } = inputList[idx];
        console.log(name, inputRest);
        return (
          <StyledInputLabel key={name + 99} flex={flex}>
            <Label {...label} />
            <Input name={name} {...inputRest} />
          </StyledInputLabel>
        );
      })}
    </StyledInputLabelList>
  );
};

export default InputLabelList;
