import React, { useState, useEffect } from 'react';
import Textarea from '../../atoms/Textarea';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import TextList from '../../organisms/TextList';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import getPostDetail from './getPostDetail';
import LoadingBox from '../../organisms/LoadingBox';
import getTagStr from '../../../util/getTagStr';
import getWhatTimeBefore from '../../../util/getWhatTimeBefore';

const DetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = location.state;

  // useEffect로 추후 데이터만 다시 렌더링
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchPostDetail = async () => {
      const { data } = await getPostDetail(postId);
      // 에러 처리
      if (!data) {
        window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
        navigate('/');
        return;
      }
      setData(data.data);
    };
    fetchPostDetail();
  }, []);

  if (data === '') return <LoadingBox />;

  const dataList = [
    { id: data.user.id, size: 'medium', text: data.title },
    {
      id: data.user.id + 1,
      text: `${data.user.nickName} | 매너 온도 : ${data.user.temperature}˚C`,
    },
    // { id: data.id + 2, text: '매너 온도 : ' + data.degree + '˚C' },
    { id: data.user.id + 3, text: data.tag && getTagStr(data.tag) },
    {
      id: data.user.id + 4,
      text: data.regDate && getWhatTimeBefore(data.regDate),
    },
  ];
  return (
    <StyledDetailPage>
      <FormBox>
        <InfoBox>
          <StyledImage>
            <Image
              src={data.imageList?.[0]?.src}
              alt="유저업로드이미지"
              size="xlarge"
            />
          </StyledImage>
          <TextList list={dataList} flex="column" />
        </InfoBox>
        <Textarea value={data.content} size="small" readOnly name="content" />
        <Button size="large" clickBtn={() => navigate('/message')}>
          쪽지 보내기
        </Button>
      </FormBox>
    </StyledDetailPage>
  );
};

const StyledImage = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35rem;
  margin-top: 6rem;
`;

export default DetailPage;
