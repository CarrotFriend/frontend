import axios from 'axios';

const selectCategory = async (_inputValues) => {
  // 유사 배열 객체를 얕게 복사해 새로 배열로 만듦
  const inputValues = Array.from(_inputValues);
  const { id, userId, nickName, categoryList } = JSON.parse(
    localStorage.getItem('user')
  );
  // check된 input만 배열에 담기
  const categoryDto = inputValues.reduce((result, input) => {
    if (input.checked) {
      result.push({
        code: input.dataset.code,
        name: input.name,
      });
    }
    return result;
  }, []);

  await axios({
    method: 'post',
    url: '/user/category',
    header: {
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
  const myCategoryList = [...categoryList, ...categoryDto];
  const newUser = {
    categoryList: myCategoryList,
    id,
    userId,
    nickName,
  };
  localStorage.setItem('user', JSON.stringify(newUser));
};

export default selectCategory;