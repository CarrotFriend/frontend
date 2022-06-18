const data = {
  input: {
    size: 'large',
    onlyBottomline: 'true',
    placeholder: '제목을 입력하세요',
    name: 'title',
  },
  category: {
    placeholder: '카테고리',
    name: 'categoryId',
  },
  image: {
    // ...commonTextAttribue,
    size: 'medium',
    color: '',
    onlyBottomline: 'true',
    name: 'image',
    type: 'file',
    accept: 'image/*',
  },
  textarea: {
    placeholder: '내용을 입력하세요',
    size: 'medium',
    name: 'content',
  },
  option: [
    '카테고리',
    '스터디',
    '여행',
    '교통',
    '구인/구직',
    '독서',
    '맛집',
    '게임',
    '운동',
  ],
};

export default data;
