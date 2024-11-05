import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDto: CreateUserDto): Promise<{
        message: any;
    }>;
    getUserById(id: number): Promise<import("./entity/user.entity").UserEntity>;
    findAll(): Promise<import("./entity/user.entity").UserEntity[]>;
    addUser(userDto: CreateUserDto): Promise<{
        message: import("../../common/enum/message.enum").BadRequestMessage;
    } | {
        message: import("../../common/enum/message.enum").PublicMessage;
    } | {
        message: import("../../common/enum/message.enum").confilictMessage;
    }>;
    delete(id: number): Promise<{
        message: import("../../common/enum/message.enum").PublicMessage;
    }>;
}
