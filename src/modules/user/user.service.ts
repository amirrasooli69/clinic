import { Inject, Injectable, Scope, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "express";
import { REQUEST } from "@nestjs/core";
import { AuthMessage, PublicMessage } from "src/common/enum/message.enum";

@Injectable({scope: Scope.REQUEST})
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @Inject(REQUEST) private req: Request){}
    async create(userDto: CreateUserDto){
        await this.findUser();
        const {first_name, last_name, mobile}=userDto;
        const user = this.userRepository.create({
            first_name,
            last_name,
            mobile
        })
        await this.userRepository.save(user);
        
        return {
            message: PublicMessage.created
        }
        
    }

    async findUser(){
        const {id: userId} = this?.req?.user
        const user = await this.userRepository.findOneBy(userId)
        if(!user) throw new UnauthorizedException(AuthMessage.UnEntredAcoount)
        return user;
    }
}