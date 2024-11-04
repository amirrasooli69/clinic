import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "src/config/typeorm.config";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig()),
        AuthModule,
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}