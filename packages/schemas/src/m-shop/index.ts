import { Schema, InferRawDocType, model } from 'mongoose';

const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'shops';

const schemaDefinition = {
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  verify: {
    type: Boolean,
    default: false
  },
  role: {
    type: Array,
    required: true,
    default: []
  }
};

const shopSchema = new Schema(schemaDefinition, { timestamps: true, collection: COLLECTION_NAME });

export const shopModal = model(DOCUMENT_NAME, shopSchema);
export type TShop = InferRawDocType<typeof schemaDefinition>;
