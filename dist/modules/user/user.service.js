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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entity/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const core_1 = require("@nestjs/core");
const message_enum_1 = require("../../common/enum/message.enum");
let UserService = class UserService {
    constructor(userRepository, req) {
        this.userRepository = userRepository;
        this.req = req;
    }
    async create(userDto) {
        await this.findUser();
        const { first_name, last_name, mobile } = userDto;
        const user = this.userRepository.create({
            first_name,
            last_name,
            mobile
        });
        await this.userRepository.save(user);
        return {
            message: message_enum_1.PublicMessage.created
        };
    }
    async findUser() {
        const { id: userId } = this?.req?.user;
        const user = await this.userRepository.findOneBy(userId);
        if (!user)
            throw new common_1.UnauthorizedException(message_enum_1.AuthMessage.UnEntredAcoount);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object])
], UserService);
//# sourceMappingURL=user.service.js.map