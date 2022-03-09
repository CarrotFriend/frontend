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

const StyledText = styled.div`
  ${fontSize}
`;

const Text = ({ props }) => {
  return (
    <StyledText size={props.size} color={props.color}>
      {props.text}
    </StyledText>
  );
};

export default Text;
