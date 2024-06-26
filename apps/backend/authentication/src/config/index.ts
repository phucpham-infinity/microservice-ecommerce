import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV ?? 'development'}` });

export const { NODE_ENV, PORT, API_VERSION, ORIGIN, CREDENTIALS, SECRET_KEY } = process.env;
