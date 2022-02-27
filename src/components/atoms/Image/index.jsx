import React from 'react';
import './Image.css';
import defaultImg from '../../../images/defaultImg.png';

const handleSrcError = (event) => {
  event.onError = null;
  event.currentTarget.src = defaultImg;
};

// 나중에 이 컴포넌트 덮어 씌우는 컴포넌트에서 src 검사 다 하고 원래 이미지든 defualtImg든 가져다만 주게 구현 하자
const Image = (props) => {
  return <img src={props.src} alt={props.alt} onError={handleSrcError} />;
};

export default Image;
