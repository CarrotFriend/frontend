import { rest } from 'msw';

const handlers = [
  rest.post('/auth/login', (req, res, ctx) => {
    const { userId, pw } = req.body;
    if (userId === 'abc' && pw === '1234') {
      return res(
        ctx.status(200),
        ctx.json({
          items: [{ name: 'product-1' }, { name: 'product-2' }],
        })
      );
    }
    return res(ctx.status(401));
  }),
];

export default handlers;
