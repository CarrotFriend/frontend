import React from 'react';
import Button from '../../atoms/Button';
import styled, { css } from 'styled-components';

const flex = css`
  ${({ flex }) =>
    flex === 'column' &&
    css`
      flex-direction: column;
      margin-top: 2.5rem;
    `}
  ${({ flex }) =>
    flex === 'row' &&
    css`
      margin-left: 2.5rem;
    `}
`;

const StyledButtonList = styled.div`
  display: flex;
  ${flex}
  align-items: center;
`;
const ButtonList = ({ list, flex }) => {
  return (
    <StyledButtonList flex={flex}>
      {list.map(({ child, ...rest }) => {
        return (
          <Button key={child} {...rest}>
            {child}
          </Button>
        );
      })}
    </StyledButtonList>
  );
};

export default ButtonList;
