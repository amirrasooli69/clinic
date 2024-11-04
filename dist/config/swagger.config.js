"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfigInt = SwaggerConfigInt;
const swagger_1 = require("@nestjs/swagger");
function SwaggerConfigInt(app) {
    const document = new swagger_1.DocumentBuilder()
        .setTitle("Clinic")
        .setDescription("backend of Clinic website")
        .setVersion("v0.0.1")
        .addBearerAuth(SwaggerAuthConfig(), "Authorization")
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, document);
    swagger_1.SwaggerModule.setup("/swagger", app, swaggerDocument);
}
function SwaggerAuthConfig() {
    return {
        type: "http",
        bearerFormat: "jwt",
        in: "header",
        scheme: "bearer"
    };
}
//# sourceMappingURL=swagger.config.js.map