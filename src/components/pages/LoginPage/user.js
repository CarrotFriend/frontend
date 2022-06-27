import axios from 'axios';

const user = async (id) => {
  try {
    const userData = await axios({
      method: 'get',
      url: '/user/' + id,
    });
    localStorage.setItem('user', JSON.stringify(userData.data.data));
  } catch (err) {
    console.log(err);
  }
};

export default user;
