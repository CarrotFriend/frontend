import React from 'react';
import styled from 'styled-components';

const LoadingBox = () => {
  return <LoadingDiv>로딩 중입니다...</LoadingDiv>;
};

const LoadingDiv = styled.div`
  margin-top: 40vh;
  font-size: 3vw;
  text-align: center;
`;

export default LoadingBox;
