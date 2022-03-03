import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyle = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;
const sizeStyle = css`
  ${(props) =>
    props.size == 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.size == 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
  
    ${(props) =>
    props.size == 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 0 1rem;

  /* 크기 */
  ${sizeStyle}

  /* 색상 */
  ${colorStyle}
`;

const Button = ({ children, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'blue',
};

export default Button;
