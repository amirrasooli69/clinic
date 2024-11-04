import { Controller, Delete, Get, Param, ParseIntPipe, Put, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put("create")
  create(@Query() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @Get("/:id")
  getUserById(@Param("id", ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Delete("/delete/:id")
  delete(@Param("id", ParseIntPipe) id: number){
    return this.userService.delete(id);
  }
}
