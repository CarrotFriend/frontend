import React from 'react';
import Button from '../../atoms/Button';
import styled, { css } from 'styled-components';
import customStyles from '../../../util/customStyles';

const flex = css`
  ${({ flex }) =>
    flex === 'column' &&
    css`
      flex-direction: column;
    `}
  ${({ flex }) => flex === 'row' && css``}
`;

const StyledButtonList = styled.div`
  display: flex;
  ${flex}
  align-items: center;

  ${customStyles}
`;
const ButtonList = ({ list, flex, ...rest1 }) => {
  return (
    <StyledButtonList flex={flex} {...rest1}>
      {list.map(({ child, ...rest2 }) => {
        return (
          <Button key={child} {...rest2}>
            {child}
          </Button>
        );
      })}
    </StyledButtonList>
  );
};

export default ButtonList;
