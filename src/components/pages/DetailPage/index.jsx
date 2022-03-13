import React, { useState } from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import TextList from '../../organisms/TextList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';

const commonTextAttribue = {
  // size: 'small',
  color: '',
};

const FixedButton = styled.div`
  position: fixed;
  top: 70%;
  left: 75%;
`;

const Header = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid gray;
  background-color: white;
  padding: 1rem 0;
  z-index: 1;
`;

const ContentList = styled.div`
  display: flex;
  width: 50%;
  border-bottom: 0.5px solid gray;
  cursor: pointer;
  margin-top: 1rem;
  padding-bottom: 1rem;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailPage = () => {
  return <StyledDetailPage>디테일 페이지</StyledDetailPage>;
};

export default DetailPage;
