import React from 'react';
import Textarea from '../../atoms/Textarea';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import TextList from '../../organisms/TextList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const data = {
  id: '1',
  title: '봉명동 저녁 드실분',
  nickname: '7기싸피생',
  degree: '36.8',
  regdate: '2022-03-14 13:32:19',
  tag: '#봉명동 #저녁 #번개',
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

const getWhatTimeBefore = () => {
  const now = new Date();
  const regTime = new Date(data.regdate);

  const minuteDist = Math.floor(
    (now.getTime() - regTime.getTime()) / 1000 / 60
  );
  if (minuteDist < 1) return '방금 전';
  if (minuteDist < 60) return `${minuteDist}분 전`;

  const hourDist = Math.floor(minuteDist / 60);
  if (hourDist < 24) return `${hourDist}시간 전`;

  const dayDist = Math.floor(minuteDist / 60 / 24);
  if (dayDist < 365) return `${dayDist}일 전`;

  return `${Math.floor(dayDist / 365)}년 전`;
};

const DetailPage = () => {
  const navigate = useNavigate();
  // 추후 api에서 받아오기
  const textValue =
    '봉명동에서 저녁 간단히 드실분 구해요 \n 금요일이니 고기나 회 든든하게 먹고 싶네요 \n 6~7시쯤 영풍 문고 앞에서 만나면 될거같습니다.';
  const dataList = [
    { id: data.id, size: 'medium', text: data.title },
    {
      id: data.id + 1,
      text: `${data.nickname} | 매너 온도 : ${data.degree}˚C`,
    },
    // { id: data.id + 2, text: '매너 온도 : ' + data.degree + '˚C' },
    { id: data.id + 3, text: data.tag },
    { id: data.id + 4, text: getWhatTimeBefore() },
  ];
  return (
    <StyledDetailPage>
      <FormBox>
        <InfoBox>
          <StyledImage>
            <Image src="" alt="유저업로드이미지" size="xlarge" />
          </StyledImage>
          <TextList list={dataList} flex="column" />
        </InfoBox>
        <Textarea value={textValue} size="small" readOnly name="content" />
        <Button size="large" clickBtn={() => navigate('/message')}>
          쪽지 보내기
        </Button>
      </FormBox>
    </StyledDetailPage>
  );
};

export default DetailPage;
