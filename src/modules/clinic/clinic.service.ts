import { Injectable } from '@nestjs/common';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClinicEntity } from './entities/clinic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClinicService {
  constructor(@InjectRepository(ClinicEntity) private clinicRepository: Repository<ClinicEntity>){}
  async create(createClinicDto: CreateClinicDto) {
    const {first_name, last_name, address, categoryId, confirmed, mobile, status}= createClinicDto;
    const clinic = this.clinicRepository.create({
      first_name,
      last_name,
      address,
      mobile,
      status,
    })
    return 'This action adds a new clinic';
  }

  findAll() {
    return `This action returns all clinic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinic`;
  }

  update(id: number, updateClinicDto: UpdateClinicDto) {
    return `This action updates a #${id} clinic`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinic`;
  }
}
