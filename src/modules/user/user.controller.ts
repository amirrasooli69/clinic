import { Controller, Put, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put("create")
  create(@Query() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }
}
