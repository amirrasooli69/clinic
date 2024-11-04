"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = typeOrmConfig;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)();
(0, dotenv_1.config)({ path: (0, path_1.join)(process.cwd(), `.env.${process.env.NodeEnv}`) });
function typeOrmConfig() {
    const { DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;
    return {
        type: "mysql",
        host: "localhost",
        port: +DB_PORT,
        database: "clinic",
        password: DB_PASSWORD,
        username: "root",
        autoLoadEntities: false,
        synchronize: true,
        entities: [
            "dist/**/**/**/*.entity{.env,.js}",
            "dist/**/**/*.entity{.env,.js}",
        ]
    };
}
//# sourceMappingURL=typeorm.config.js.map