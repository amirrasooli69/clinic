import { BadRequestException, Inject, Injectable, NotFoundException, Scope, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "express";
import { REQUEST } from "@nestjs/core";
import { AuthMessage, BadRequestMessage, NotFoundMessage, PublicMessage } from "src/common/enum/message.enum";

@Injectable({scope: Scope.REQUEST})
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @Inject(REQUEST) private req: Request){}

    async create(userDto: CreateUserDto){
        const {first_name, last_name, mobile}=userDto;
        let user = await this.userRepository.findOneBy({mobile});
        let message=null;
        if(user){
            //update

            if(first_name) user.first_name = first_name;
            if(last_name) user.last_name = last_name;

            message= PublicMessage.Updated

        } else {
            // create
            user = this.userRepository.create({
                first_name,
                last_name,
                mobile
            })
            message= PublicMessage.Created
        }
        await this.userRepository.save(user);
        
        return {
            message
        }

        
    }

    async checkExistUser(id: number){
        const user = await this.userRepository.findOneBy({id})
        if(!user) throw new NotFoundException(NotFoundMessage.NotFoundUser)
        return user;
    }

    async findAll(){
        return await this.userRepository.find()
    }

    async getUserById(id: number){
        return await this.checkExistUser(id);
    }

    async delete(id: number){
        const user = await this.checkExistUser(id);
        if(!user) throw new NotFoundException(NotFoundMessage.NotFoundUser)
        await this.userRepository.remove(user)
        
        return {
            message: PublicMessage.Deleted
        }
    }
}