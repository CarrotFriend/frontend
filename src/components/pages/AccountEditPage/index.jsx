import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';
import { verify } from '../JoinPage/verify';
import data from './data';
import { modifyMyInfo } from './modifyMyInfo';

const AccountEditPage = () => {
  const [pw, setPw] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [userName, setuserName] = useState('');
  const [nickName, setnickName] = useState('');
  const [date, setDate] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const stateList = [
    // [userId, setUserId],
    [],
    [pw, setPw],
    [pwcheck, setPwcheck],
    [userName, setuserName],
    [nickName, setnickName],
    [],
    // [email, setEmail],
    [date, setDate],
  ];
  const inputs = stateList.map(([value, setValue], idx) => {
    return {
      ...data.inputs[idx],
      value,
      setValue,
    };
  });

  const clickBtn = async (e) => {
    e.preventDefault();
    if (pw.trim() === '' || pw.trim().length < 4) {
      setAlert('비밀번호를 최소 4자 이상 입력해주세요.');
    } else if (pw.trim() !== pwcheck.trim()) {
      setAlert('비밀번호가 일치하지 않습니다.');
    } else if (userName.trim() === '' || userName.length < 2) {
      setAlert('이름을 최소 1자 이상 입력해주세요.');
    } else if (nickName.trim() === '' || nickName.length < 2) {
      setAlert('닉네임을 최소 1자 이상 입력해주세요.');
    } else if (date.trim() === '') {
      setAlert('생년월일을 선택해주세요.');
    } else {
      const { userId, email } = JSON.parse(localStorage.getItem('user'));

      const isModified = await modifyMyInfo({
        userId,
        pw,
        userName,
        nickName,
        email,
        date,
      });
      if (isModified) navigate(-1);
      else setAlert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
    }
  };

  const btns = [
    {
      ...data.btns[0],
      clickBtn: clickBtn,
    },
  ];

  useEffect(() => {
    const { userId, userName, nickName, email, birthday } = JSON.parse(
      localStorage.getItem('user')
    );
    setuserName(userName);
    setnickName(nickName);
    setDate(birthday);
    const list = document.querySelectorAll('input');
    for (let ele of list) {
      if (ele.name === 'nickName') {
        ele.addEventListener('focusout', () =>
          verify(ele, ele.name, ele.value)
        );
      }
      if (ele.name === 'userId') ele.value = userId;
      if (ele.name === 'email') ele.value = email;
    }
    return () => {
      for (let ele of list) {
        if (ele.name === 'nickName') {
          ele.addEventListener('focusout', () =>
            verify(ele, ele.name, ele.value)
          );
        }
      }
    };
  }, []);

  return (
    <PageFrame>
      <StyledAccountEditPage>
        <Text size={data.title.size}>{data.title.text}</Text>
        <AccountEditFormBox action="" method="post">
          <InputLabelList
            inputList={inputs}
            labelList={data.labels}
            flex={InputLableListFlex}
            isReversed={true}
          />
          <Alert>{alert}</Alert>
          <ButtonList list={btns} flex="column" />
        </AccountEditFormBox>
      </StyledAccountEditPage>
    </PageFrame>
  );
};

const InputLableListFlex = {
  listDirection: 'column',
  contentDirection: 'column',
};

const AccountEditFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;

const Alert = styled.div`
  color: red;
`;

const StyledAccountEditPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 50rem;
  margin: 8rem;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

export default AccountEditPage;
