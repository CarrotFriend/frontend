import React from 'react';
import Text from '../../atoms/Text';
import InputList from '../../organisms/InputList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';

const props = {
  loginInputProps: [
    {
      type: 'text',
      placeholder: '아이디를 입력해주세요',
      value: '',
      name: 'id',
      accept: '',
      size: 'large',
    },
    {
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
      value: '',
      name: 'pw',
      accept: '',
      size: 'large',
    },
  ],
  loginBtnProps: [
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
  joinBtnProps: {},
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

const LoginPage = () => {
  return (
    <PageFrame>
      <StyledLoginPage>
        <Text props={props.titleProps} />
        <LoginFormBox action="" method="post">
          <InputList list={props.loginInputProps} flex="column" />
          <ButtonList list={props.loginBtnProps} flex="column" />
        </LoginFormBox>
      </StyledLoginPage>
    </PageFrame>
  );
};

export default LoginPage;
