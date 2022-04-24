import axios from 'axios';

const selectCategory = async (_inputValues) => {
  const inputValues = Array.from(_inputValues);
  const { id, userId, nickName, categoryList } = JSON.parse(
    localStorage.getItem('user')
  );
  // check된 input만 배열에 담기
  const categoryDto = inputValues.reduce((result, input) => {
    if (input.checked) {
      result.push({
        code: '1',
        name: input.name,
      });
    }
    return result;
  }, []);

  await axios({
    method: 'post',
    url: '/user/category',
    header: {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'application/json',
    },
    data: {
      userDto: {
        id,
        userId,
        nickName,
        categoryList,
      },
      categoryDto,
    },
  });
};

export default selectCategory;
