import React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import TextList from '../../organisms/TextList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingBox from '../../organisms/LoadingBox';
import getTagStr from '../../../util/getTagStr';
import getWhatTimeBefore from '../../../util/getWhatTimeBefore';
import getMyPosts from './getMyposts';

const MypostPage = () => {
  const navigate = useNavigate();

  const { isError, isLoading, data } = useQuery(
    'myposts',
    () => getMyPosts(navigate),
    {
      retry: 0,
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
    navigate(-1);
  }

  if (isLoading) {
    return <LoadingBox />;
  }

  const posts = data.data.data;
  posts.sort((a, b) => {
    if (a.regDate < b.regDate) return 1;
    if (a.regDate > b.regDate) return -1;
    return 0;
  });

  return (
    <StyledMypostPage>
      <HeaderBox>
        <Text size="medium" color="gray">
          내가 작성한 게시글
        </Text>
      </HeaderBox>
      <ContentBox>
        {posts.map(({ imageList, ...rest }, idx) => {
          const { postId, title, regDate, tag } = rest;
          const dataList = [
            { id: postId, text: title },
            { id: postId + 1, text: getWhatTimeBefore(regDate) },
            { id: postId + 2, text: getTagStr(tag) },
          ];
          return (
            <ContentList
              key={title + idx}
              onClick={() => navigate('/detail', { state: { postId } })}
            >
              <Image src={imageList[0]?.src} alt="content" size="large" />
              <TextList list={dataList} flex="column" />
            </ContentList>
          );
        })}
      </ContentBox>
    </StyledMypostPage>
  );
};

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
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem 0;
`;

const StyledMypostPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  margin-top: 6rem;
`;

export default MypostPage;
