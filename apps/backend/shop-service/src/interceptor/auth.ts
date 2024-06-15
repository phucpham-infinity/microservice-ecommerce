import { Code, ConnectError, type Interceptor } from '@connectrpc/connect';

export const auth: Interceptor = (next) => async (req) => {
  const token = req.header.get('Authorization');
  if (!token) {
    throw new ConnectError('User not authenticated', Code.Unauthenticated);
  }
  return await next(req);
};
