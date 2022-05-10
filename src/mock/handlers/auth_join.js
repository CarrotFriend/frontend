import { rest } from 'msw';

export default rest.post('/auth/join', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(500),
    ctx.json({
      state: 200,
    })
  );
});
