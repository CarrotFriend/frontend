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
  const { id } = location.state;

  // useEffect로 추후 데이터만 다시 렌더링
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchPostDetail = async () => {
      const {
        data: { data },
      } = await getPostDetail(id);
      setData(data);
    };
    fetchPostDetail();
  }, []);

  const dataList = [
    { id: data.id, size: 'medium', text: data.title },
    {
      id: data.id + 1,
      text: `${data.user?.nickName} | 매너 온도 : ${data.user?.degree}˚C`,
    },
    // { id: data.id + 2, text: '매너 온도 : ' + data.degree + '˚C' },
    { id: data.id + 3, text: data.tag && getTagStr(data.tag) },
    { id: data.id + 4, text: data.regDate && getWhatTimeBefore(data.regDate) },
  ];
  if (data === '') return <LoadingBox />;
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
