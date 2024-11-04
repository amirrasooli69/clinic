import { Length } from "class-validator";
import { EntityName } from "src/common/enum/entity-name.enum";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OtpEntity } from "./otp.entity";

@Entity(EntityName.User)
export class UserEntity{
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column({nullable: true})
    @Length(3,20)
    first_name: string;
    @Column({nullable: true})
    @Length(3,20)
    last_name: string;
    @Column()
    mobile: string
    @Column({nullable: true, default: false})
    mobile_verify: boolean
    @Column({nullable: true})
    otpId: number;
    @OneToOne(()=> OtpEntity, otp => otp.user, {onDelete: "CASCADE"})
    @JoinColumn()
    otp: OtpEntity
}

