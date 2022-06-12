import React from 'react';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import TextList from '../../organisms/TextList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQueries } from 'react-query';
import getBoardData from './getBoardData';

const HomePage = () => {
  const navigate = useNavigate();
  const { categoryList } = JSON.parse(localStorage.getItem('user'));
  const results = useQueries(
    categoryList.map(({ code }) => {
      return {
        queryKey: ['categoryList', code],
        queryFn: () => getBoardData(code),
        // config: {
        // retry: 0,
        // enabled: true,
        //   refetchOnWindowFocus: false,
        // },
        retry: 0,
        enabled: true,
        refetchOnWindowFocus: false,
      };
    })
  );

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

  // 이거로 데이터 로딩 구현하면 됨
  const loading = results.some((result) => result.isLoading);
  if (loading) {
    return (
      <>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
      </>
    );
  }
  // const images = [...dummyData.map(({ image, ...rest }, idx) => image)];
  return (
    <StyledHomePage>
      <ContentBox>
        {posts.map(({ imageList, ...rest }, idx) => {
          const { id, title, regDate, tag } = rest;
          const tagStr = tag.reduce((acc, curr) => {
            acc += '#' + curr.text + ' ';
            return acc;
          }, '');
          const dataList = [
            { id: id, text: title },
            { id: id + 1, text: regDate },
            { id: id + 2, text: tagStr },
          ];
          console.log(imageList);
          return (
            <ContentList
              key={imageList[0] + idx}
              onClick={() => navigate('/detail')}
            >
              <Image src={imageList[0]?.src} alt="content" size="large" />
              <TextList list={dataList} flex="column" />
            </ContentList>
          );
        })}
        {/* 더미데이터용 코드. 나중에 밑의 더미데이터와 같이 삭제 */}
        {/* {dummyData.map(({ image, ...rest }, idx) => {
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
        })} */}
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

// 더미데이터. 나중에 삭제
// const commonTextAttribue = {
//   // size: 'small',
// };
// const dummyData = [
//   {
//     ...commonTextAttribue,
//     id: '1',
//     title: '궁동 밥 드실분',
//     image: '',
//     regdate: '2022-01-01',
//     tag: '#궁동 #맛집',
//   },
//   {
//     ...commonTextAttribue,
//     id: '2',
//     title: '자전거 엑스포!',
//     image: '',
//     regdate: '2022-01-24',
//     tag: '#엑스포 #자전거',
//   },
//   {
//     ...commonTextAttribue,
//     id: '3',
//     title: '모각코 모집',
//     image: '',
//     regdate: '2022-02-05',
//     tag: '#모각코',
//   },
//   {
//     ...commonTextAttribue,
//     id: '4',
//     title: '롤 동료 모집',
//     image: '',
//     regdate: '2022-03-07',
//     tag: '#롤 #게임 #승급전',
//   },
//   {
//     ...commonTextAttribue,
//     id: '5',
//     title: '궁동 밥 드실분',
//     image: '',
//     regdate: '2022-01-01',
//     tag: '#궁동 #맛집',
//   },
//   {
//     ...commonTextAttribue,
//     id: '6',
//     title: '자전거 엑스포!',
//     image: '',
//     regdate: '2022-01-24',
//     tag: '#엑스포 #자전거',
//   },
//   {
//     ...commonTextAttribue,
//     id: '7',
//     title: '모각코 모집',
//     image: '',
//     regdate: '2022-02-05',
//     tag: '#모각코',
//   },
//   {
//     ...commonTextAttribue,
//     id: '8',
//     title: '롤 동료 모집',
//     image: '',
//     regdate: '2022-03-07',
//     tag: '#롤 #게임 #승급전',
//   },
//   {
//     ...commonTextAttribue,
//     id: '9',
//     title: '궁동 밥 드실분',
//     image: '',
//     regdate: '2022-01-01',
//     tag: '#궁동 #맛집',
//   },
//   {
//     ...commonTextAttribue,
//     id: '10',
//     title: '자전거 엑스포!',
//     image: '',
//     regdate: '2022-01-24',
//     tag: '#엑스포 #자전거',
//   },
//   {
//     ...commonTextAttribue,
//     id: '11',
//     title: '모각코 모집',
//     image: '',
//     regdate: '2022-02-05',
//     tag: '#모각코',
//   },
//   {
//     ...commonTextAttribue,
//     id: '12',
//     title: '롤 동료 모집',
//     image: '',
//     regdate: '2022-03-07',
//     tag: '#롤 #게임 #승급전',
//   },
// ];

export default HomePage;
