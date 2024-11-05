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
const role_enum_1 = require("../../common/enum/role.enum");
let UserService = class UserService {
    constructor(userRepository, req) {
        this.userRepository = userRepository;
        this.req = req;
    }
    async create(userDto) {
        const { first_name, last_name, mobile, role } = userDto;
        let user = await this.userRepository.findOneBy({ mobile });
        let message = null;
        if (user) {
            if (first_name)
                user.first_name = first_name;
            if (last_name)
                user.last_name = last_name;
            if (role != role_enum_1.RoleUser.User)
                user.role = role;
            message = message_enum_1.PublicMessage.Updated;
        }
        else {
            user = this.userRepository.create({
                first_name,
                last_name,
                mobile,
                role: role_enum_1.RoleUser.User,
            });
            message = message_enum_1.PublicMessage.Created;
        }
        await this.userRepository.save(user);
        return {
            message,
        };
    }
    async addUser(userDto) {
        console.log(userDto);
        const { first_name, last_name, mobile, role } = userDto;
        console.log(first_name, last_name, mobile, role);
        if (!mobile)
            return { message: message_enum_1.BadRequestMessage.InvalidMobileNumber };
        if (!this.checkExistByMobile(mobile)) {
            await this.userRepository.insert({
                first_name,
                last_name,
                mobile,
                role,
            });
            return {
                message: message_enum_1.PublicMessage.Created,
            };
        }
        return {
            message: message_enum_1.confilictMessage.ConfilictMobile,
        };
    }
    async checkExistByMobile(mobile) {
        return this.userRepository.findOneBy({ mobile });
    }
    async checkExistUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException(message_enum_1.NotFoundMessage.NotFoundUser);
        return user;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async getUserById(id) {
        return await this.checkExistUser(id);
    }
    async delete(id) {
        const user = await this.checkExistUser(id);
        if (!user)
            throw new common_1.NotFoundException(message_enum_1.NotFoundMessage.NotFoundUser);
        await this.userRepository.remove(user);
        return {
            message: message_enum_1.PublicMessage.Deleted,
        };
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