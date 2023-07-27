// database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_postgres_username',
  password: 'your_postgres_password',
  database: 'your_database_name',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Activez seulement en développement, ne pas utiliser en production
};
