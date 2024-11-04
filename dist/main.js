"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app/app.module");
const swagger_config_1 = require("./config/swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, swagger_config_1.SwaggerConfigInt)(app);
    const { PORT = 3000 } = process.env;
    await app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
        console.log(`http://localhost:${PORT}/swagger`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map