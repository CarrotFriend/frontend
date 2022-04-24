import React, { useState } from 'react';
import Text from '../../atoms/Text';
import InputList from '../../organisms/InputList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { login } from './login';
import user from './user';
import checkCategoryList from './checkCategoryList';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const loginInputs = [
    {
      ...data.loginInputs[0],
      value: id,
      setValue: setId,
    },
    {
      ...data.loginInputs[1],
      value: pw,
      setValue: setPw,
    },
  ];
  const btns = [
    {
      // 로그인 버튼
      ...data.btns[0],
      clickBtn: async (e) => {
        e.preventDefault();
        if (id.trim() === '') {
          setAlert('아이디를 입력해주세요!');
          e.preventDefault();
        } else if (pw.trim() === '') {
          setAlert('비밀번호를 입력해주세요!');
          e.preventDefault();
        }
        const loggedIn = await login(id, pw, setAlert);
        if (loggedIn) {
          await user();
          checkCategoryList(navigate);
        }
      },
    },
    {
      // 회원가입 버튼
      ...data.btns[1],
      clickBtn: (e) => {
        e.preventDefault();
        navigate('/join');
      },
    },
  ];

  return (
    <PageFrame>
      <StyledLoginPage>
        <Text size={data.title.size}>{data.title.text}</Text>
        <LoginFormBox>
          <InputList list={loginInputs} flex="column" />
          <AlertInput>{alert}</AlertInput>
          <ButtonList list={btns} flex="column" />
        </LoginFormBox>
      </StyledLoginPage>
    </PageFrame>
  );
};

const data = {
  loginInputs: [
    {
      type: 'text',
      placeholder: '아이디를 입력해주세요',
      name: 'id',
      accept: '',
      size: 'large',
      autoFocus: 'autoFocus',
    },
    {
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
      name: 'pw',
      accept: '',
      size: 'large',
      autoFocus: '',
    },
  ],
  btns: [
    {
      size: 'large',
      color: 'pink',
      child: '로그인',
    },
    {
      size: 'large',
      color: 'gray',
      child: '회원가입',
    },
  ],
  title: {
    text: '당근친구',
    size: 'large',
    color: '',
  },
};

const AlertInput = styled.div`
  color: red;
`;

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: inherit;
  height: inherit;
  padding: 2rem 0;
  border: 1px solid black;
`;

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50rem;
  height: 65%;
  text-align: center;
`;

const PageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;
`;

export default LoginPage;
