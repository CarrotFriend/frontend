import React from 'react';
import styled, { css } from 'styled-components';

const colorStyle = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      color: ${selected};
    `;
  }}
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

const StyledText = styled.div`
  ${fontSize}
  ${colorStyle}
`;

const Text = ({ children, ...rest }) => {
  return (
    <StyledText size={rest.size} color={rest.color}>
      {children}
    </StyledText>
  );
};

export default Text;
