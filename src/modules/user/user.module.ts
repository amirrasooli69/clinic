import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";
import { OtpEntity } from "./entity/otp.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, OtpEntity])],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule{}