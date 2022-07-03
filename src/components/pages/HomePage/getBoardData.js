import axios from 'axios';
import reissue from '../../../util/reissue';

const getBoardData = async (code) => {
  // 새로고침으로 토큰이 없으면 reissue
  if (!axios.defaults.headers['Authorization']) await reissue();

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
