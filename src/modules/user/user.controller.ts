import { Controller, Delete, Get, Param, ParseIntPipe, Put, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { CanAccess } from "src/common/decorators/role.decorator";
import { RoleUser } from "src/common/enum/role.enum";

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

  @Put("/new-user")
  @CanAccess(RoleUser.Admin)
  addUser(@Query() userDto: CreateUserDto){
    return this.userService.addUser(userDto)
  }

  @CanAccess(RoleUser.Admin)
  @Delete("/delete/:id")
  delete(@Param("id", ParseIntPipe) id: number){
    return this.userService.delete(id);
  }
}
