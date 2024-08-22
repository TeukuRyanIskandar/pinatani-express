import { DataSource } from "typeorm";

const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: isProduction ? process.env.PROD_DB_HOST : "localhost",
  port: isProduction ? parseInt(process.env.PROD_DB_PORT || '5432', 10) : 5432,
  username: isProduction ? process.env.PROD_DB_USERNAME : "user",
  password: isProduction ? process.env.PROD_DB_PASSWORD : "password",
  database: isProduction ? process.env.PROD_DB_NAME : "postgres",
  entities: ["src/app/models/*.entity{.ts,.js}"],
  migrations: ["src/db/migrations/*{.ts,.js}"],
  synchronize: false,
  logging: !isProduction,
});