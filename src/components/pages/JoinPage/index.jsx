import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';

const data = {
  inputs: [
    {
      type: 'text',
      placeholder: '',
      name: 'id',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
    {
      type: 'password',
      placeholder: '',
      name: 'pw',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
    {
      type: 'password',
      placeholder: '',
      name: 'pwcheck',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
    {
      type: 'text',
      placeholder: '',
      name: 'username',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
    {
      type: 'text',
      placeholder: '',
      name: 'nickname',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
    {
      type: 'email',
      placeholder: '',
      name: 'email',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
    {
      type: 'date',
      placeholder: '',
      name: 'date',
      accept: '',
      size: 'small',
      autoFocus: '',
      required: 'required',
    },
  ],
  labels: [
    {
      size: 'medium',
      color: 'gray',
      child: '아이디',
      target: 'id',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '비밀번호',
      target: 'pw',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '비밀번호 재확인',
      target: 'pwcheck',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '이름',
      target: 'username',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '닉네임',
      target: 'nickname',
    },
    {
      size: 'medium',
      color: 'gray',
      child: '이메일',
      target: 'email',
    },
    {
      size: 'medium',
      color: 'gray',
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
    size: 'medium',
    color: '',
  },
};

const JoinFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: inherit;
  padding: 1rem 0;
`;

const AlertInput = styled.div`
  color: red;
`;

const StyledJoinPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 40rem;
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
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

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

  const clickLogin = (e) => {
    if (id.trim() === '') {
      setAlert('아이디를 입력해주세요!');
      e.preventDefault();
    } else if (pw.trim() === '') {
      setAlert('비밀번호를 입력해주세요!');
      e.preventDefault();
    }
  };

  return (
    <PageFrame>
      <StyledJoinPage>
        <Text props={data.title} />
        <JoinFormBox action="" method="post">
          <InputLabelList
            inputList={inputs}
            labelList={data.labels}
            flex="column"
          />
          <AlertInput>{alert}</AlertInput>
          <ButtonList list={data.btns} flex="column" />
        </JoinFormBox>
      </StyledJoinPage>
    </PageFrame>
  );
};

export default JoinPage;
