import React, { useState } from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import TextList from '../../organisms/TextList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const commonTextAttribue = {
  // size: 'small',
};
const navBtns = [
  {
    size: 'small',
    color: 'pink',
    child: '내정보',
  },
  {
    size: 'small',
    color: 'pink',
    child: '채팅',
  },
  {
    size: 'small',
    color: 'pink',
    child: '알림',
  },
];
const dummyData = [
  {
    ...commonTextAttribue,
    id: '1',
    title: '궁동 밥 드실분',
    image: '',
    regdate: '2022-01-01',
    tag: '#궁동 #맛집',
  },
  {
    ...commonTextAttribue,
    id: '2',
    title: '자전거 엑스포!',
    image: '',
    regdate: '2022-01-24',
    tag: '#엑스포 #자전거',
  },
  {
    ...commonTextAttribue,
    id: '3',
    title: '모각코 모집',
    image: '',
    regdate: '2022-02-05',
    tag: '#모각코',
  },
  {
    ...commonTextAttribue,
    id: '4',
    title: '롤 동료 모집',
    image: '',
    regdate: '2022-03-07',
    tag: '#롤 #게임 #승급전',
  },
  {
    ...commonTextAttribue,
    id: '5',
    title: '궁동 밥 드실분',
    image: '',
    regdate: '2022-01-01',
    tag: '#궁동 #맛집',
  },
  {
    ...commonTextAttribue,
    id: '6',
    title: '자전거 엑스포!',
    image: '',
    regdate: '2022-01-24',
    tag: '#엑스포 #자전거',
  },
  {
    ...commonTextAttribue,
    id: '7',
    title: '모각코 모집',
    image: '',
    regdate: '2022-02-05',
    tag: '#모각코',
  },
  {
    ...commonTextAttribue,
    id: '8',
    title: '롤 동료 모집',
    image: '',
    regdate: '2022-03-07',
    tag: '#롤 #게임 #승급전',
  },
  {
    ...commonTextAttribue,
    id: '9',
    title: '궁동 밥 드실분',
    image: '',
    regdate: '2022-01-01',
    tag: '#궁동 #맛집',
  },
  {
    ...commonTextAttribue,
    id: '10',
    title: '자전거 엑스포!',
    image: '',
    regdate: '2022-01-24',
    tag: '#엑스포 #자전거',
  },
  {
    ...commonTextAttribue,
    id: '11',
    title: '모각코 모집',
    image: '',
    regdate: '2022-02-05',
    tag: '#모각코',
  },
  {
    ...commonTextAttribue,
    id: '12',
    title: '롤 동료 모집',
    image: '',
    regdate: '2022-03-07',
    tag: '#롤 #게임 #승급전',
  },
];

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

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const images = [...dummyData.map(({ image, ...rest }, idx) => image)];
  return (
    <StyledHomePage>
      <ContentBox>
        {dummyData.map(({ image, ...rest }, idx) => {
          const { id, title, regdate, tag } = rest;
          const dataList = [
            { id: id, text: title },
            { id: id + 1, text: regdate },
            { id: id + 2, text: tag },
          ];
          return (
            <ContentList
              key={images[idx] + idx}
              onClick={() => navigate('/detail')}
            >
              <Image src={images[idx]} alt="content" size="large" />
              <TextList list={dataList} flex="column" />
            </ContentList>
          );
        })}
        <FixedButton>
          <Button
            size="medium"
            color="pink"
            clickBtn={() => navigate('/write')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </Button>
        </FixedButton>
      </ContentBox>
    </StyledHomePage>
  );
};

export default HomePage;
