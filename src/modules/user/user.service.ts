import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
    async create(userDto: CreateUserDto){
        const {firest_name, last_name, mobile}=userDto;
        
    }
}