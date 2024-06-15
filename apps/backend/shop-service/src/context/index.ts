import { createContextValues } from '@connectrpc/connect';
import { kAuthenticate, kUser } from './user-context';
import { FastifyRequest } from 'fastify';

export * from './user-context';

export const setContextValues = (req: FastifyRequest) => {
  return createContextValues().set(kUser, kAuthenticate(req));
};
