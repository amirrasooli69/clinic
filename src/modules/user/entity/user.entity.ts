import { Length } from "class-validator";
import { EntityName } from "src/common/enum/entity-name.enum";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OtpEntity } from "./otp.entity";
import { RoleUser } from "../../../common/enum/role.enum";

@Entity(EntityName.User)
export class UserEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: true })
  @Length(3, 20)
  first_name: string;
  @Column({ nullable: true })
  @Length(3, 20)
  last_name: string;
  @Column({unique: true})
  mobile: string;
  @Column({ nullable: true, default: false })
  mobile_verify: boolean;
  @Column({ default: RoleUser.User })
  role: string;
  @Column({ nullable: true })
  otpId: number;
  @OneToOne(() => OtpEntity, (otp) => otp.user)
  @JoinColumn()
  otp: OtpEntity;
}
