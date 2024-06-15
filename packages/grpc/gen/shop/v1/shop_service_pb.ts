// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file shop/v1/shop_service.proto (package proto.services.shop.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Status enum
 *
 * @generated from enum proto.services.shop.v1.ShopStatus
 */
export enum ShopStatus {
  /**
   * INACTIVE status
   *
   * @generated from enum value: STATUS_INACTIVE_UNSPECIFIED = 0;
   */
  STATUS_INACTIVE_UNSPECIFIED = 0,

  /**
   * ACTIVE status
   *
   * @generated from enum value: STATUS_ACTIVE = 1;
   */
  STATUS_ACTIVE = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(ShopStatus)
proto3.util.setEnumType(ShopStatus, "proto.services.shop.v1.ShopStatus", [
  { no: 0, name: "STATUS_INACTIVE_UNSPECIFIED" },
  { no: 1, name: "STATUS_ACTIVE" },
]);

/**
 * Shop data message
 *
 * @generated from message proto.services.shop.v1.ShopData
 */
export class ShopData extends Message<ShopData> {
  /**
   * The unique identifier of the shop.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The name of the shop.
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * The email of the shop.
   *
   * @generated from field: string email = 3;
   */
  email = "";

  /**
   * The status of the shop.
   *
   * @generated from field: proto.services.shop.v1.ShopStatus status = 4;
   */
  status = ShopStatus.STATUS_INACTIVE_UNSPECIFIED;

  /**
   * The verify of the shop.
   *
   * @generated from field: bool verify = 5;
   */
  verify = false;

  /**
   * The role of the shop.
   *
   * @generated from field: repeated string role = 6;
   */
  role: string[] = [];

  /**
   * The created at of the shop.
   *
   * @generated from field: string created_at = 7;
   */
  createdAt = "";

  /**
   * The updated at of the shop.
   *
   * @generated from field: string updated_at = 8;
   */
  updatedAt = "";

  constructor(data?: PartialMessage<ShopData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.shop.v1.ShopData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(ShopStatus) },
    { no: 5, name: "verify", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "created_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "updated_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShopData {
    return new ShopData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShopData {
    return new ShopData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShopData {
    return new ShopData().fromJsonString(jsonString, options);
  }

  static equals(a: ShopData | PlainMessage<ShopData> | undefined, b: ShopData | PlainMessage<ShopData> | undefined): boolean {
    return proto3.util.equals(ShopData, a, b);
  }
}

/**
 * Shop registration request
 *
 * @generated from message proto.services.shop.v1.SignUpShopRequest
 */
export class SignUpShopRequest extends Message<SignUpShopRequest> {
  /**
   * The name of the shop.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The email of the shop.
   *
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * The password of the shop.
   *
   * @generated from field: string password = 3;
   */
  password = "";

  /**
   * The status of the shop.
   *
   * @generated from field: proto.services.shop.v1.ShopStatus status = 4;
   */
  status = ShopStatus.STATUS_INACTIVE_UNSPECIFIED;

  /**
   * The verify of the shop.
   *
   * @generated from field: bool verify = 5;
   */
  verify = false;

  /**
   * The role of the shop.
   *
   * @generated from field: repeated string role = 6;
   */
  role: string[] = [];

  constructor(data?: PartialMessage<SignUpShopRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.shop.v1.SignUpShopRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(ShopStatus) },
    { no: 5, name: "verify", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpShopRequest {
    return new SignUpShopRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpShopRequest {
    return new SignUpShopRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpShopRequest {
    return new SignUpShopRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SignUpShopRequest | PlainMessage<SignUpShopRequest> | undefined, b: SignUpShopRequest | PlainMessage<SignUpShopRequest> | undefined): boolean {
    return proto3.util.equals(SignUpShopRequest, a, b);
  }
}

/**
 * Shop registration response
 *
 * @generated from message proto.services.shop.v1.SignUpShopResponse
 */
export class SignUpShopResponse extends Message<SignUpShopResponse> {
  /**
   * The message of the shop.
   *
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * The data of the shop.
   *
   * @generated from field: proto.services.shop.v1.ShopData data = 2;
   */
  data?: ShopData;

  constructor(data?: PartialMessage<SignUpShopResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.services.shop.v1.SignUpShopResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "message", T: ShopData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpShopResponse {
    return new SignUpShopResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpShopResponse {
    return new SignUpShopResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpShopResponse {
    return new SignUpShopResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignUpShopResponse | PlainMessage<SignUpShopResponse> | undefined, b: SignUpShopResponse | PlainMessage<SignUpShopResponse> | undefined): boolean {
    return proto3.util.equals(SignUpShopResponse, a, b);
  }
}

