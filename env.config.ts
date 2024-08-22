import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  NODE_ENV: process.env.NODE_ENV as
  | "development"
  | "production"
  | undefined,
  SERVER_PORT: process.env.SERVER_PORT || 4000,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_NAME: process.env.POSTGRES_NAME,
};

export { envConfig };
