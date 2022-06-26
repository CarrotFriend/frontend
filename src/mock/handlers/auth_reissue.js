import { rest } from 'msw';

export default rest.post('/auth/reissue', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(100),
    ctx.json({
      state: 200,
      result: 'success',
      message: null,
      data: {
        grantType: 'Bearer',
        accessToken:
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjMiLCJhdXRoIjoiVVNFUl9ST0xFIiwiaWF0IjoxNjQ3NTQzNjk4LCJleHAiOjE2NDc1NDU0OTh9.FYwtEcgwc6rNPSdSdHHTArPrbairve3RlGs1t1LUjWF1WV0MR_a_cG4DM3kB2h5wcOD02ARC1plrJBsasFCeHw',
      },
      error: [],
    })
  );
});
