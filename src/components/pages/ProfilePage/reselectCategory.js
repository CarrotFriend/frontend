import getCategory from '../CategoryPage/getCategory';

const reselectCategory = async (navigate) => {
  const { categoryList } = JSON.parse(localStorage.getItem('user'));
  const data = await getCategory();
  if (data === 'error') {
    window.alert('서버와의 연결이 불안정합니다.');
    navigate('/profile');
    return;
  }
  // 이쪽에서 category valued 처리 어떡할까?
  await navigate('/category', {
    state: {
      data,
      categoryList,
    },
  });
};

export default reselectCategory;
