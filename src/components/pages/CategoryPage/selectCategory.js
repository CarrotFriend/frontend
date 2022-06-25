import axios from 'axios';

const selectCategory = async (_inputValues) => {
  // 유사 배열 객체를 얕게 복사해 새로 배열로 만듦
  const inputValues = Array.from(_inputValues);
  const user = JSON.parse(localStorage.getItem('user'));
  // check된 input만 배열에 담기
  const categoryList = inputValues.reduce((result, input) => {
    if (input.checked) {
      result.push({
        code: input.dataset.code,
        name: input.name,
      });
    }
    return result;
  }, []);
  try {
    const {
      data: { state },
    } = await axios({
      method: 'post',
      url: '/user/category',
      header: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
      data: {
        userCateDto: {
          id: user.id,
          categoryList,
        },
      },
    });

    if (state !== 200) return false;

    const newUser = {
      ...user,
      categoryList,
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default selectCategory;
