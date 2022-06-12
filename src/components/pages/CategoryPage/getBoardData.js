import axios from 'axios';

const getBoardData = async () => {
  // const boardData = [];
  // ls에서 카테고리 목록 가져와 반복, 데이터 fetch
  const { categoryList } = JSON.parse(localStorage.getItem('user'));
  // 정상적인 비동기 처리를 위해 forEach 대신 for...of 사용
  for (const { code } of categoryList) {
    const fetchedData = await axios({
      method: 'get',
      url: `/post/category/${code}`,
      header: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    // 이걸 이제 redux에 저장하기
    // console.log(fetchedData);
  }
};

export default getBoardData;
