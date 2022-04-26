import getCategory from '../CategoryPage/getCategory';

const checkCategoryList = async (navigate) => {
  console.log('check!');
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.categoryList.length === 0) {
    const data = await getCategory();
    await navigate('/category', { state: { data: data } });
  } else navigate('/');
};

export default checkCategoryList;
