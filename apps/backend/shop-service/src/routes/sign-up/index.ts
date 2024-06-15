import type { HandlerContext } from '@connectrpc/connect';
import { SignUpShopRequest, SignUpShopResponse, ShopStatus } from '@repo/grpc/gen';
import { kUser } from '@/context';

export const signUpShopHandler = async (req: SignUpShopRequest, ctx: HandlerContext) => {
  const user = ctx.values.get(kUser);
  const { email, name, password, role, status, verify } = req;
  return new SignUpShopResponse({
    message: `${user.name}: You said ${req.name}`,
    data: {
      name: 'name',
      email: 'email',
      id: 'id',
      role: ['role'],
      status: ShopStatus.STATUS_ACTIVE,
      verify: true,
      updatedAt: new Date().toDateString(),
      createdAt: new Date().toDateString()
    }
  });
};
