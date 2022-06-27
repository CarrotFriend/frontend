import axios from 'axios';

const getPostDetail = async (postId) => {
  try {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/detail/${postId}`,
    });
    if (fetchedData.data.state !== 200)
      throw new Error('Error in Fetching data!');

    return fetchedData;
  } catch (error) {
    throw error;
  }
};

export default getPostDetail;
