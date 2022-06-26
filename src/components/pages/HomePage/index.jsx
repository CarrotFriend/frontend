import React from 'react';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import TextList from '../../organisms/TextList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQueries } from 'react-query';
import getBoardData from './getBoardData';
import LoadingBox from '../../organisms/LoadingBox';
import getTagStr from '../../../util/getTagStr';
import getWhatTimeBefore from '../../../util/getWhatTimeBefore';

const HomePage = () => {
  const navigate = useNavigate();
  const { categoryList } = JSON.parse(localStorage.getItem('user'));
  const results = useQueries(
    categoryList.map(({ code }) => {
      return {
        queryKey: ['categoryList', code],
        queryFn: () => getBoardData(code),
        retry: 0,
        enabled: true,
        refetchOnWindowFocus: false,
      };
    })
  );

  // 아무 카테고리도 선택되지 않았을 때
  if (results.length === 0) {
    return (
      <NoCategory>상단의 '내정보'에서 카테고리를 선택해주세요.</NoCategory>
    );
  }

  // 에러 처리
  results.forEach(({ isError }) => {
    if (isError) {
      window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
      navigate('/login');
      return;
    }
  });

  // results를 하나의 posts 배열 안에 넣기
  const posts = results.reduce((acc, { data }) => {
    data?.data?.data.forEach((post) => acc.push(post));
    return acc;
  }, []);

  // posts 배열 날짜순으로 내림차순
  posts.sort((a, b) => {
    if (a.regDate < b.regDate) return 1;
    if (a.regDate > b.regDate) return -1;
    return 0;
  });

  // 데이터 로딩
  const loading = results.some((result) => result.isLoading);
  if (loading) {
    return <LoadingBox />;
  }
  return (
    <StyledHomePage>
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

const NoCategory = styled.div`
  margin-top: 40vh;
  font-size: 3vw;
  text-align: center;
`;

const FixedButton = styled.div`
  position: fixed;
  top: 70%;
  left: 75%;
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

export default HomePage;
