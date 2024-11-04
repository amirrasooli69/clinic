// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import {config} from 'dotenv';
// import { join } from 'path';

// config();
// config({path: join(process.cwd(), `.env.${process.env.NodeEnv}`)})

// export function typeOrmConfig(): TypeOrmModuleOptions {
//     const { DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST}= process.env;
//     return {
//         type: "mysql",
//         host: "localhost",
//         port: +DB_PORT,
//         database: "clinic",
//         password: DB_PASSWORD,
//         username: "root",
//         autoLoadEntities: false,
//         synchronize: true,
//         entities: [
//                 "dist/**/**/**/*.entity{.env,.js}",
//                 "dist/**/**/*.entity{.env,.js}",
//         ]
//     }
// }



import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {config} from 'dotenv';
import { join } from 'path';

config();
config({path: join(process.cwd(), `.env.${process.env.NodeEnv}`)})

export function TypeOrmConfig(): TypeOrmModuleOptions {
    const {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} = process.env;
    console.log(DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME);
    return {
        type: "mysql",
        host: DB_HOST,
        port: +DB_PORT,
        database: "snappfood", 
        password: DB_PASSWORD,
        username: "root",
        autoLoadEntities: false,
        synchronize: true,
        entities: [
            "dist/**/**/**/*.entity{.ts,.js}",
            "dist/**/**/*.entity{.ts,.js}",
        ],
    };
  }