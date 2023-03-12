import { RequestHandler, rest } from 'msw';

export const handlers: RequestHandler[] = [
  rest.get(`/api/super`, (req, res, context) =>
    res(
      context.status(200),
      context.json({
        data: `OK`,
      }),
    ),
  ),
];
