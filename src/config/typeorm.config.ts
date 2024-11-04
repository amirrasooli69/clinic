import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {config} from 'dotenv';
import { join } from 'path';

config();
config({path: join(process.cwd(), `.env.${process.env.NodeEnv}`)})

export function typeOrmConfig(): TypeOrmModuleOptions {
    const {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} = process.env;
    console.log(DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME);
    return {
        type: "postgres",
        host: "localhost",
        port: +DB_PORT,
        database: "clinic", 
        password: "root",
        username: "postgres",
        autoLoadEntities: false,
        synchronize: true,
        entities: [
            "dist/**/**/**/*.entity{.ts,.js}",
            "dist/**/**/*.entity{.ts,.js}",
        ],
    };
  }