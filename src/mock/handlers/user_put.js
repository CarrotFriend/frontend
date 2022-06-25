import { rest } from 'msw';

export default rest.put('/user', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json({
      state: 200,
      result: 'success',
      message: null,
      data: {
        id: 1,
        userId: 'abc',
        userName: '김성훈',
        nickName: '취업하자잇',
        email: 'pch468@naver.com',
        regDate: '2022-06-23 10:34:19',
        temperature: '36.5',
        birthday: '1995-08-28',
        categoryList: [
          {
            code: 1,
            name: '스터디',
          },
          {
            code: 2,
            name: '여행',
          },
          {
            code: 6,
            name: '맛집 탐방',
          },
          {
            code: 8,
            name: '운동',
          },
        ],
      },
      error: [],
    })
  );
});
