import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "src/config/typeorm.config";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClinicModule } from "../clinic/clinic.module";

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig()),
        AuthModule,
        UserModule,
        ClinicModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}