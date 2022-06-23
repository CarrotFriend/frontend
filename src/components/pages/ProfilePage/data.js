const btn1CustomStyles = {
  customStyles: [
    {
      key: 'width',
      value: '20vw',
    },
  ],
};

const btn2CustomStyles = {
  customStyles: [
    {
      key: 'color',
      value: 'black',
    },
    {
      key: 'margin',
      value: '0',
    },
  ],
};

const data = [
  [
    {
      size: 'large',
      color: 'pink',
      child: '내가 작성한 글 목록',
      ...btn1CustomStyles,
    },
    {
      size: 'large',
      color: 'pink',
      child: '관심 카테고리 설정',
      ...btn1CustomStyles,
    },
    {
      size: 'large',
      color: 'pink',
      child: '계정 관리',
      ...btn1CustomStyles,
    },
  ],
  [
    {
      size: 'medium',
      color: 'white',
      child: '로그아웃',
      ...btn2CustomStyles,
    },
    {
      size: 'medium',
      color: 'white',
      child: '회원 탈퇴',
      ...btn2CustomStyles,
    },
  ],
];

export default data;
