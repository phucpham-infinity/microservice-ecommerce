// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file shop/v1/shop_service.proto (package proto.services.shop.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SignUpShopRequest, SignUpShopResponse } from './shop_service_pb';
import { MethodKind } from '@bufbuild/protobuf';

/**
 * The user service definition.
 *
 * @generated from service proto.services.shop.v1.ShopService
 */
export const ShopService = {
  typeName: 'proto.services.shop.v1.ShopService',
  methods: {
    /**
     * Shop registration
     *
     * @generated from rpc proto.services.shop.v1.ShopService.SignUpShop
     */
    signUpShop: {
      name: 'SignUpShop',
      I: SignUpShopRequest,
      O: SignUpShopResponse,
      kind: MethodKind.Unary
    }
  }
} as const;
