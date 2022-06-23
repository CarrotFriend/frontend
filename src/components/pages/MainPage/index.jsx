import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text';
import ButtonList from '../../organisms/ButtonList';
import HomePage from '../HomePage';
import DetailPage from '../DetailPage';
import WritePage from '../WritePage';
import ProfilePage from '../ProfilePage';
import CategoryPage from '../CategoryPage';
import MypostPage from '../MypostPage';
import AccountEditPage from '../AccountEditPage';

import { Route, Routes, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const navBtns = [
    {
      size: 'small',
      color: 'pink',
      child: '내정보',
      clickBtn: () => navigate('/profile'),
    },
    {
      size: 'small',
      color: 'pink',
      child: '쪽지',
    },
  ];

  return (
    <StyledMainPage>
      <Header>
        <Text size="large" color="white">
          공백공백
        </Text>
        <Text size="large" isBtn="true" clickHandler={() => navigate('/')}>
          당근친구
        </Text>
        <ButtonList list={navBtns} flex="row" />
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mypost" element={<MypostPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/account_edit" element={<AccountEditPage />} />
      </Routes>
    </StyledMainPage>
  );
};

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

export default MainPage;
