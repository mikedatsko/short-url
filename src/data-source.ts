import { DataSource } from 'typeorm';
import { UrlItem } from './entity/UrlItem';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || '5432', 10),
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DB,
  synchronize: true,
  logging: false,
  entities: [UrlItem],
  migrations: [],
  subscribers: []
});
