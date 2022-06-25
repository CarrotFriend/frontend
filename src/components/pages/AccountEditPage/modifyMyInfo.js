import axios from 'axios';

export const modifyMyInfo = async ({
  userId,
  pw,
  userName,
  nickName,
  email,
  date,
}) => {
  const { categoryList } = JSON.parse(localStorage.getItem('user'));
  try {
    const { data } = await axios({
      method: 'put',
      url: '/user',
      header: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: {
        userId,
        pw,
        userName,
        nickName,
        email,
        birthday: date,
        image: {
          imageId: -1,
          src: null,
        },
        categoryList,
      },
    });
    localStorage.setItem('user', JSON.stringify(data.data));
    if (data.state === 200) {
      alert('회원 정보가 수정되었습니다!');
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
