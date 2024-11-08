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
exports.OtpEntity = void 0;
const entity_name_enum_1 = require("../../../common/enum/entity-name.enum");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const clinic_entity_1 = require("../../clinic/entities/clinic.entity");
let OtpEntity = class OtpEntity {
};
exports.OtpEntity = OtpEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], OtpEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], OtpEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], OtpEntity.prototype, "clinicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OtpEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OtpEntity.prototype, "expires_in", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, user => user.otp, { onDelete: "CASCADE" }),
    __metadata("design:type", user_entity_1.UserEntity)
], OtpEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => clinic_entity_1.ClinicEntity, clinic => clinic.otp, { onDelete: "CASCADE" }),
    __metadata("design:type", clinic_entity_1.ClinicEntity)
], OtpEntity.prototype, "clinic", void 0);
exports.OtpEntity = OtpEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityName.Otp)
], OtpEntity);
//# sourceMappingURL=otp.entity.js.map