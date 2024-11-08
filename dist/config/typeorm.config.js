"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = typeOrmConfig;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)();
(0, dotenv_1.config)({ path: (0, path_1.join)(process.cwd(), `.env.${process.env.NodeEnv}`) });
function typeOrmConfig() {
    const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } = process.env;
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
//# sourceMappingURL=typeorm.config.js.map