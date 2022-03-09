import React from 'react';
import styled, { css } from 'styled-components';

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
  ${fontSize}// margin-bottom: 0.5rem;
`;

const Label = ({ child, target, ...rest }) => {
  return (
    <StyledLabel htmlFor={target} {...rest}>
      {child}
    </StyledLabel>
  );
};

export default Label;
