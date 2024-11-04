import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDto: CreateUserDto): Promise<{
        message: import("../../common/enum/message.enum").PublicMessage;
    }>;
}
