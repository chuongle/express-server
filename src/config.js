import dotenv from 'dotenv';

dotenv.config({ path: '.env', silent: true });

const { env } = process;

export const NODE_ENV = env.NODE_ENV;
export const PORT = env.PORT || 3000;
