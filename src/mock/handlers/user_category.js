import { rest } from 'msw';

export default rest.post('/user/category', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json({
      state: 200,
      result: 'success',
      message: null,
      data: {},
      error: [],
    })
  );
});
