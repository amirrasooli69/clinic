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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entity/user.entity");
const typeorm_2 = require("typeorm");
const otp_entity_1 = require("../user/entity/otp.entity");
const crypto_1 = require("crypto");
const jwt_1 = require("@nestjs/jwt");
const message_enum_1 = require("../../common/enum/message.enum");
let AuthService = class AuthService {
    constructor(userRepository, otpRepository, jwtService) {
        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
        this.jwtService = jwtService;
    }
    async sendOtp(otpDto) {
        const { mobile } = otpDto;
        let user = await this.userRepository.findOneBy({ mobile });
        if (!user) {
            user = this.userRepository.create({
                mobile,
            });
            user = await this.userRepository.save(user);
        }
        const code = await this.createOtpForUser(user);
        return {
            message: message_enum_1.PublicMessage.SendOtpCode,
            code
        };
    }
    async checkOtp(otpDto) {
        const { code, mobile } = otpDto;
        const now = new Date();
        const user = await this.userRepository.findOne({
            where: { mobile },
            relations: {
                otp: true,
            },
        });
        if (!user || !user?.otp)
            throw new common_1.UnauthorizedException(message_enum_1.NotFoundMessage.NotFoundUser);
        const otp = user?.otp;
        if (otp?.code !== code)
            throw new common_1.UnauthorizedException(message_enum_1.AuthMessage.InvalidOtpCode);
        if (otp.expires_in < now)
            throw new common_1.UnauthorizedException(message_enum_1.AuthMessage.ExpiredOtpCode);
        if (!user.mobile_verify) {
            await this.userRepository.update({ id: user.id }, {
                mobile_verify: true,
            });
        }
        const { accessToken, refreshToken } = this.makeTokensForUser({
            id: user.id
        });
        return {
            accessToken,
            refreshToken,
            message: message_enum_1.PublicMessage.EntredSuccessfully,
        };
    }
    async checkMobile(mobile) {
        const user = await this.userRepository.findOneBy({ mobile });
        if (user)
            throw new common_1.ConflictException(message_enum_1.confilictMessage.ConfilictMobile);
    }
    async createOtpForUser(user) {
        const expiresIn = new Date(new Date().getTime() + 1000 * 60 * 2);
        const code = (0, crypto_1.randomInt)(10000, 99999).toString();
        let otp = await this.otpRepository.findOneBy({ userId: user.id });
        if (otp) {
            if (otp.expires_in > new Date()) {
                throw new common_1.BadRequestException(message_enum_1.BadRequestMessage.UnInvalidOtpCode);
            }
            otp.code = code;
            otp.expires_in = expiresIn;
        }
        else {
            otp = this.otpRepository.create({
                code,
                expires_in: expiresIn,
                userId: user.id,
            });
        }
        otp = await this.otpRepository.save(otp);
        user.otpId = otp.id;
        await this.userRepository.save(user);
        return code;
    }
    makeTokensForUser(payload) {
        const accessToken = this.jwtService.sign(payload, {
            secret: "asfdjkklj8-fsdjhjkhsdf-sfh",
            expiresIn: "30d",
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: "skfhsfjdh-34kjkdf03hfdjk-ksjdfhjk",
            expiresIn: "1y",
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    async validateAccessToken(token) {
        try {
            const payload = this.jwtService.verify(token, {
                secret: "asfdjkklj8-fsdjhjkhsdf-sfh",
            });
            if (typeof payload === "object" && payload?.id) {
                const user = await this.userRepository.findOneBy({ id: payload.id });
                if (!user) {
                    throw new common_1.UnauthorizedException(message_enum_1.AuthMessage.InvalidOtpCode);
                }
                return user;
            }
            throw new common_1.UnauthorizedException(message_enum_1.AuthMessage.InvalidOtpCode);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(message_enum_1.AuthMessage.InvalidOtpCode);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(otp_entity_1.OtpEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map