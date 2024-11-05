import { EntityName } from "src/common/enum/entity-name.enum";
import { OtpEntity } from "src/modules/user/entity/otp.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClinicStatus } from "../enum/status.enum";

@Entity(EntityName.Clinic)
export class ClinicEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  mobile: string;
  @Column()
  address: string;
  @Column()
  categoryId: number;
  @Column({default: ClinicStatus.Open})
  status: string
  @Column()
  confirmed: Date;
  @CreateDateColumn()
  create_at: Date;
  @OneToOne(()=> OtpEntity, otp => otp.clinic)
  @JoinColumn()
  otp: OtpEntity

}
