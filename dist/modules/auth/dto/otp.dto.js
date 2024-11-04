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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOtpDto = exports.SendOtpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const message_enum_1 = require("../../../common/enum/message.enum");
class SendOtpDto {
}
exports.SendOtpDto = SendOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsMobilePhone)("fa-IR", {}, { message: message_enum_1.BadRequestMessage.InvalidMobileNumber }),
    __metadata("design:type", String)
], SendOtpDto.prototype, "mobile", void 0);
class CheckOtpDto {
}
exports.CheckOtpDto = CheckOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsMobilePhone)("fa-IR", {}, { message: message_enum_1.BadRequestMessage.InvalidMobileNumber }),
    __metadata("design:type", String)
], CheckOtpDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 5, { message: message_enum_1.BadRequestMessage.InvalidMobileNumber }),
    __metadata("design:type", String)
], CheckOtpDto.prototype, "code", void 0);
//# sourceMappingURL=otp.dto.js.map