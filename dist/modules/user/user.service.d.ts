import { CreateUserDto } from "./dto/user.dto";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { Request } from "express";
import { BadRequestMessage, confilictMessage, PublicMessage } from "src/common/enum/message.enum";
export declare class UserService {
    private userRepository;
    private req;
    constructor(userRepository: Repository<UserEntity>, req: Request);
    create(userDto: CreateUserDto): Promise<{
        message: any;
    }>;
    addUser(userDto: CreateUserDto): Promise<{
        message: BadRequestMessage;
    } | {
        message: PublicMessage;
    } | {
        message: confilictMessage;
    }>;
    checkExistByMobile(mobile: string): Promise<UserEntity>;
    checkExistUser(id: number): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    getUserById(id: number): Promise<UserEntity>;
    delete(id: number): Promise<{
        message: PublicMessage;
    }>;
}
