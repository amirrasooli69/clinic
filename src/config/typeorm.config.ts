import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {config} from 'dotenv';
import { join } from 'path';

config();
config({path: join(process.cwd(), `.env.${process.env.NodeEnv}`)})

export function typeOrmConfig(): TypeOrmModuleOptions {
    const {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} = process.env;
    console.log(DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME);
    return {
        type: "mysql",
        host: DB_HOST,
        port: +DB_PORT,
        database: DB_NAME, 
        password: DB_PASSWORD,
        username: DB_USERNAME,
        autoLoadEntities: false,
        synchronize: true,
        entities: [
            "dist/**/**/**/*.entity{.ts,.js}",
            "dist/**/**/*.entity{.ts,.js}",
        ],
    };
  }