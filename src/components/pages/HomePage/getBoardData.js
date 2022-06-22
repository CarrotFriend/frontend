import axios from 'axios';

const getBoardData = async (code) => {
  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/category/${code}`,
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    if (fetchedData.data.state !== 200) throw new Error('Fail to fetch data!');
    return fetchedData;
  } catch (error) {
    throw error;
  }
};

export default getBoardData;
