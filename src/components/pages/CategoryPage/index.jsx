import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';

const commonInputAttribute = {
  type: 'checkbox',
  placeholder: '',
  accept: '',
  size: 'checkbox',
  autoFocus: '',
  required: '',
};
const commonLabelAttribute = {
  size: 'medium',
  color: 'gray',
};

const data = {
  inputs: [
    {
      ...commonInputAttribute,
      name: '카테고리1',
      id: '카테고리1',
    },
    {
      ...commonInputAttribute,
      name: '카테고리2',
      id: '카테고리2',
    },
    {
      ...commonInputAttribute,
      name: '카테고리3',
      id: '카테고리3',
    },
    {
      ...commonInputAttribute,
      name: '카테고리4',
      id: '카테고리4',
    },
    {
      ...commonInputAttribute,
      name: '카테고리5',
      id: '카테고리5',
    },
    {
      ...commonInputAttribute,
      name: '카테고리6',
      id: '카테고리6',
    },
    {
      ...commonInputAttribute,
      name: '카테고리7',
      id: '카테고리7',
    },
    {
      ...commonInputAttribute,
      name: '카테고리8',
      id: '카테고리8',
    },
    {
      ...commonInputAttribute,
      name: '카테고리9',
      id: '카테고리9',
    },
    {
      ...commonInputAttribute,
      name: '카테고리10',
      id: '카테고리10',
    },
    {
      ...commonInputAttribute,
      name: '카테고리11',
      id: '카테고리11',
    },
    {
      ...commonInputAttribute,
      name: '미정',
      id: '미정',
      hidden: 'hidden',
    },
  ],
  labels: [
    {
      ...commonLabelAttribute,
      child: '카테고리1',
      target: '카테고리1',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리2',
      target: '카테고리2',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리3',
      target: '카테고리3',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리4',
      target: '카테고리4',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리5',
      target: '카테고리5',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리6',
      target: '카테고리6',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리7',
      target: '카테고리7',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리8',
      target: '카테고리8',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리9',
      target: '카테고리9',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리10',
      target: '카테고리10',
    },
    {
      ...commonLabelAttribute,
      child: '카테고리11',
      target: '카테고리11',
    },
    {
      ...commonLabelAttribute,
      child: '미정',
      target: '미정',
      hidden: 'hidden',
    },
  ],
  title: {
    text: '관심 카테고리 설정',
    size: 'large',
    color: '',
  },
  description: {
    text: '선택한 카테고리의 게시글만 홈에서 보이게 됩니다.',
    size: 'medium',
    color: '',
  },
};

const InputLableListFlex = {
  listDirection: 'row',
  contentDirection: 'row',
};

const TitleArea = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  text-align: center;
  padding-bottom: 2rem;
`;

const CategoryFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  height: 60%;
  padding: 1rem 0;
`;

const StyledCategoryPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50rem;
`;

const CategoryPage = () => {
  return (
    <StyledCategoryPage>
      <TitleArea>
        <Text props={data.title} />
      </TitleArea>
      <Text props={data.description} />
      <CategoryFormBox>
        <InputLabelList
          inputList={data.inputs}
          labelList={data.labels}
          flex={InputLableListFlex}
          isReversed={false}
        />
        <Button size="medium" color="pink">
          제출
        </Button>
      </CategoryFormBox>
    </StyledCategoryPage>
  );
};

export default CategoryPage;
