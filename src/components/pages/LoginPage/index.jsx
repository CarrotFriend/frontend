import React, { useState } from 'react';
import Text from '../../atoms/Text';
import InputList from '../../organisms/InputList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/Input';

const props = {
  loginInputProps: [
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
  btnProps: [
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
  titleProps: {
    text: '당근친구',
    size: 'large',
    color: '',
  },
};

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: inherit;
  margin: 3rem;
  padding: 4rem 0;
  border: 1px solid black;
`;

const AlertInput = styled.div`
  color: red;
  margin-top: 2rem;
`;

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 40rem;
  margin: 5rem;
  text-align: center;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

// join 버튼은 클릭하면 JoinPage로 Link or Redirect

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [alert, setAlert] = useState('');
  const navigate = useNavigate();
  props.loginInputProps[0]['value'] = id;
  props.loginInputProps[0]['setValue'] = setId;
  props.loginInputProps[1]['value'] = pw;
  props.loginInputProps[1]['setValue'] = setPw;

  const clickLogin = (e) => {
    if (id.trim() === '') {
      setAlert('아이디를 입력해주세요!');
      e.preventDefault();
    } else if (pw.trim() === '') {
      setAlert('비밀번호를 입력해주세요!');
      e.preventDefault();
    }
  };
  const clickJoin = (e) => {
    e.preventDefault();
    navigate('/join');
  };
  props.btnProps[0]['clickBtn'] = clickLogin;
  props.btnProps[1]['clickBtn'] = clickJoin;

  return (
    <PageFrame>
      <StyledLoginPage>
        <Text props={props.titleProps} />
        <LoginFormBox action="" method="post">
          <InputList list={props.loginInputProps} flex="column" />
          <AlertInput>{alert}</AlertInput>
          <ButtonList list={props.btnProps} flex="column" />
        </LoginFormBox>
      </StyledLoginPage>
    </PageFrame>
  );
};

export default LoginPage;
