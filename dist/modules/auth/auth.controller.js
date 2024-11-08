"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const otp_dto_1 = require("./dto/otp.dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_onsumes_enum_1 = require("../../common/enum/swagger.onsumes.enum");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    sendOtp(otpDto) {
        return this.authService.sendOtp(otpDto);
    }
    checkOtp(otpDto) {
        return this.authService.checkOtp(otpDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("/send-otp"),
    (0, swagger_1.ApiConsumes)(swagger_onsumes_enum_1.SwaggerConsumes.UrlEncoded, swagger_onsumes_enum_1.SwaggerConsumes.Json),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_dto_1.SendOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "sendOtp", null);
__decorate([
    (0, common_1.Post)("/check-otp"),
    (0, swagger_1.ApiConsumes)(swagger_onsumes_enum_1.SwaggerConsumes.UrlEncoded, swagger_onsumes_enum_1.SwaggerConsumes.Json),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_dto_1.CheckOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkOtp", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map