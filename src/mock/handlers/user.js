import { rest } from 'msw';

export default rest.get('/user', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json({
      state: 200,
      data: {
        id: 1,
        userId: 'music468',
        nickName: '조조수학',
        categoryList: [],
      },
    })
  );
});
