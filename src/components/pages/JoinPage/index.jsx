import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text';
import InputLabelList from '../../organisms/InputLabelList';
import ButtonList from '../../organisms/ButtonList';
import styled from 'styled-components';
import { verify } from './verify';
import { join } from './join';
import data from './data';

const JoinPage = () => {
  const [userId, setUserId] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [userName, setuserName] = useState('');
  const [nickName, setnickName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const stateList = [
    [userId, setUserId],
    [pw, setPw],
    [pwcheck, setPwcheck],
    [userName, setuserName],
    [nickName, setnickName],
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

  // Api 받고 아이디 중복 체크만 확인
  const clickBtn = async (e) => {
    e.preventDefault();
    const reg_email =
      /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (userId.trim() === '' || userId.trim().length < 4) {
      setAlert('아이디를 최소 4자 이상 입력해주세요.');
    } else if (pw.trim() === '' || pw.trim().length < 4) {
      setAlert('비밀번호를 최소 4자 이상 입력해주세요.');
    } else if (pw.trim() !== pwcheck.trim()) {
      setAlert('비밀번호가 일치하지 않습니다.');
    } else if (userName.trim() === '' || userName.length < 2) {
      setAlert('이름을 최소 1자 이상 입력해주세요.');
    } else if (nickName.trim() === '' || nickName.length < 2) {
      setAlert('닉네임을 최소 1자 이상 입력해주세요.');
    } else if (!reg_email.test(email)) {
      setAlert('이메일 양식을 올바르게 입력해주세요.');
    } else if (date.trim() === '') {
      setAlert('생년월일을 선택해주세요.');
    } else {
      // if (await checkUserId(userId)) return;
      const isJoined = await join({
        userId,
        pw,
        userName,
        nickName,
        email,
        date,
      });
      if (isJoined) navigate('/login');
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
    const list = document.querySelectorAll('input');
    for (let ele of list) {
      if (
        ele.name === 'userId' ||
        ele.name === 'nickName' ||
        ele.name === 'email'
      ) {
        ele.addEventListener('focusout', () =>
          verify(ele, ele.name, ele.value)
        );
      }
    }
    return () => {
      for (let ele of list) {
        if (
          ele.name === 'userId' ||
          ele.name === 'nickName' ||
          ele.name === 'email'
        ) {
          ele.addEventListener('focusout', () =>
            verify(ele, ele.name, ele.value)
          );
        }
      }
    };
  }, []);

  return (
    <PageFrame>
      <StyledJoinPage>
        <Text size={data.title.size}>{data.title.text}</Text>
        <JoinFormBox action="" method="post">
          <InputLabelList
            inputList={inputs}
            labelList={data.labels}
            flex={InputLableListFlex}
            isReversed={true}
          />
          <Alert>{alert}</Alert>
          <ButtonList list={btns} flex="column" />
        </JoinFormBox>
      </StyledJoinPage>
    </PageFrame>
  );
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

const Alert = styled.div`
  color: red;
`;

const StyledJoinPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 50rem;
  margin: 2rem;
`;

const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
`;

export default JoinPage;
