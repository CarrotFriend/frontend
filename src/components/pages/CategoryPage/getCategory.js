import axios from 'axios';

const getCategory = async () => {
  const result = await axios({
    method: 'get',
    url: '/category',
    header: {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });
  const data = {
    inputs: result.data.data.map(({ code, name }) => {
      return {
        ...commonInputAttribute,
        code,
        name,
        id: name,
      };
    }),
    labels: result.data.data.map(({ name }) => {
      return {
        ...commonLabelAttribute,
        child: name,
        target: name,
      };
    }),
    title: {
      text: '관심 카테고리 설정',
      size: 'large',
      color: '',
    },
    description: {
      text: '선택한 카테고리의 게시글만 홈에서 보이게 됩니다.',
      size: 'medium',
      color: '',
    },
  };
  return data;
};

const commonInputAttribute = {
  type: 'checkbox',
  size: 'checkbox',
};
const commonLabelAttribute = {
  size: 'medium',
  color: 'gray',
};

export default getCategory;
