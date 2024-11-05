import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "express";
import { REQUEST } from "@nestjs/core";
import {
  BadRequestMessage,
  confilictMessage,
  NotFoundMessage,
  PublicMessage,
} from "src/common/enum/message.enum";
import { RoleUser } from "../../common/enum/role.enum";

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @Inject(REQUEST) private req: Request
  ) {}

  async create(userDto: CreateUserDto) {
    const { first_name, last_name, mobile, role } = userDto;
    let user = await this.userRepository.findOneBy({ mobile });
    let message = null;
    if (user) {
      //update

      if (first_name) user.first_name = first_name;
      if (last_name) user.last_name = last_name;
      if (role != RoleUser.User) user.role = role;

      message = PublicMessage.Updated;
    } else {
      // create
      user = this.userRepository.create({
        first_name,
        last_name,
        mobile,
        role: RoleUser.User,
      });
      message = PublicMessage.Created;
    }
    await this.userRepository.save(user);

    return {
      message,
    };
  }

  async addUser(userDto: CreateUserDto) {
    console.log(userDto);
    const { first_name, last_name, mobile, role } = userDto;
    console.log(first_name, last_name, mobile, role);
    if (!mobile)
      return {message: BadRequestMessage.InvalidMobileNumber}
    if (!this.checkExistByMobile(mobile)) {
      await this.userRepository.insert({
        first_name,
        last_name,
        mobile,
        role,
      });

      return {
        message: PublicMessage.Created,
      };
    }
    return {
      message: confilictMessage.ConfilictMobile,
    };
  }

  async checkExistByMobile(mobile: string) {
    return this.userRepository.findOneBy({ mobile });
  }

  async checkExistUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(NotFoundMessage.NotFoundUser);
    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async getUserById(id: number) {
    return await this.checkExistUser(id);
  }

  async delete(id: number) {
    const user = await this.checkExistUser(id);
    if (!user) throw new NotFoundException(NotFoundMessage.NotFoundUser);
    await this.userRepository.remove(user);

    return {
      message: PublicMessage.Deleted,
    };
  }
}
