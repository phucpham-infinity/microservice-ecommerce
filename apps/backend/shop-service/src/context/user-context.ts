import { createContextKey } from '@connectrpc/connect';
import { FastifyRequest } from 'fastify';
import { jwtDecode } from 'jwt-decode';

type User = { name: string };

export const kUser = createContextKey<User>(
  { name: 'Anonymous' } // Default value
);

export const kAuthenticate = (req: FastifyRequest) => {
  const token = req.headers['authorization'];
  if (!token) {
    return { name: 'Anonymous' };
  }
  return jwtDecode(token);
};
