import dotenv from 'dotenv';

dotenv.config();

export const credentials = {
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'postgres',
  database: process.env.PGDATABASE || 'migration',
  port: process.env.PGPORT || 5432,
};

export const env = process.env.NODE_ENV;
