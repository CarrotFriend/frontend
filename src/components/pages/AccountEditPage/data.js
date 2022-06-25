const commonInputAttribute = {
  size: 'small',
};
const commonLabelAttribute = {
  size: 'medium',
  color: 'gray',
};
const readOnly = {
  readOnly: true,
};

const data = {
  inputs: [
    {
      type: 'text',
      name: 'userId',
      ...readOnly,
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
      name: 'userName',
      ...commonInputAttribute,
    },
    {
      type: 'text',
      name: 'nickName',
      ...commonInputAttribute,
    },
    {
      type: 'email',
      name: 'email',
      ...readOnly,
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
      target: 'userId',
    },
    {
      ...commonLabelAttribute,
      child: '비밀번호 수정',
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
      target: 'userName',
    },
    {
      ...commonLabelAttribute,
      child: '닉네임',
      target: 'nickName',
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
      child: '정보 수정',
    },
  ],
  title: {
    text: '내 정보 수정',
    size: 'medium',
    color: '',
  },
};

export default data;
