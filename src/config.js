import dotenv from 'dotenv';

dotenv.config({ path: '.env', silent: true });

const { env } = process;

export const NODE_ENV = env.NODE_ENV;
export const PORT = env.PORT || 3000;
export const PROPERTY_AUTMATION_SYSTEM_URL = env.PROPERTY_AUTMATION_SYSTEM_URL;

