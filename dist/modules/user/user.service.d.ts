import { CreateUserDto } from "./dto/user.dto";
export declare class UserService {
    create(userDto: CreateUserDto): Promise<void>;
}
