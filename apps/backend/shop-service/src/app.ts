import { fastify } from 'fastify';
//@ts-ignore
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import { setContextValues } from '@/context';
import { connect } from '@/db';
import { SHOP_SERVICE_PORT } from '@repo/common/src/configs';
import { logger } from '@/interceptor';
import { routes } from '@/routes';

export const main = async () => {
  const server = fastify({ http2: true });
  await server.register(fastifyConnectPlugin, {
    routes,
    interceptors: [logger],
    contextValues: setContextValues
  });
  await server.listen({ host: 'localhost', port: Number(SHOP_SERVICE_PORT) });
  console.log('server is listening at', server.addresses());
  await connect();
};
