import axios from 'axios';

const getBoardData = (code) => {
  const fetchedData = axios({
    method: 'get',
    url: `/post/category/${code}`,
    header: {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });
  return fetchedData;
};

export default getBoardData;
