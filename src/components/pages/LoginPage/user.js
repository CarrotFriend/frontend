import axios from 'axios';

const user = async () => {
  try {
    const userData = await axios({
      method: 'get',
      url: '/user',
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    localStorage.setItem('user', JSON.stringify(userData.data.data));
  } catch (err) {
    console.log(err);
  }
};

export default user;
