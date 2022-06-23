import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import customStyles from '../../../util/customStyles';

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
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 10rem;
      height: 3rem;
      font-size: 1.25rem;
      & + & {
        margin: 1rem;
      }
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 5rem;
      height: 2.25rem;
      font-size: 1rem;
      & + & {
        margin: 0.75rem;
      }
    `}
  
    ${({ size }) =>
    size === 'small' &&
    css`
      width: 3rem;
      height: 1.75rem;
      font-size: 0.75rem;
      & + & {
        margin: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  outline: none;
  border: none;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 크기 */
  ${sizeStyle}

  /* 색상 */
  ${colorStyle}

  ${customStyles}
`;

const Button = ({ children, clickBtn, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={clickBtn}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'pink',
  size: 'small',
};

export default Button;
