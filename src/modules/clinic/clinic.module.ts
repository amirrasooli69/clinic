import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicEntity } from './entities/clinic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicEntity])],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
