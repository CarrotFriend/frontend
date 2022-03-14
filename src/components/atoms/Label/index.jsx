import React from 'react';
import styled, { css } from 'styled-components';

const isBtn = css`
  ${({ isBtn }) =>
    isBtn &&
    css`
      cursor: pointer;
    `}
`;

const fontSize = css`
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 1.5rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 3rem;
    `}
`;

const StyledLabel = styled.label`
  ${fontSize}
  ${isBtn}
`;

const Label = ({ children, target, ...rest }) => {
  return (
    <StyledLabel htmlFor={target} {...rest}>
      {children}
    </StyledLabel>
  );
};

export default Label;
