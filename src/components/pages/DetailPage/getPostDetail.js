import axios from 'axios';

const getPostDetail = (id) => {
  const fetchedData = axios({
    method: 'get',
    url: `/post/detail/${id}`,
    header: {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });
  return fetchedData;
};

export default getPostDetail;
