import mongoose from 'mongoose';
import { MONGO_BASE_URL, NODE_ENV } from '@repo/common/src/configs';

const useMongoose = () => {
  const connect = async () => {
    mongoose.connect(MONGO_BASE_URL ?? 'mongodb://localhost:27017/mcom', {});
    mongoose.connection.on('connected', () => console.log('MongoDB connected'));
    mongoose.connection.on('error', (err) => console.error(err));

    if (NODE_ENV === 'development') {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    return mongoose;
  };
  return { connect, mongoose };
};

export { useMongoose };

export type MM = typeof mongoose;
