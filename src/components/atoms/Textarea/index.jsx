import React from 'react';
import styled, { css } from 'styled-components';

const fontSize = css`
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 1.3rem;
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

const StyledTextarea = styled.textarea`
  display: flex;
  resize: none;
  width: 100%;
  height: 10rem;
  border: none;
  &:focus {
    outline: none;
  }
  padding-left: 1rem;
  font-weight: 600;
  font-family: 'NanumGothic', '나눔고딕', '굴림', Gulim, '돋움', Dotum;
  ${fontSize}
`;

const Textarea = ({ value, setValue, ...rest }) => {
  const handle = (e) => {
    setValue && setValue(e.target.value);
  };
  return <StyledTextarea {...rest} onChange={handle} />;
};

export default Textarea;
