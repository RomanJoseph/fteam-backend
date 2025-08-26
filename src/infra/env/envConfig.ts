import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? 5432,
    username: process.env.DB_USER ?? 'taskmanager',
    password: process.env.DB_PASSWORD ?? 'taskmanager',
    database: process.env.DB_DATABASE ?? 'taskmanager',
  },
};
