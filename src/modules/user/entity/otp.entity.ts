import { EntityName } from "src/common/enum/entity-name.enum";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity(EntityName.Otp)
export class OtpEntity{
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column({nullable: true})
    userId: number;
    @Column({nullable: true})
    clinicId: number;
    @Column({nullable: true})
    code: string;
    @Column()
    expires_in: Date;
    @OneToOne(()=> UserEntity, user => user.otp)
    user: UserEntity
}