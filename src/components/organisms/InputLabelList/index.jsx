import React, { Children } from 'react';
import styled, { css } from 'styled-components';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

const flex = css`
  ${({ flex }) =>
    (flex === 'column' || flex === 'column-reverse') &&
    css`
      flex-direction: ${flex};
      // & + & {
      //   margin-top: 2rem;
      // }
    `}
  ${({ flex }) =>
    (flex === 'row' || flex === 'row-reverse') &&
    css`
      flex-direction: ${flex};
      // & + & {
      //   margin-left: 2rem;
      // }
    `}
`;

const StyledInputLabel = styled.div`
  display: flex;
  ${flex}
  width: 34%;
  justify-content: flex-start;
`;

const StyledInputLabelList = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flex}
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InputLabelList = ({ flex, isReversed, labelList, inputList }) => {
  return (
    <StyledInputLabelList flex={flex.listDirection}>
      {labelList.map(({ child, ...label }, idx) => {
        const { name, ...inputRest } = inputList[idx];
        return (
          <StyledInputLabel key={name + 99} flex={flex.contentDirection}>
            {isReversed ? (
              <>
                <Label {...label}>{child}</Label>
                <Input name={name} {...inputRest} />
              </>
            ) : (
              <>
                <Input name={name} {...inputRest} />
                <Label {...label}>{child}</Label>
              </>
            )}
          </StyledInputLabel>
        );
      })}
    </StyledInputLabelList>
  );
};

export default InputLabelList;
