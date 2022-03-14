import React from 'react';
import styled, { css } from 'styled-components';

const isBtn = css`
  ${({ isBtn }) =>
    isBtn &&
    css`
      cursor: pointer;
    `}
`;
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
  display: flex;
  align-items: center;
  ${fontSize}
  ${colorStyle}
  ${isBtn}
`;

const Text = ({ children, ...rest }) => {
  const { size, color, isBtn, clickHandler } = rest;
  return (
    <StyledText size={size} color={color} isBtn={isBtn} onClick={clickHandler}>
      {children}
    </StyledText>
  );
};

export default Text;
