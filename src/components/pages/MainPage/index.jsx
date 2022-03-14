import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import ButtonList from '../../organisms/ButtonList';
import HomePage from '../HomePage';
import DetailPage from '../DetailPage';
import WritePage from '../WritePage';

import { Route, Routes, useNavigate } from 'react-router-dom';

const navBtns = [
  {
    size: 'small',
    color: 'pink',
    child: '내정보',
  },
  {
    size: 'small',
    color: 'pink',
    child: '쪽지',
  },
  {
    size: 'small',
    color: 'pink',
    child: '알림',
  },
];
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

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const clickTitle = () => {
    navigate('/');
  };
  return (
    <StyledMainPage>
      <Header>
        <Text size="large" color="white">
          공백공백공백
        </Text>
        <Text size="large" isBtn="true" clickHandler={clickTitle}>
          당근친구
        </Text>
        <ButtonList list={navBtns} flex="row" />
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </StyledMainPage>
  );
};

export default MainPage;
