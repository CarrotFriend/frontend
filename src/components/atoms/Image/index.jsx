import React from 'react';
import './Image.css';
import defaultImg from '../../../images/defaultImg.png';
import styled, { css } from 'styled-components';

const imgSize = css`
  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 4rem;
      height: 4rem;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 6rem;
      height: 6rem;
    `}
    ${({ size }) =>
    size === 'xlarge' &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;
const StyledImage = styled.img`
  width: 2rem;
  height: 2rem;
  ${imgSize}
`;

const handleSrcError = (event) => {
  event.onError = null;
  event.currentTarget.src = defaultImg;
};

// 나중에 이 컴포넌트 덮어 씌우는 컴포넌트에서 src 검사 다 하고 원래 이미지든 defualtImg든 가져다만 주게 구현 하자
const Image = ({ src, alt, size }) => {
  return (
    <StyledImage src={src} alt={alt} size={size} onError={handleSrcError} />
  );
};

export default Image;
