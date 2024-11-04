import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {config} from 'dotenv';
import { join } from 'path';

config();
config({path: join(process.cwd(), `.env.${process.env.NodeEnv}`)})

export function typeOrmConfig(): TypeOrmModuleOptions {
    const { DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST}= process.env;
    return {
        type: "mysql",
        host: DB_HOST,
        port: +DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        autoLoadEntities: false,
        synchronize: true,
        entities: [
                "dist/**/**/**/*.entity{.env,.js}",
                "dist/**/**/*.entity{.env,.js}",
        ]
    }
}