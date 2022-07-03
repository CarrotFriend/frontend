import axios from 'axios';

const getBoardData = async (code) => {
  console.log(code);
  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/category/${code}`,
    });
    if (fetchedData.data.state !== 200) throw new Error('Fail to fetch data!');
    return fetchedData;
  } catch (error) {
    throw error;
  }
};

export default getBoardData;
