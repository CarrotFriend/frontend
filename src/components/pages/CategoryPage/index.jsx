import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import selectCategory from './selectCategory';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const clickBtn = (e) => {
    let isChecked = false;
    const inputValues = document.querySelectorAll('input');
    inputValues.forEach((input) => {
      if (input.checked) isChecked = true;
    });
    e.preventDefault();
    if (!isChecked) {
      // 체크된 카테고리가 없이 제출 버튼 눌리면 경고 표시
      document.querySelector('.alert').style.visibility = 'visible';
    }
    // 선택된 카테고리 제출
    else {
      // 카테고리 선택해 user의 categoryList 갱신하고 홈으로
      selectCategory(inputValues);
      navigate('/');
    }
  };
  return (
    <StyledCategoryPage>
      <TitleArea>
        <Text size={data.title.size}>{data.title.text}</Text>
      </TitleArea>
      <Text size={data.description.size}>{data.description.text}</Text>
      <CategoryFormBox action="" method="">
        <InputLabelList
          inputList={data.inputs}
          labelList={data.labels}
          flex={InputLableListFlex}
          isReversed={false}
        />
        <Alert className="alert">적어도 하나를 선택해 주십시오.</Alert>
        <Button size="large" color="pink" clickBtn={clickBtn}>
          제출
        </Button>
      </CategoryFormBox>
    </StyledCategoryPage>
  );
};

const InputLableListFlex = {
  listDirection: 'row',
  contentDirection: 'row',
};

const Alert = styled.div`
  color: red;
  visibility: hidden;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: center;
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
// const commonInputAttribute = {
//   type: 'checkbox',
//   size: 'checkbox',
// };
// const commonLabelAttribute = {
//   size: 'medium',
//   color: 'gray',
// };

// const data = {
//   inputs: [
//     {
//       ...commonInputAttribute,
//       name: '카테고리1',
//       id: '카테고리1',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리2',
//       id: '카테고리2',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리3',
//       id: '카테고리3',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리4',
//       id: '카테고리4',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리5',
//       id: '카테고리5',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리6',
//       id: '카테고리6',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리7',
//       id: '카테고리7',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리8',
//       id: '카테고리8',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리9',
//       id: '카테고리9',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리10',
//       id: '카테고리10',
//     },
//     {
//       ...commonInputAttribute,
//       name: '카테고리11',
//       id: '카테고리11',
//     },
//     {
//       ...commonInputAttribute,
//       name: '미정',
//       id: '미정',
//       hidden: 'hidden',
//     },
//   ],
//   labels: [
//     {
//       ...commonLabelAttribute,
//       child: '카테고리1',
//       target: '카테고리1',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리2',
//       target: '카테고리2',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리3',
//       target: '카테고리3',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리4',
//       target: '카테고리4',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리5',
//       target: '카테고리5',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리6',
//       target: '카테고리6',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리7',
//       target: '카테고리7',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리8',
//       target: '카테고리8',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리9',
//       target: '카테고리9',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리10',
//       target: '카테고리10',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '카테고리11',
//       target: '카테고리11',
//     },
//     {
//       ...commonLabelAttribute,
//       child: '미정',
//       target: '미정',
//       hidden: 'hidden',
//     },
//   ],
//   title: {
//     text: '관심 카테고리 설정',
//     size: 'large',
//     color: '',
//   },
//   description: {
//     text: '선택한 카테고리의 게시글만 홈에서 보이게 됩니다.',
//     size: 'medium',
//     color: '',
//   },
// };

export default CategoryPage;
