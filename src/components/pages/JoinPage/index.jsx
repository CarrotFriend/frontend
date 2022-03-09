import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';

const commonInputAttribute = {
  size: 'small',
  required: 'required',
};
const commonLabelAttribute = {
  size: 'medium',
  color: 'gray',
};

const data = {
  inputs: [
    {
      type: 'text',
      name: 'id',
      ...commonInputAttribute,
    },
    {
      type: 'password',
      name: 'pw',
      ...commonInputAttribute,
    },
    {
      type: 'password',
      name: 'pwcheck',
      ...commonInputAttribute,
    },
    {
      type: 'text',
      name: 'username',
      ...commonInputAttribute,
    },
    {
      type: 'text',
      name: 'nickname',
      ...commonInputAttribute,
    },
    {
      type: 'email',
      name: 'email',
      ...commonInputAttribute,
    },
    {
      type: 'date',
      name: 'date',
      ...commonInputAttribute,
    },
  ],
  labels: [
    {
      ...commonLabelAttribute,
      child: '아이디',
      target: 'id',
    },
    {
      ...commonLabelAttribute,
      child: '비밀번호',
      target: 'pw',
    },
    {
      ...commonLabelAttribute,
      child: '비밀번호 재확인',
      target: 'pwcheck',
    },
    {
      ...commonLabelAttribute,
      child: '이름',
      target: 'username',
    },
    {
      ...commonLabelAttribute,
      child: '닉네임',
      target: 'nickname',
    },
    {
      ...commonLabelAttribute,
      child: '이메일',
      target: 'email',
    },
    {
      ...commonLabelAttribute,
      child: '생년월일',
      target: 'date',
    },
  ],
  btns: [
    {
      size: 'large',
      color: 'pink',
      child: '회원가입',
    },
  ],
  title: {
    text: '당근친구',
    size: 'large',
    color: '',
  },
};

const InputLableListFlex = {
  listDirection: 'column',
  contentDirection: 'column',
};

const JoinFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;

// const AlertInput = styled.div`
//   color: red;
// `;

const StyledJoinPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 50rem;
  margin: 5rem;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

const JoinPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  // const [alert, setAlert] = useState('');
  // const navigate = useNavigate();

  const stateList = [
    [id, setId],
    [pw, setPw],
    [pwcheck, setPwcheck],
    [username, setUsername],
    [nickname, setNickname],
    [email, setEmail],
    [date, setDate],
  ];
  const inputs = stateList.map(([value, setValue], idx) => {
    return {
      ...data.inputs[idx],
      value,
      setValue,
    };
  });

  // Api 받고 아이디 입력하면 중복 체크, 비밀번호 & 비밀번호 확인 체크, 이메일 타입 체크 등 하는 함수 작성해서 내려 보내기
  // const clickJoin = (e) => {
  //   if (id.trim() === '') {
  //     setAlert('아이디를 입력해주세요!');
  //     e.preventDefault();
  //   } else if (pw.trim() === '') {
  //     setAlert('비밀번호를 입력해주세요!');
  //     e.preventDefault();
  //   }
  // };

  return (
    <PageFrame>
      <StyledJoinPage>
        <Text props={data.title} />
        <JoinFormBox action="" method="post">
          <InputLabelList
            inputList={inputs}
            labelList={data.labels}
            flex={InputLableListFlex}
            isReversed={true}
          />
          {/* <AlertInput>{alert}</AlertInput> */}
          <ButtonList list={data.btns} flex="column" />
        </JoinFormBox>
      </StyledJoinPage>
    </PageFrame>
  );
};

export default JoinPage;
