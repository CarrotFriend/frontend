import getCategory from '../CategoryPage/getCategory';

const checkCategoryList = async (navigate) => {
  console.log('check!');
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.categoryList.length === 0) {
    const data = await getCategory();
    if (data === 'error') {
      window.alert('서버와의 연결이 불안정합니다.');
      navigate('/login');
      return;
    }
    await navigate('/category', {
      state: {
        data: data,
        categoryList: [],
      },
    });
  } else navigate('/');
};

export default checkCategoryList;
