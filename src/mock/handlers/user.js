import { rest } from 'msw';

export default rest.get('/user', (req, res, ctx) => {
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
        nickName: '조조수학',
        email: 'pch468@naver.com',
        regDate: '2022-03-05 10:34:19',
        temperature: '36.5',
        birthday: '1995-08-28',
        categoryList: [],
      },
      error: [],
    })
  );
});
