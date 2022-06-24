import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ButtonList from '../../organisms/ButtonList';
import data from './data';
import reselectCategory from './reselectCategory';

const ProfilePage = () => {
  const navigate = useNavigate();

  const list1 = [
    {
      ...data[0][0],
      clickBtn: () => navigate('/mypost'),
    },
    {
      ...data[0][1],
      clickBtn: () => reselectCategory(navigate),
    },
    {
      ...data[0][2],
      clickBtn: () => navigate('/account_edit'),
    },
  ];
  const list2 = [
    {
      ...data[1][0],
      clickBtn: () => navigate('/'),
    },
    {
      ...data[1][1],
      clickBtn: () => console.log('hoho'),
    },
  ];

  return (
    <StyledProfilePage>
      <ButtonList list={list1} flex="column" {...customStyles} />
      <ButtonList list={list2} flex="column" />
    </StyledProfilePage>
  );
};

const customStyles = {
  customStyles: [
    {
      key: 'height',
      value: '50vh',
    },
    {
      key: 'justify-content',
      value: 'space-evenly',
    },
  ],
};

const StyledProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 6rem;
`;

export default ProfilePage;
