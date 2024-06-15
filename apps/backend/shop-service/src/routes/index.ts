import type { ConnectRouter } from '@connectrpc/connect';
import { ShopService } from '@repo/grpc/gen';
import { signUpShopHandler } from './sign-up';

export const routes = (router: ConnectRouter) =>
  //@ts-ignore
  router.service(ShopService, {
    signUpShop: signUpShopHandler
  });
