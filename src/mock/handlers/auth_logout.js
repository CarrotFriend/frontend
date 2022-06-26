import { rest } from 'msw';

export default rest.post('/auth/logout', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(100),
    ctx.json({
      state: 200,
      result: 'success',
      message: null,
      data: {},
      error: [],
    })
  );
});
