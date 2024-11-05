import { UserEntity } from "./user.entity";
import { ClinicEntity } from "src/modules/clinic/entities/clinic.entity";
export declare class OtpEntity {
    id: number;
    userId: number;
    clinicId: number;
    code: string;
    expires_in: Date;
    user: UserEntity;
    clinic: ClinicEntity;
}
