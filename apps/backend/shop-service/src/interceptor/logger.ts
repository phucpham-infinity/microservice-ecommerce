import { type Interceptor } from '@connectrpc/connect';
import pino from 'pino';

const pinoLogger = pino();

export const logger: Interceptor = (next) => async (req) => {
  pinoLogger.info(`Recevied message: ${req.url} === ${req.message}`);
  const res = await next(req);
  if (!res.stream) {
    pinoLogger.info(`Response message: ${req.url} === ${req.message}`);
  }
  return res;
};
